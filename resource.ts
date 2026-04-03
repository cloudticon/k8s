import { toOpenAPI } from "./openapi";
import { z, type ZType } from "./schema";

export interface GVK {
  group: string;
  version: string;
  kind: string;
}

export type ResourceScope = "Namespaced" | "Cluster";

export interface ResourceOpts {
  scope?: ResourceScope;
  shortNames?: string[];
  spec: Record<string, ZType>;
  status?: Record<string, ZType>;
}

export interface ResourceArgs {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  [key: string]: unknown;
}

export interface ResourceManifest {
  apiVersion: string;
  kind: string;
  metadata: {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
  spec: Record<string, unknown>;
}

export interface ResourceFn {
  (args: ResourceArgs): ResourceManifest;
  gvk: GVK;
  scope: ResourceScope;
  shortNames?: string[];
  openAPISchema: {
    spec: Record<string, unknown>;
    status?: Record<string, unknown>;
  };
  _isCtResource: true;
}

const parseApiVersion = (s: string): [string, string] => {
  const slash = s.indexOf("/");
  return slash === -1 ? ["", s] : [s.slice(0, slash), s.slice(slash + 1)];
};

const compactObject = <T extends Record<string, unknown>>(obj: T): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as Partial<T>;

export function resource(
  apiVersionStr: string,
  kind: string,
  opts: ResourceOpts,
): ResourceFn {
  const [group, version] = parseApiVersion(apiVersionStr);

  const fn = ((args: ResourceArgs): ResourceManifest => {
    const { name, namespace, labels, annotations, ...specFields } = args;
    const manifest: ResourceManifest = {
      apiVersion: apiVersionStr,
      kind,
      metadata: compactObject({
        name,
        namespace,
        labels,
        annotations,
      }) as ResourceManifest["metadata"],
      spec: specFields,
    };
    (globalThis as any).__ct_resources.push(manifest);
    return manifest;
  }) as ResourceFn;

  fn.gvk = { group, version, kind };
  fn.scope = opts.scope ?? "Namespaced";
  fn.shortNames = opts.shortNames;
  fn.openAPISchema = {
    spec: toOpenAPI(z.object(opts.spec)._def),
    status: opts.status ? toOpenAPI(z.object(opts.status)._def) : undefined,
  };
  fn._isCtResource = true;

  return fn;
}
