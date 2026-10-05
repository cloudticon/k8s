import { beforeEach, describe, expect, expectTypeOf, it } from "vitest";
import {
  resource,
  type MetadataArgs,
  type ResourceFn,
  type ResourceManifest,
  type ResourceManifestBase,
} from "./resource";
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

    it("keeps undeclared args under a declared (even empty) spec", () => {
      const r = resource("monitoring.coreos.com/v1", "ServiceMonitor", {
        spec: {},
      });
      const m = r({ name: "sm", selector: { app: "x" } } as any);
      expect(m).toStrictEqual({
        apiVersion: "monitoring.coreos.com/v1",
        kind: "ServiceMonitor",
        metadata: { name: "sm" },
        spec: { selector: { app: "x" } },
      });
    });
  });

  describe("cluster scope marker", () => {
    it("marks cluster-scoped manifests with __ctts_scope: cluster", () => {
      const r = resource("mygroup.io/v1", "MyClusterKind", {
        scope: "Cluster",
        spec: { f: z.string() },
      });
      const m = r({ name: "a", f: "x" });
      expect(m).toStrictEqual({
        apiVersion: "mygroup.io/v1",
        kind: "MyClusterKind",
        metadata: { name: "a" },
        spec: { f: "x" },
        __ctts_scope: "cluster",
      });
      expect((globalThis as any).__ct_resources[0]).toBe(m);
    });

    it("does not mark namespaced manifests", () => {
      const r = resource("mygroup.io/v1", "MyKind", {
        scope: "Namespaced",
        spec: { f: z.string() },
      });
      expect(r({ name: "a", f: "x" })).not.toHaveProperty("__ctts_scope");
    });

    it("leaves metadata untouched for cluster-scoped kinds", () => {
      const r = resource("mygroup.io/v1", "MyClusterKind", {
        scope: "Cluster",
        spec: {},
      });
      const m = r({ name: "a", namespace: "ns", labels: { l: "1" } });
      expect(m.metadata).toStrictEqual({
        name: "a",
        namespace: "ns",
        labels: { l: "1" },
      });
    });
  });

  describe("topLevel fields", () => {
    it("renders fields at the root and omits spec when there is no spec", () => {
      const r = resource("v1", "ConfigMap", {
        topLevel: {
          data: z.record(z.string()).optional(),
          immutable: z.boolean().optional(),
        },
      });
      const m = r({ name: "cfg", data: { A: "1" }, immutable: true });
      expect(m).toStrictEqual({
        apiVersion: "v1",
        kind: "ConfigMap",
        metadata: { name: "cfg" },
        data: { A: "1" },
        immutable: true,
      });
      expect(m).not.toHaveProperty("spec");
      expect((globalThis as any).__ct_resources[0]).toBe(m);
    });

    it("renders undeclared args at the root when there is no spec", () => {
      const r = resource("v1", "ConfigMap", {
        topLevel: { data: z.record(z.string()).optional() },
      });
      const m = r({ name: "cfg", newField: 1 } as any);
      expect(m).toStrictEqual({
        apiVersion: "v1",
        kind: "ConfigMap",
        metadata: { name: "cfg" },
        newField: 1,
      });
    });

    it("splits root and spec fields when both are declared", () => {
      const r = resource("example.com/v1", "Bundle", {
        spec: { target: z.string() },
        topLevel: { data: z.record(z.string()).optional() },
      });
      const m = r({ name: "b", target: "t", data: { k: "v" } });
      expect(m).toStrictEqual({
        apiVersion: "example.com/v1",
        kind: "Bundle",
        metadata: { name: "b" },
        data: { k: "v" },
        spec: { target: "t" },
      });
    });

    it("combines with the cluster scope marker", () => {
      const r = resource("rbac.authorization.k8s.io/v1", "ClusterRole", {
        scope: "Cluster",
        topLevel: { rules: z.array(z.object({ verbs: z.array(z.string()) })) },
      });
      expect(r({ name: "cr", rules: [{ verbs: ["get"] }] })).toStrictEqual({
        apiVersion: "rbac.authorization.k8s.io/v1",
        kind: "ClusterRole",
        metadata: { name: "cr" },
        rules: [{ verbs: ["get"] }],
        __ctts_scope: "cluster",
      });
    });

    it("exposes an empty spec schema when there is no spec", () => {
      const r = resource("v1", "ConfigMap", {
        topLevel: { data: z.record(z.string()).optional() },
      });
      expect(r.openAPISchema.spec).toEqual({ type: "object", properties: {} });
      expect(r.scope).toBe("Namespaced");
      expect(r.gvk).toEqual({ group: "", version: "v1", kind: "ConfigMap" });
    });
  });

  describe("type inference", () => {
    it("args include MetadataArgs & typed spec fields", () => {
      const r = resource("test/v1", "Test", {
        spec: { image: z.string(), replicas: z.number().default(1) },
      });
      type Args = Parameters<typeof r>[0];
      expectTypeOf<Args>().toEqualTypeOf<
        MetadataArgs & { image: string; replicas?: number }
      >();
    });

    it("manifest spec is typed", () => {
      const r = resource("test/v1", "Test", {
        spec: { image: z.string() },
      });
      type Manifest = ReturnType<typeof r>;
      expectTypeOf<Manifest["spec"]>().toEqualTypeOf<{ image: string }>();
    });

    it("manifest has generic ResourceManifest type", () => {
      const r = resource("test/v1", "Test", {
        spec: { port: z.number(), host: z.string().optional() },
      });
      type Manifest = ReturnType<typeof r>;
      expectTypeOf<Manifest>().toMatchTypeOf<
        ResourceManifest<{ port: number; host?: string }>
      >();
    });

    it("enum spec fields infer literal union", () => {
      const r = resource("test/v1", "Test", {
        spec: { mode: z.enum(["fast", "slow"]) },
      });
      type Args = Parameters<typeof r>[0];
      expectTypeOf<Args>().toEqualTypeOf<
        MetadataArgs & { mode: "fast" | "slow" }
      >();
    });

    it("spec-only factory keeps the one-argument ResourceFn type", () => {
      const r = resource("test/v1", "Test", {
        spec: { image: z.string() },
      });
      expectTypeOf(r).toEqualTypeOf<ResourceFn<{ image: string }>>();
    });

    it("topLevel-only args and manifest have no spec", () => {
      const r = resource("v1", "ConfigMap", {
        topLevel: {
          data: z.record(z.string()).optional(),
          immutable: z.boolean().optional(),
        },
      });
      type Fields = { data?: Record<string, string>; immutable?: boolean };
      expectTypeOf<Parameters<typeof r>[0]>().toEqualTypeOf<
        MetadataArgs & Fields
      >();
      expectTypeOf<ReturnType<typeof r>>().toEqualTypeOf<
        ResourceManifestBase & Fields
      >();
      expectTypeOf<ReturnType<typeof r>>().not.toHaveProperty("spec");
    });

    it("required topLevel fields stay required", () => {
      const r = resource("rbac.authorization.k8s.io/v1", "RoleBinding", {
        topLevel: { roleRef: z.object({ name: z.string() }) },
      });
      expectTypeOf<Parameters<typeof r>[0]>().toEqualTypeOf<
        MetadataArgs & { roleRef: { name: string } }
      >();
    });

    it("spec + topLevel types both parts", () => {
      const r = resource("example.com/v1", "Bundle", {
        spec: { target: z.string() },
        topLevel: { data: z.record(z.string()).optional() },
      });
      type Manifest = ReturnType<typeof r>;
      expectTypeOf<Parameters<typeof r>[0]>().toEqualTypeOf<
        MetadataArgs & { target: string } & { data?: Record<string, string> }
      >();
      expectTypeOf<Manifest["spec"]>().toEqualTypeOf<{ target: string }>();
      expectTypeOf<Manifest["data"]>().toEqualTypeOf<
        Record<string, string> | undefined
      >();
    });
  });
});
