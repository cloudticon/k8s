import { describe, expect, it } from "vitest";
import { z } from "./schema";

describe("z primitives", () => {
  it("string", () => {
    expect(z.string()._def).toEqual({ type: "string" });
  });

  it("number (maps to integer)", () => {
    expect(z.number()._def).toEqual({ type: "integer" });
  });

  it("boolean", () => {
    expect(z.boolean()._def).toEqual({ type: "boolean" });
  });
});

describe("z.enum", () => {
  it("creates a string enum", () => {
    expect(z.enum(["Pending", "Running"])._def).toEqual({
      type: "string",
      enum: ["Pending", "Running"],
    });
  });
});

describe("z.array", () => {
  it("wraps item type", () => {
    expect(z.array(z.string())._def).toEqual({
      type: "array",
      items: { type: "string" },
    });
  });

  it("nested arrays", () => {
    const nested = z.array(z.array(z.number()));
    expect(nested._def).toEqual({
      type: "array",
      items: { type: "array", items: { type: "integer" } },
    });
  });
});

describe("z.record", () => {
  it("creates object with additionalProperties", () => {
    expect(z.record(z.string())._def).toEqual({
      type: "object",
      additionalProperties: { type: "string" },
    });
  });
});

describe("z.object", () => {
  it("collects properties and required fields", () => {
    const obj = z.object({
      name: z.string(),
      age: z.number(),
    });
    expect(obj._def).toEqual({
      type: "object",
      properties: {
        name: { type: "string" },
        age: { type: "integer" },
      },
      required: ["name", "age"],
    });
  });

  it("excludes optional fields from required", () => {
    const obj = z.object({
      name: z.string(),
      nickname: z.string().optional(),
    });
    expect(obj._def.required).toEqual(["name"]);
  });

  it("excludes fields with default from required", () => {
    const obj = z.object({
      replicas: z.number().default(1),
    });
    expect(obj._def.required).toEqual([]);
  });

  it("nested objects", () => {
    const obj = z.object({
      meta: z.object({ tag: z.string() }),
    });
    expect(obj._def.properties!.meta).toEqual({
      type: "object",
      properties: { tag: { type: "string" } },
      required: ["tag"],
    });
  });
});

describe("modifiers", () => {
  it("optional sets optional flag", () => {
    expect(z.string().optional()._def).toEqual({
      type: "string",
      optional: true,
    });
  });

  it("default sets value and marks optional", () => {
    expect(z.number().default(42)._def).toEqual({
      type: "integer",
      default: 42,
      optional: true,
    });
  });

  it("describe adds description", () => {
    expect(z.string().describe("A name")._def).toEqual({
      type: "string",
      description: "A name",
    });
  });

  it("chaining: optional + describe", () => {
    const t = z.string().optional().describe("Optional name");
    expect(t._def).toEqual({
      type: "string",
      optional: true,
      description: "Optional name",
    });
  });

  it("chaining: describe + default", () => {
    const t = z.number().describe("Count").default(0);
    expect(t._def).toEqual({
      type: "integer",
      description: "Count",
      default: 0,
      optional: true,
    });
  });

  it("is immutable (returns new instance)", () => {
    const base = z.string();
    const opt = base.optional();
    expect(base._def.optional).toBeUndefined();
    expect(opt._def.optional).toBe(true);
  });
});
