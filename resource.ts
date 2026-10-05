import { toOpenAPI } from "./openapi";
import { z, type InferShape, type ZType } from "./schema";

export interface GVK {
  group: string;
  version: string;
  kind: string;
}

export type ResourceScope = "Namespaced" | "Cluster";

type Shape = Record<string, ZType<any>>;

export interface ResourceOpts<
  TSpec extends Shape = Shape,
  TTopLevel extends Shape = Shape,
> {
  scope?: ResourceScope;
  shortNames?: string[];
  /**
   * Fields rendered under `spec`. Omit it for kinds that have no spec
   * (ConfigMap, Secret, Role, StorageClass, ...): their fields go to
   * `topLevel` and the manifest gets no `spec` key.
   */
  spec?: TSpec;
  /**
   * Fields rendered at the root of the manifest, next to `metadata`
   * (e.g. ConfigMap `data`, Role `rules`, StorageClass `provisioner`).
   */
  topLevel?: TTopLevel;
  status?: Shape;
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

/** The part every manifest has: apiVersion, kind and metadata. */
export interface ResourceManifestBase {
  apiVersion: string;
  kind: string;
  metadata: {
    name: string;
    namespace?: string;
    labels?: Record<string, string>;
    annotations?: Record<string, string>;
  };
}

export interface ResourceManifest<
  TSpec = Record<string, unknown>,
> extends ResourceManifestBase {
  spec: TSpec;
}

/**
 * A resource factory. `TSpec` is the shape of the non-metadata arguments;
 * `TManifest` is what a call returns (a manifest with `spec` by default).
 */
export interface ResourceFn<
  TSpec = Record<string, unknown>,
  TManifest = ResourceManifest<TSpec>,
> {
  (args: MetadataArgs & TSpec): TManifest;
  gvk: GVK;
  scope: ResourceScope;
  shortNames?: string[];
  openAPISchema: {
    spec: Record<string, unknown>;
    status?: Record<string, unknown>;
  };
  _isCtResource: true;
}

/**
 * The factory type `resource()` returns for a given `spec` / `topLevel` pair:
 * - `spec` only: every field goes under `spec` (Deployment, Service, CRDs).
 * - `topLevel` only: no `spec`, fields sit next to `metadata` (ConfigMap, Role).
 * - both: `topLevel` fields at the root, everything else under `spec`.
 */
export type ResourceFnFor<
  TSpec extends Shape,
  TTopLevel extends Shape,
> = [TSpec] extends [never]
  ? ResourceFn<
      InferShape<TTopLevel>,
      ResourceManifestBase & InferShape<TTopLevel>
    >
  : [keyof TTopLevel] extends [never]
    ? ResourceFn<InferShape<TSpec>>
    : ResourceFn<
        InferShape<TSpec> & InferShape<TTopLevel>,
        ResourceManifest<InferShape<TSpec>> & InferShape<TTopLevel>
      >;

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

export function resource<
  TSpec extends Shape = never,
  TTopLevel extends Shape = {},
>(
  apiVersionStr: string,
  kind: string,
  opts: ResourceOpts<TSpec, TTopLevel>,
): ResourceFnFor<TSpec, TTopLevel> {
  const [group, version] = parseApiVersion(apiVersionStr);
  const scope = opts.scope ?? "Namespaced";
  const hasSpec = opts.spec !== undefined;
  const topLevelKeys = new Set(Object.keys(opts.topLevel ?? {}));

  const fn = ((args: ResourceArgs) => {
    const { name, namespace, labels, annotations, ...fields } = args;
    const manifest: Record<string, unknown> = {
      apiVersion: apiVersionStr,
      kind,
      metadata: compactObject({
        name,
        namespace,
        labels,
        annotations,
      }),
    };
    const spec: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(fields)) {
      if (hasSpec && !topLevelKeys.has(key)) spec[key] = value;
      else manifest[key] = value;
    }
    if (hasSpec) manifest.spec = spec;
    // ct strips this marker and skips namespace injection for the object.
    if (scope === "Cluster") manifest.__ctts_scope = "cluster";
    (globalThis as any).__ct_resources.push(manifest);
    return manifest;
  }) as ResourceFn<any, any>;

  fn.gvk = { group, version, kind };
  fn.scope = scope;
  fn.shortNames = opts.shortNames;
  fn.openAPISchema = {
    spec: toOpenAPI(z.object(opts.spec ?? {})._def),
    status: opts.status ? toOpenAPI(z.object(opts.status)._def) : undefined,
  };
  fn._isCtResource = true;

  return fn as ResourceFnFor<TSpec, TTopLevel>;
}
