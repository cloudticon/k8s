export interface TypeDef {
  type: string;
  optional?: boolean;
  default?: unknown;
  description?: string;
  enum?: string[];
  items?: TypeDef;
  additionalProperties?: TypeDef;
  properties?: Record<string, TypeDef>;
  required?: string[];
}

export interface ZType<T = unknown> {
  readonly _def: TypeDef;
  readonly _output: T;
  optional(): ZType<T | undefined>;
  default(v: unknown): ZType<T | undefined>;
  describe(d: string): ZType<T>;
}

function createType<T = unknown>(def: TypeDef): ZType<T> {
  return {
    _def: def,
    optional: () => createType<T | undefined>({ ...def, optional: true }),
    default: (v: unknown) =>
      createType<T | undefined>({ ...def, default: v, optional: true }),
    describe: (d: string) => createType<T>({ ...def, description: d }),
  } as ZType<T>;
}

type Simplify<T> = { [K in keyof T]: T[K] } & {};

type RequiredKeys<T extends Record<string, ZType<any>>> = {
  [K in keyof T]: undefined extends T[K]["_output"] ? never : K;
}[keyof T];

type OptionalKeys<T extends Record<string, ZType<any>>> = {
  [K in keyof T]: undefined extends T[K]["_output"] ? K : never;
}[keyof T];

export type Infer<T extends ZType<any>> = T["_output"];

export type InferShape<T extends Record<string, ZType<any>>> = Simplify<
  { [K in RequiredKeys<T>]: Infer<T[K]> } & {
    [K in OptionalKeys<T>]?: Exclude<Infer<T[K]>, undefined>;
  }
>;

export const z = {
  string: (): ZType<string> => createType<string>({ type: "string" }),
  number: (): ZType<number> => createType<number>({ type: "integer" }),
  boolean: (): ZType<boolean> => createType<boolean>({ type: "boolean" }),
  enum: <const T extends readonly string[]>(values: T): ZType<T[number]> =>
    createType<T[number]>({ type: "string", enum: [...values] }),
  array: <T>(itemType: ZType<T>): ZType<T[]> =>
    createType<T[]>({ type: "array", items: itemType._def }),
  record: <T>(valueType: ZType<T>): ZType<Record<string, T>> =>
    createType<Record<string, T>>({
      type: "object",
      additionalProperties: valueType._def,
    }),
  object: <T extends Record<string, ZType<any>>>(
    shape: T,
  ): ZType<InferShape<T>> => {
    const properties: Record<string, TypeDef> = {};
    const required: string[] = [];
    for (const [key, val] of Object.entries(shape)) {
      properties[key] = val._def;
      if (!val._def.optional) required.push(key);
    }
    return createType<InferShape<T>>({ type: "object", properties, required });
  },
};
