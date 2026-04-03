import { beforeEach, describe, expect, it } from "vitest";
import { resource } from "./resource";
import { z } from "./schema";

describe("resource", () => {
  beforeEach(() => {
    (globalThis as any).__ct_resources = [];
  });

  it("returns a callable function", () => {
    const r = resource("mygroup.io/v1", "MyKind", {
      spec: { field: z.string() },
    });
    expect(typeof r).toBe("function");
  });

  it("exposes gvk with group/version/kind", () => {
    const r = resource("mygroup.io/v1", "MyKind", {
      spec: { f: z.string() },
    });
    expect(r.gvk).toEqual({
      group: "mygroup.io",
      version: "v1",
      kind: "MyKind",
    });
  });

  it("parses core apiVersion (no group)", () => {
    const r = resource("v1", "ConfigMap", {
      spec: { data: z.record(z.string()) },
    });
    expect(r.gvk).toEqual({ group: "", version: "v1", kind: "ConfigMap" });
  });

  it("defaults scope to Namespaced", () => {
    const r = resource("mygroup.io/v1", "MyKind", {
      spec: { f: z.string() },
    });
    expect(r.scope).toBe("Namespaced");
  });

  it("supports Cluster scope", () => {
    const r = resource("mygroup.io/v1", "MyKind", {
      scope: "Cluster",
      spec: { f: z.string() },
    });
    expect(r.scope).toBe("Cluster");
  });

  it("exposes shortNames", () => {
    const r = resource("mygroup.io/v1", "MyKind", {
      shortNames: ["mk", "myk"],
      spec: { f: z.string() },
    });
    expect(r.shortNames).toEqual(["mk", "myk"]);
  });

  it("marks _isCtResource = true", () => {
    const r = resource("mygroup.io/v1", "MyKind", {
      spec: { f: z.string() },
    });
    expect(r._isCtResource).toBe(true);
  });

  describe("openAPISchema", () => {
    it("generates spec schema", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: {
          image: z.string(),
          replicas: z.number().default(1),
        },
      });
      expect(r.openAPISchema.spec).toEqual({
        type: "object",
        properties: {
          image: { type: "string" },
          replicas: { type: "integer", default: 1 },
        },
        required: ["image"],
      });
    });

    it("generates status schema when provided", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { image: z.string() },
        status: {
          ready: z.boolean(),
          phase: z.enum(["Pending", "Running"]),
        },
      });
      expect(r.openAPISchema.status).toEqual({
        type: "object",
        properties: {
          ready: { type: "boolean" },
          phase: { type: "string", enum: ["Pending", "Running"] },
        },
        required: ["ready", "phase"],
      });
    });

    it("status is undefined when not provided", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { f: z.string() },
      });
      expect(r.openAPISchema.status).toBeUndefined();
    });
  });

  describe("callable (manifest creation)", () => {
    it("creates manifest with flat spec fields", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { image: z.string(), replicas: z.number() },
      });
      const m = r({ name: "my-app", image: "nginx", replicas: 3 });

      expect(m).toEqual({
        apiVersion: "mygroup.io/v1",
        kind: "MyKind",
        metadata: { name: "my-app" },
        spec: { image: "nginx", replicas: 3 },
      });
    });

    it("pushes manifest to __ct_resources", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { f: z.string() },
      });
      const m = r({ name: "a", f: "x" });
      expect((globalThis as any).__ct_resources).toHaveLength(1);
      expect((globalThis as any).__ct_resources[0]).toBe(m);
    });

    it("includes namespace, labels, annotations in metadata", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { image: z.string() },
      });
      const m = r({
        name: "app",
        namespace: "prod",
        labels: { app: "test" },
        annotations: { note: "hi" },
        image: "nginx",
      });
      expect(m.metadata).toEqual({
        name: "app",
        namespace: "prod",
        labels: { app: "test" },
        annotations: { note: "hi" },
      });
    });

    it("omits undefined metadata fields", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { f: z.string() },
      });
      const m = r({ name: "app", f: "val" });
      expect(m.metadata).toEqual({ name: "app" });
      expect(Object.keys(m.metadata)).toEqual(["name"]);
    });

    it("returns the manifest object", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { image: z.string() },
      });
      const m = r({ name: "x", image: "y" });
      expect(m.apiVersion).toBe("mygroup.io/v1");
      expect(m.kind).toBe("MyKind");
    });

    it("multiple calls accumulate in __ct_resources", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        spec: { f: z.string() },
      });
      r({ name: "a", f: "1" });
      r({ name: "b", f: "2" });
      expect((globalThis as any).__ct_resources).toHaveLength(2);
    });
  });
});
