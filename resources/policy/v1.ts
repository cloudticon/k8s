/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const podDisruptionBudget = resource(
  "policy/v1",
  "PodDisruptionBudget",
  {
    scope: "Namespaced",
    spec: {
      maxUnavailable: z.string().optional(),
      minAvailable: z.string().optional(),
      selector: z
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
        .optional(),
      unhealthyPodEvictionPolicy: z.string().optional(),
    },
    status: {
      conditions: z
        .array(
          z
            .object({
              lastTransitionTime: z.string().default({}),
              message: z.string().default(""),
              observedGeneration: z.number().optional(),
              reason: z.string().default(""),
              status: z.string().default(""),
              type: z.string().default(""),
            })
            .default({}),
        )
        .optional(),
      currentHealthy: z.number().default(0),
      desiredHealthy: z.number().default(0),
      disruptedPods: z.record(z.string().default({})).optional(),
      disruptionsAllowed: z.number().default(0),
      expectedPods: z.number().default(0),
      observedGeneration: z.number().optional(),
    },
  },
);
