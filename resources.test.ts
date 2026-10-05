/// <reference types="vite/client" />
import { beforeEach, describe, expect, expectTypeOf, it } from "vitest";
import {
  clusterRole,
  clusterRoleBinding,
  configMap,
  deployment,
  endpoints,
  namespace,
  role,
  roleBinding,
  secret,
  serviceAccount,
  storageClass,
} from "./index";
import type { ResourceFn } from "./resource";

type AnyFactory = ResourceFn<any, any>;

// Every resources/**/*.ts module, including API versions index.ts does not
// re-export (users can import them by path).
const modules = import.meta.glob<Record<string, unknown>>(
  "./resources/**/*.ts",
  { eager: true },
);

const factories: [string, AnyFactory][] = Object.entries(modules).flatMap(
  ([path, mod]) =>
    Object.entries(mod)
      .filter(([, v]) => typeof v === "function" && (v as any)._isCtResource)
      .map(([name, v]): [string, AnyFactory] => [
        `${path.replace(/^\.\/resources\/|\.ts$/g, "")} ${name}`,
        v as AnyFactory,
      ]),
);

const render = (f: AnyFactory): Record<string, unknown> =>
  f({ name: "x" }) as Record<string, unknown>;

const typeKey = (f: AnyFactory) => {
  const { group, version, kind } = f.gvk;
  return `${group ? `${group}/` : ""}${version}/${kind}`;
};

// Kubernetes built-in API groups, spelled as the API server expects them.
const BUILT_IN_GROUPS = new Set([
  "",
  "apps",
  "autoscaling",
  "batch",
  "policy",
  "networking.k8s.io",
  "rbac.authorization.k8s.io",
  "storage.k8s.io",
]);

// Checked against the Kubernetes API (k8s.io/api) and the source CRDs.
const CLUSTER_SCOPED = [
  "v1/Namespace",
  "v1/Node",
  "v1/PersistentVolume",
  "networking.k8s.io/v1/IngressClass",
  "rbac.authorization.k8s.io/v1/ClusterRole",
  "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
  "storage.k8s.io/v1/StorageClass",
  "cert-manager.io/v1/ClusterIssuer",
  "cluster.cloudticon.com/v1/K3sCluster",
];

// Built-in kinds whose fields live at the manifest root instead of `spec`.
const WITHOUT_SPEC = [
  "v1/ConfigMap",
  "v1/Endpoints",
  "v1/Secret",
  "v1/ServiceAccount",
  "rbac.authorization.k8s.io/v1/ClusterRole",
  "rbac.authorization.k8s.io/v1/ClusterRoleBinding",
  "rbac.authorization.k8s.io/v1/Role",
  "rbac.authorization.k8s.io/v1/RoleBinding",
  "storage.k8s.io/v1/StorageClass",
];

beforeEach(() => {
  (globalThis as any).__ct_resources = [];
});

describe("every factory in resources/**", () => {
  it("finds the factories", () => {
    expect(factories.length).toBeGreaterThan(0);
    const keys = factories.map(([, f]) => typeKey(f));
    for (const key of [...CLUSTER_SCOPED, ...WITHOUT_SPEC]) {
      expect(keys).toContain(key);
    }
  });

  it.each(factories)("%s: canonical apiVersion", (_, f) => {
    const m = render(f);
    const { group, version, kind } = f.gvk;
    expect(m.apiVersion).toBe(group ? `${group}/${version}` : version);
    expect(m.apiVersion).not.toMatch(/^core\//);
    expect(m.kind).toBe(kind);
    // Built-in groups use their canonical names; CRD groups always have a dot.
    expect(BUILT_IN_GROUPS.has(group) || group.includes(".")).toBe(true);
  });

  it.each(factories)("%s: metadata is just what was passed", (_, f) => {
    expect(render(f).metadata).toStrictEqual({ name: "x" });
  });

  it.each(factories)("%s: __ctts_scope only on cluster-scoped", (_, f) => {
    const m = render(f);
    if (f.scope === "Cluster") {
      expect(m.__ctts_scope).toBe("cluster");
    } else {
      expect(m).not.toHaveProperty("__ctts_scope");
    }
    expect((globalThis as any).__ct_resources).toEqual([m]);
    expect((globalThis as any).__ct_resources[0]).toBe(m);
  });

  it.each(factories)("%s: spec only where the kind has one", (_, f) => {
    const m = render(f);
    if (WITHOUT_SPEC.includes(typeKey(f))) {
      expect(m).not.toHaveProperty("spec");
    } else {
      expect(m.spec).toStrictEqual({});
    }
  });

  it("cluster-scoped kinds are exactly the expected ones", () => {
    const cluster = factories
      .filter(([, f]) => f.scope === "Cluster")
      .map(([, f]) => typeKey(f));
    expect([...new Set(cluster)].sort()).toEqual([...CLUSTER_SCOPED].sort());
  });

  it("kinds without spec are exactly the expected ones", () => {
    const withoutSpec = factories
      .filter(([, f]) => !("spec" in render(f)))
      .map(([, f]) => typeKey(f));
    expect([...new Set(withoutSpec)].sort()).toEqual([...WITHOUT_SPEC].sort());
  });
});

describe("built-in kinds without spec render top-level fields", () => {
  it("configMap", () => {
    expect(
      configMap({
        name: "cfg",
        namespace: "prod",
        labels: { app: "a" },
        data: { A: "1" },
        binaryData: { B: "AQI=" },
        immutable: true,
      }),
    ).toStrictEqual({
      apiVersion: "v1",
      kind: "ConfigMap",
      metadata: { name: "cfg", namespace: "prod", labels: { app: "a" } },
      data: { A: "1" },
      binaryData: { B: "AQI=" },
      immutable: true,
    });
  });

  it("secret", () => {
    expect(
      secret({
        name: "sec",
        type: "kubernetes.io/basic-auth",
        data: { username: "YWRtaW4=" },
        stringData: { password: "p" },
        immutable: false,
      }),
    ).toStrictEqual({
      apiVersion: "v1",
      kind: "Secret",
      metadata: { name: "sec" },
      type: "kubernetes.io/basic-auth",
      data: { username: "YWRtaW4=" },
      stringData: { password: "p" },
      immutable: false,
    });
  });

  it("serviceAccount", () => {
    expect(
      serviceAccount({
        name: "sa",
        automountServiceAccountToken: false,
        imagePullSecrets: [{ name: "regcred" }],
        secrets: [{ name: "token" }],
      }),
    ).toStrictEqual({
      apiVersion: "v1",
      kind: "ServiceAccount",
      metadata: { name: "sa" },
      automountServiceAccountToken: false,
      imagePullSecrets: [{ name: "regcred" }],
      secrets: [{ name: "token" }],
    });
  });

  it("endpoints", () => {
    const subsets = [
      {
        addresses: [{ ip: "10.0.0.1" }],
        ports: [{ name: "http", port: 80, protocol: "TCP" as const }],
      },
    ];
    expect(endpoints({ name: "ext", subsets })).toStrictEqual({
      apiVersion: "v1",
      kind: "Endpoints",
      metadata: { name: "ext" },
      subsets,
    });
  });

  it("role and roleBinding", () => {
    const rules = [
      { apiGroups: [""], resources: ["pods"], verbs: ["get", "list"] },
    ];
    expect(role({ name: "r", rules })).toStrictEqual({
      apiVersion: "rbac.authorization.k8s.io/v1",
      kind: "Role",
      metadata: { name: "r" },
      rules,
    });

    const roleRef = {
      apiGroup: "rbac.authorization.k8s.io",
      kind: "Role",
      name: "r",
    };
    const subjects = [{ kind: "ServiceAccount", name: "sa" }];
    expect(roleBinding({ name: "rb", roleRef, subjects })).toStrictEqual({
      apiVersion: "rbac.authorization.k8s.io/v1",
      kind: "RoleBinding",
      metadata: { name: "rb" },
      roleRef,
      subjects,
    });
  });

  it("clusterRole and clusterRoleBinding (cluster-scoped)", () => {
    const rules = [{ nonResourceURLs: ["/metrics"], verbs: ["get"] }];
    const aggregationRule = {
      clusterRoleSelectors: [{ matchLabels: { aggregate: "true" } }],
    };
    expect(clusterRole({ name: "cr", rules, aggregationRule })).toStrictEqual(
      {
        apiVersion: "rbac.authorization.k8s.io/v1",
        kind: "ClusterRole",
        metadata: { name: "cr" },
        rules,
        aggregationRule,
        __ctts_scope: "cluster",
      },
    );

    const roleRef = {
      apiGroup: "rbac.authorization.k8s.io",
      kind: "ClusterRole",
      name: "cr",
    };
    const subjects = [{ kind: "ServiceAccount", name: "sa", namespace: "p" }];
    expect(
      clusterRoleBinding({ name: "crb", roleRef, subjects }),
    ).toStrictEqual({
      apiVersion: "rbac.authorization.k8s.io/v1",
      kind: "ClusterRoleBinding",
      metadata: { name: "crb" },
      roleRef,
      subjects,
      __ctts_scope: "cluster",
    });
  });

  it("storageClass (cluster-scoped)", () => {
    const allowedTopologies = [
      {
        matchLabelExpressions: [
          { key: "topology.kubernetes.io/zone", values: ["a"] },
        ],
      },
    ];
    expect(
      storageClass({
        name: "fast",
        provisioner: "ebs.csi.aws.com",
        parameters: { type: "gp3" },
        reclaimPolicy: "Retain",
        volumeBindingMode: "WaitForFirstConsumer",
        allowVolumeExpansion: true,
        mountOptions: ["debug"],
        allowedTopologies,
      }),
    ).toStrictEqual({
      apiVersion: "storage.k8s.io/v1",
      kind: "StorageClass",
      metadata: { name: "fast" },
      provisioner: "ebs.csi.aws.com",
      parameters: { type: "gp3" },
      reclaimPolicy: "Retain",
      volumeBindingMode: "WaitForFirstConsumer",
      allowVolumeExpansion: true,
      mountOptions: ["debug"],
      allowedTopologies,
      __ctts_scope: "cluster",
    });
  });

  it("types: fields are arguments and manifest keys, without spec", () => {
    type CM = ReturnType<typeof configMap>;
    expectTypeOf<CM>().not.toHaveProperty("spec");
    expectTypeOf<CM["immutable"]>().toEqualTypeOf<boolean | undefined>();
    expectTypeOf<Parameters<typeof roleBinding>[0]>().toHaveProperty(
      "roleRef",
    );
    expectTypeOf<
      Parameters<typeof storageClass>[0]["volumeBindingMode"]
    >().toEqualTypeOf<"Immediate" | "WaitForFirstConsumer" | undefined>();
  });
});

describe("kinds with spec are unchanged", () => {
  it("namespace (cluster-scoped, core group)", () => {
    expect(namespace({ name: "demo", labels: { a: "b" } })).toStrictEqual({
      apiVersion: "v1",
      kind: "Namespace",
      metadata: { name: "demo", labels: { a: "b" } },
      spec: {},
      __ctts_scope: "cluster",
    });
  });

  it("deployment (namespaced)", () => {
    const selector = { matchLabels: { app: "web" } };
    const template = {
      metadata: { labels: { app: "web" } },
      spec: { containers: [{ name: "web", image: "nginx" }] },
    };
    expect(
      deployment({ name: "web", replicas: 2, selector, template }),
    ).toStrictEqual({
      apiVersion: "apps/v1",
      kind: "Deployment",
      metadata: { name: "web" },
      spec: { replicas: 2, selector, template },
    });
  });

  it("types: deployment manifest keeps spec", () => {
    expectTypeOf<ReturnType<typeof deployment>>().toHaveProperty("spec");
  });
});
