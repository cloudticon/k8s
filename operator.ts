import type { GVK, ResourceFn, ResourceScope } from "./resource";

export interface Permission {
  apiGroup: string;
  resources: string[];
  verbs: string[];
}

export interface OperatorConfig {
  watch: GVK;
  watchSchema: ResourceFn["openAPISchema"];
  watchScope: ResourceScope;
  watchShortNames?: string[];
  manages: GVK[];
  reads: GVK[];
  permissions: Permission[];
  envVars: string[];
  periodicInterval: string | null;
  reconcileFn: ((cr: any) => any) | null;
}

export interface OperatorBuilder {
  manages(...resources: ResourceFn[]): OperatorBuilder;
  reads(...resources: ResourceFn[]): OperatorBuilder;
  permission(perm: Permission): OperatorBuilder;
  env(...vars: string[]): OperatorBuilder;
  every(interval: string): OperatorBuilder;
  reconcile(fn: (cr: any) => any): OperatorBuilder;
}

export function operator(watchResource: ResourceFn): OperatorBuilder {
  const config: OperatorConfig = {
    watch: watchResource.gvk,
    watchSchema: watchResource.openAPISchema,
    watchScope: watchResource.scope,
    watchShortNames: watchResource.shortNames,
    manages: [],
    reads: [],
    permissions: [],
    envVars: [],
    periodicInterval: null,
    reconcileFn: null,
  };

  const builder: OperatorBuilder = {
    manages(...resources) {
      config.manages = resources.map((r) => r.gvk);
      return builder;
    },
    reads(...resources) {
      config.reads = resources.map((r) => r.gvk);
      return builder;
    },
    permission(perm) {
      config.permissions.push(perm);
      return builder;
    },
    env(...vars) {
      config.envVars = vars;
      return builder;
    },
    every(interval) {
      config.periodicInterval = interval;
      return builder;
    },
    reconcile(fn) {
      config.reconcileFn = fn;
      (globalThis as any).__ct_operator = config;
      return builder;
    },
  };

  return builder;
}

export interface ResultValue {
  _type: "ok" | "requeue" | "requeueAfter";
  after?: string;
}

export const Result: {
  ok: () => ResultValue;
  requeue: () => ResultValue;
  requeueAfter: (duration: string) => ResultValue;
} = {
  ok: () => ({ _type: "ok" }),
  requeue: () => ({ _type: "requeue" }),
  requeueAfter: (d) => ({ _type: "requeueAfter", after: d }),
};
