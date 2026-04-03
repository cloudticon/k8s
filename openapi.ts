import type { TypeDef } from "./schema";

export function toOpenAPI(def: TypeDef): Record<string, unknown> {
  const schema: Record<string, unknown> = { type: def.type };
  if (def.enum) schema.enum = def.enum;
  if (def.default !== undefined) schema.default = def.default;
  if (def.description) schema.description = def.description;
  if (def.items) schema.items = toOpenAPI(def.items);
  if (def.additionalProperties)
    schema.additionalProperties = toOpenAPI(
      def.additionalProperties as TypeDef,
    );
  if (def.properties) {
    const props: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(def.properties)) {
      props[k] = toOpenAPI(v);
    }
    schema.properties = props;
    if (def.required?.length) schema.required = def.required;
  }
  return schema;
}
