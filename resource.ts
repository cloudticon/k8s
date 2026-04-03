import { toOpenAPI } from "./openapi";
import { z, type InferShape, type ZType } from "./schema";

export interface GVK {
  group: string;
  version: string;
  kind: string;
}

export type ResourceScope = "Namespaced" | "Cluster";

export interface ResourceOpts<
  TSpec extends Record<string, ZType<any>> = Record<string, ZType<any>>,
> {
  scope?: ResourceScope;
  shortNames?: string[];
  spec: TSpec;
  status?: Record<string, ZType<any>>;
}

export interface MetadataArgs {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export interface ResourceArgs extends MetadataArgs {
  [key: string]: unknown;
}

export interface ResourceManifest<TSpec = Record<string, unknown>> {
  apiVersion: string;
  kind: string;
  metadata: {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
  spec: TSpec;
}

export interface ResourceFn<TSpec = Record<string, unknown>> {
  (args: MetadataArgs & TSpec): ResourceManifest<TSpec>;
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

const compactObject = <T extends Record<string, unknown>>(
  obj: T,
): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as Partial<T>;

export function resource<TSpec extends Record<string, ZType<any>>>(
  apiVersionStr: string,
  kind: string,
  opts: ResourceOpts<TSpec>,
): ResourceFn<InferShape<TSpec>> {
  const [group, version] = parseApiVersion(apiVersionStr);

  type Spec = InferShape<TSpec>;

  const fn = ((args: MetadataArgs & Spec): ResourceManifest<Spec> => {
    const { name, namespace, labels, annotations, ...specFields } = args;
    const manifest: ResourceManifest<Spec> = {
      apiVersion: apiVersionStr,
      kind,
      metadata: compactObject({
        name,
        namespace,
        labels,
        annotations,
      }) as ResourceManifest<Spec>["metadata"],
      spec: specFields as unknown as Spec,
    };
    (globalThis as any).__ct_resources.push(manifest);
    return manifest;
  }) as ResourceFn<Spec>;

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
