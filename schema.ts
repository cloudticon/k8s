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

export interface ZType {
  readonly _def: TypeDef;
  optional(): ZType;
  default(v: unknown): ZType;
  describe(d: string): ZType;
}

function createType(def: TypeDef): ZType {
  return {
    _def: def,
    optional: () => createType({ ...def, optional: true }),
    default: (v: unknown) => createType({ ...def, default: v, optional: true }),
    describe: (d: string) => createType({ ...def, description: d }),
  };
}

export const z = {
  string: (): ZType => createType({ type: "string" }),
  number: (): ZType => createType({ type: "integer" }),
  boolean: (): ZType => createType({ type: "boolean" }),
  enum: (values: string[]): ZType =>
    createType({ type: "string", enum: values }),
  array: (itemType: ZType): ZType =>
    createType({ type: "array", items: itemType._def }),
  record: (valueType: ZType): ZType =>
    createType({ type: "object", additionalProperties: valueType._def }),
  object: (shape: Record<string, ZType>): ZType => {
    const properties: Record<string, TypeDef> = {};
    const required: string[] = [];
    for (const [key, val] of Object.entries(shape)) {
      properties[key] = val._def;
      if (!val._def.optional) required.push(key);
    }
    return createType({ type: "object", properties, required });
  },
};
