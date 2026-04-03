import { describe, expect, it } from "vitest";
import { toOpenAPI } from "./openapi";
import { z } from "./schema";

describe("toOpenAPI", () => {
  it("string", () => {
    expect(toOpenAPI(z.string()._def)).toEqual({ type: "string" });
  });

  it("number", () => {
    expect(toOpenAPI(z.number()._def)).toEqual({ type: "integer" });
  });

  it("boolean", () => {
    expect(toOpenAPI(z.boolean()._def)).toEqual({ type: "boolean" });
  });

  it("enum", () => {
    expect(toOpenAPI(z.enum(["a", "b"])._def)).toEqual({
      type: "string",
      enum: ["a", "b"],
    });
  });

  it("default value", () => {
    expect(toOpenAPI(z.number().default(3)._def)).toEqual({
      type: "integer",
      default: 3,
    });
  });

  it("description", () => {
    expect(toOpenAPI(z.string().describe("A label")._def)).toEqual({
      type: "string",
      description: "A label",
    });
  });

  it("array", () => {
    expect(toOpenAPI(z.array(z.string())._def)).toEqual({
      type: "array",
      items: { type: "string" },
    });
  });

  it("record", () => {
    expect(toOpenAPI(z.record(z.number())._def)).toEqual({
      type: "object",
      additionalProperties: { type: "integer" },
    });
  });

  it("object with required", () => {
    const schema = z.object({
      name: z.string(),
      count: z.number().optional(),
    });
    expect(toOpenAPI(schema._def)).toEqual({
      type: "object",
      properties: {
        name: { type: "string" },
        count: { type: "integer" },
      },
      required: ["name"],
    });
  });

  it("object - all optional omits required key", () => {
    const schema = z.object({
      a: z.string().optional(),
      b: z.number().default(0),
    });
    const result = toOpenAPI(schema._def);
    expect(result).not.toHaveProperty("required");
  });

  it("nested object", () => {
    const schema = z.object({
      meta: z.object({ tag: z.string() }),
    });
    expect(toOpenAPI(schema._def)).toEqual({
      type: "object",
      properties: {
        meta: {
          type: "object",
          properties: { tag: { type: "string" } },
          required: ["tag"],
        },
      },
      required: ["meta"],
    });
  });

  it("strips internal optional flag from output", () => {
    const result = toOpenAPI(z.string().optional()._def);
    expect(result).toEqual({ type: "string" });
    expect(result).not.toHaveProperty("optional");
  });

  it("complex nested schema", () => {
    const schema = z.object({
      replicas: z.number().default(1),
      ports: z.array(
        z.object({
          port: z.number(),
          protocol: z.enum(["TCP", "UDP"]).default("TCP"),
        }),
      ),
      labels: z.record(z.string()).optional(),
    });
    expect(toOpenAPI(schema._def)).toEqual({
      type: "object",
      properties: {
        replicas: { type: "integer", default: 1 },
        ports: {
          type: "array",
          items: {
            type: "object",
            properties: {
              port: { type: "integer" },
              protocol: {
                type: "string",
                enum: ["TCP", "UDP"],
                default: "TCP",
              },
            },
            required: ["port"],
          },
        },
        labels: {
          type: "object",
          additionalProperties: { type: "string" },
        },
      },
      required: ["ports"],
    });
  });
});
