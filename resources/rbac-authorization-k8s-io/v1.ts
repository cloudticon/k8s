/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const clusterRoleBinding = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "ClusterRoleBinding",
  {
    scope: "Cluster",
    topLevel: {
      roleRef: z
        .object({
          apiGroup: z.string().default(""),
          kind: z.string().default(""),
          name: z.string().default(""),
        })
        .default({}),
      subjects: z
        .array(
          z
            .object({
              apiGroup: z.string().optional(),
              kind: z.string().default(""),
              name: z.string().default(""),
              namespace: z.string().optional(),
            })
            .default({}),
        )
        .optional(),
    },
  },
);

export const clusterRole = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "ClusterRole",
  {
    scope: "Cluster",
    topLevel: {
      aggregationRule: z
        .object({
          clusterRoleSelectors: z
            .array(
              z
                .object({
                  matchExpressions: z
                    .array(
                      z
                        .object({
                          key: z.string().default(""),
                          operator: z.string().default(""),
                          values: z.array(z.string().default("")).optional(),
                        })
                        .default({}),
                    )
                    .optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                })
                .default({}),
            )
            .optional(),
        })
        .optional(),
      rules: z
        .array(
          z
            .object({
              apiGroups: z.array(z.string().default("")).optional(),
              nonResourceURLs: z.array(z.string().default("")).optional(),
              resourceNames: z.array(z.string().default("")).optional(),
              resources: z.array(z.string().default("")).optional(),
              verbs: z.array(z.string().default("")),
            })
            .default({}),
        )
        .optional(),
    },
  },
);

export const roleBinding = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "RoleBinding",
  {
    scope: "Namespaced",
    topLevel: {
      roleRef: z
        .object({
          apiGroup: z.string().default(""),
          kind: z.string().default(""),
          name: z.string().default(""),
        })
        .default({}),
      subjects: z
        .array(
          z
            .object({
              apiGroup: z.string().optional(),
              kind: z.string().default(""),
              name: z.string().default(""),
              namespace: z.string().optional(),
            })
            .default({}),
        )
        .optional(),
    },
  },
);

export const role = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "Role",
  {
    scope: "Namespaced",
    topLevel: {
      rules: z
        .array(
          z
            .object({
              apiGroups: z.array(z.string().default("")).optional(),
              nonResourceURLs: z.array(z.string().default("")).optional(),
              resourceNames: z.array(z.string().default("")).optional(),
              resources: z.array(z.string().default("")).optional(),
              verbs: z.array(z.string().default("")),
            })
            .default({}),
        )
        .optional(),
    },
  },
);
