import { beforeEach, describe, expect, it } from "vitest";
import { operator, Result } from "./operator";
import { resource } from "./resource";
import { z } from "./schema";

const watchRes = resource("myapp.io/v1", "MyApp", {
  scope: "Namespaced",
  shortNames: ["ma"],
  spec: {
    image: z.string(),
    replicas: z.number().default(1),
  },
  status: {
    ready: z.boolean(),
    phase: z.enum(["Pending", "Running", "Failed"]),
  },
});

describe("operator builder", () => {
  beforeEach(() => {
    (globalThis as any).__ct_resources = [];
    (globalThis as any).__ct_operator = undefined;
  });

  it("returns a builder with all chaining methods", () => {
    const b = operator(watchRes);
    expect(b).toHaveProperty("manages");
    expect(b).toHaveProperty("reads");
    expect(b).toHaveProperty("permission");
    expect(b).toHaveProperty("env");
    expect(b).toHaveProperty("every");
    expect(b).toHaveProperty("reconcile");
  });

  it("reconcile sets __ct_operator with watch config", () => {
    operator(watchRes).reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg).toBeDefined();
    expect(cfg.watch).toEqual({
      group: "myapp.io",
      version: "v1",
      kind: "MyApp",
    });
    expect(cfg.watchScope).toBe("Namespaced");
    expect(cfg.watchShortNames).toEqual(["ma"]);
    expect(cfg.watchSchema).toBeDefined();
    expect(cfg.watchSchema.spec).toBeDefined();
    expect(cfg.watchSchema.status).toBeDefined();
  });

  it("manages registers GVKs", () => {
    const dep = resource("apps/v1", "Deployment", {
      spec: { replicas: z.number() },
    });
    const svc = resource("v1", "Service", {
      spec: { ports: z.array(z.number()) },
    });

    operator(watchRes)
      .manages(dep, svc)
      .reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.manages).toEqual([
      { group: "apps", version: "v1", kind: "Deployment" },
      { group: "", version: "v1", kind: "Service" },
    ]);
  });

  it("reads registers GVKs", () => {
    const secret = resource("v1", "Secret", {
      spec: { data: z.record(z.string()) },
    });

    operator(watchRes)
      .reads(secret)
      .reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.reads).toEqual([{ group: "", version: "v1", kind: "Secret" }]);
  });

  it("permission adds custom RBAC rules", () => {
    operator(watchRes)
      .permission({ apiGroup: "", resources: ["events"], verbs: ["create"] })
      .permission({
        apiGroup: "apps",
        resources: ["deployments"],
        verbs: ["get", "list"],
      })
      .reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.permissions).toHaveLength(2);
    expect(cfg.permissions[0]).toEqual({
      apiGroup: "",
      resources: ["events"],
      verbs: ["create"],
    });
  });

  it("env registers environment variable names", () => {
    operator(watchRes)
      .env("API_TOKEN", "DB_URL")
      .reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.envVars).toEqual(["API_TOKEN", "DB_URL"]);
  });

  it("every sets periodic interval", () => {
    operator(watchRes)
      .every("5m")
      .reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.periodicInterval).toBe("5m");
  });

  it("reconcile stores the reconcile function", () => {
    const fn = () => Result.ok();
    operator(watchRes).reconcile(fn);

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.reconcileFn).toBe(fn);
  });

  it("defaults: empty manages/reads/permissions, no periodic", () => {
    operator(watchRes).reconcile(() => Result.ok());

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.manages).toEqual([]);
    expect(cfg.reads).toEqual([]);
    expect(cfg.permissions).toEqual([]);
    expect(cfg.envVars).toEqual([]);
    expect(cfg.periodicInterval).toBeNull();
  });

  it("full chain works", () => {
    const dep = resource("apps/v1", "Deployment", {
      spec: { replicas: z.number() },
    });

    operator(watchRes)
      .manages(dep)
      .env("TOKEN")
      .every("10m")
      .permission({
        apiGroup: "",
        resources: ["events"],
        verbs: ["create", "patch"],
      })
      .reconcile((cr) => {
        dep({ name: cr.metadata.name, replicas: 3 });
        return Result.requeueAfter("30s");
      });

    const cfg = (globalThis as any).__ct_operator;
    expect(cfg.manages).toHaveLength(1);
    expect(cfg.envVars).toEqual(["TOKEN"]);
    expect(cfg.periodicInterval).toBe("10m");
    expect(cfg.permissions).toHaveLength(1);
    expect(typeof cfg.reconcileFn).toBe("function");
  });

  it("every method returns builder (chaining)", () => {
    const b = operator(watchRes);
    expect(b.every("1m")).toBe(b);
  });

  it("manages method returns builder (chaining)", () => {
    const dep = resource("apps/v1", "Deployment", {
      spec: { replicas: z.number() },
    });
    const b = operator(watchRes);
    expect(b.manages(dep)).toBe(b);
  });
});

describe("Result", () => {
  it("ok()", () => {
    expect(Result.ok()).toEqual({ _type: "ok" });
  });

  it("requeue()", () => {
    expect(Result.requeue()).toEqual({ _type: "requeue" });
  });

  it("requeueAfter(duration)", () => {
    expect(Result.requeueAfter("10s")).toEqual({
      _type: "requeueAfter",
      after: "10s",
    });
  });

  it("each call returns a new object", () => {
    const a = Result.ok();
    const b = Result.ok();
    expect(a).not.toBe(b);
    expect(a).toEqual(b);
  });
});
