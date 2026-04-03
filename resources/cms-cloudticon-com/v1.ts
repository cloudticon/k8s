/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const astro = resource("cms.cloudticon.com/v1", "Astro", {
  scope: "Namespaced",
  spec: {
    baseHref: z.string().optional(),
    domain: z.string(),
    environmentRef: z.string(),
    gitBranch: z.string(),
    gitRepository: z.string(),
    image: z.string(),
    nodeVersion: z.string().optional(),
    resources: z
      .object({
        claims: z
          .array(
            z.object({
              name: z.string(),
              request: z.string().optional(),
            }),
          )
          .optional(),
        limits: z.record(z.string()).optional(),
        requests: z.record(z.string()).optional(),
      })
      .optional(),
  },
  status: {
    conditions: z
      .array(
        z.object({
          lastTransitionTime: z.string(),
          message: z.string(),
          observedGeneration: z.number().optional(),
          reason: z.string(),
          status: z.enum(["True", "False", "Unknown"]),
          type: z.string(),
        }),
      )
      .optional(),
    observedGeneration: z.number().optional(),
    phase: z
      .enum([
        "Pending",
        "Creating",
        "Building",
        "Running",
        "Updating",
        "Deleting",
        "Error",
        "Unknown",
      ])
      .optional(),
    url: z.string().optional(),
  },
});

export const environment = resource("cms.cloudticon.com/v1", "Environment", {
  scope: "Namespaced",
  spec: {
    description: z.string().optional(),
    displayName: z.string().optional(),
    domainSuffix: z.string(),
    gitBranchMapping: z.array(z.string()).optional(),
    injectSecrets: z.array(z.string()).optional(),
    namespace: z.string().optional(),
    resources: z
      .object({
        claims: z
          .array(
            z.object({
              name: z.string(),
              request: z.string().optional(),
            }),
          )
          .optional(),
        limits: z.record(z.string()).optional(),
        requests: z.record(z.string()).optional(),
      })
      .optional(),
  },
  status: {
    conditions: z
      .array(
        z.object({
          lastTransitionTime: z.string(),
          message: z.string(),
          observedGeneration: z.number().optional(),
          reason: z.string(),
          status: z.enum(["True", "False", "Unknown"]),
          type: z.string(),
        }),
      )
      .optional(),
    instanceCount: z.number().optional(),
  },
});

export const mysql = resource("cms.cloudticon.com/v1", "Mysql", {
  scope: "Namespaced",
  spec: {
    databases: z
      .array(
        z.object({
          charset: z.string().optional(),
          collation: z.string().optional(),
          name: z.string(),
        }),
      )
      .optional(),
    environmentRef: z.string(),
    name: z.string(),
    port: z.number().optional(),
    resources: z
      .object({
        claims: z
          .array(
            z.object({
              name: z.string(),
              request: z.string().optional(),
            }),
          )
          .optional(),
        limits: z.record(z.string()).optional(),
        requests: z.record(z.string()).optional(),
      })
      .optional(),
    rootPassword: z.string().optional(),
    storage: z.string(),
    users: z
      .array(
        z.object({
          databases: z.array(z.string()),
          password: z.string().optional(),
          privileges: z.array(z.string()).optional(),
          secretName: z.string().optional(),
          username: z.string(),
        }),
      )
      .optional(),
    version: z.enum(["5.7", "8.0"]).optional(),
  },
  status: {
    conditions: z
      .array(
        z.object({
          lastTransitionTime: z.string(),
          message: z.string(),
          observedGeneration: z.number().optional(),
          reason: z.string(),
          status: z.enum(["True", "False", "Unknown"]),
          type: z.string(),
        }),
      )
      .optional(),
    host: z.string().optional(),
    observedGeneration: z.number().optional(),
    phase: z
      .enum(["Pending", "Creating", "Running", "Updating", "Error", "Unknown"])
      .optional(),
    port: z.number().optional(),
    secretName: z.string().optional(),
  },
});

export const strapi = resource("cms.cloudticon.com/v1", "Strapi", {
  scope: "Namespaced",
  spec: {
    database: z
      .object({
        client: z.enum(["postgres", "mysql", "sqlite"]),
        database: z.string().optional(),
        host: z.string().optional(),
        mysqlRef: z.string().optional(),
        port: z.number().optional(),
        secretName: z.string().optional(),
        ssl: z.boolean().optional(),
        useExistingDatabase: z.boolean().optional(),
        username: z.string().optional(),
      })
      .optional(),
    domain: z.string(),
    environmentRef: z.string(),
    gitBranch: z.string(),
    gitRepository: z.string(),
    image: z.string(),
    nodeVersion: z.string().optional(),
    resources: z
      .object({
        claims: z
          .array(
            z.object({
              name: z.string(),
              request: z.string().optional(),
            }),
          )
          .optional(),
        limits: z.record(z.string()).optional(),
        requests: z.record(z.string()).optional(),
      })
      .optional(),
  },
  status: {
    conditions: z
      .array(
        z.object({
          lastTransitionTime: z.string(),
          message: z.string(),
          observedGeneration: z.number().optional(),
          reason: z.string(),
          status: z.enum(["True", "False", "Unknown"]),
          type: z.string(),
        }),
      )
      .optional(),
    observedGeneration: z.number().optional(),
    phase: z
      .enum([
        "Pending",
        "Creating",
        "Building",
        "Running",
        "Updating",
        "Deleting",
        "Error",
        "Unknown",
      ])
      .optional(),
    url: z.string().optional(),
  },
});

export const wordpress = resource("cms.cloudticon.com/v1", "Wordpress", {
  scope: "Namespaced",
  spec: {
    database: z
      .object({
        host: z.string().optional(),
        mysqlRef: z.string().optional(),
        name: z.string().optional(),
        port: z.number().optional(),
        secretName: z.string().optional(),
        useExistingDatabase: z.boolean().optional(),
        user: z.string().optional(),
      })
      .optional(),
    domain: z.string(),
    environmentRef: z.string(),
    gitBranch: z.string(),
    gitRepository: z.string(),
    image: z.string(),
    plugins: z
      .array(
        z.object({
          name: z.string(),
          version: z.string().optional(),
        }),
      )
      .optional(),
    resources: z
      .object({
        claims: z
          .array(
            z.object({
              name: z.string(),
              request: z.string().optional(),
            }),
          )
          .optional(),
        limits: z.record(z.string()).optional(),
        requests: z.record(z.string()).optional(),
      })
      .optional(),
    theme: z
      .object({
        name: z.string(),
      })
      .optional(),
    wordpressVersion: z.string().optional(),
  },
  status: {
    conditions: z
      .array(
        z.object({
          lastTransitionTime: z.string(),
          message: z.string(),
          observedGeneration: z.number().optional(),
          reason: z.string(),
          status: z.enum(["True", "False", "Unknown"]),
          type: z.string(),
        }),
      )
      .optional(),
    observedGeneration: z.number().optional(),
    phase: z
      .enum([
        "Pending",
        "Creating",
        "Building",
        "Running",
        "Updating",
        "Deleting",
        "Error",
        "Unknown",
      ])
      .optional(),
    url: z.string().optional(),
  },
});
