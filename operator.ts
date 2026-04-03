import type { GVK, ResourceFn, ResourceScope } from "./resource";

export interface Permission {
  apiGroup: string;
  resources: string[];
  verbs: string[];
}

type ReconcileFn<TWatch extends ResourceFn<any>> = (
  cr: ReturnType<TWatch>,
) => any;

export interface OperatorConfig<TWatch extends ResourceFn<any> = ResourceFn<any>> {
  watch: GVK;
  watchSchema: TWatch["openAPISchema"];
  watchScope: ResourceScope;
  watchShortNames?: string[];
  manages: GVK[];
  reads: GVK[];
  permissions: Permission[];
  envVars: string[];
  periodicInterval: string | null;
  reconcileFn: ReconcileFn<TWatch> | null;
}

export interface OperatorBuilder<
  TWatch extends ResourceFn<any> = ResourceFn<any>,
> {
  manages(...resources: ResourceFn<any>[]): OperatorBuilder<TWatch>;
  reads(...resources: ResourceFn<any>[]): OperatorBuilder<TWatch>;
  permission(perm: Permission): OperatorBuilder<TWatch>;
  env(...vars: string[]): OperatorBuilder<TWatch>;
  every(interval: string): OperatorBuilder<TWatch>;
  reconcile(fn: ReconcileFn<TWatch>): OperatorBuilder<TWatch>;
}

export function operator<TWatch extends ResourceFn<any>>(
  watchResource: TWatch,
): OperatorBuilder<TWatch> {
  const config: OperatorConfig<TWatch> = {
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

  const builder: OperatorBuilder<TWatch> = {
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
