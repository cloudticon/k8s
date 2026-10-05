/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const storageClass = /* @__PURE__ */ resource(
  "storage.k8s.io/v1",
  "StorageClass",
  {
    scope: "Cluster",
    topLevel: {
      allowVolumeExpansion: z.boolean().optional(),
      allowedTopologies: z
        .array(
          z
            .object({
              matchLabelExpressions: z
                .array(
                  z
                    .object({
                      key: z.string().default(""),
                      values: z.array(z.string().default("")),
                    })
                    .default({}),
                )
                .optional(),
            })
            .default({}),
        )
        .optional(),
      mountOptions: z.array(z.string().default("")).optional(),
      parameters: z.record(z.string().default("")).optional(),
      provisioner: z.string().default(""),
      reclaimPolicy: z.enum(["Delete", "Recycle", "Retain"]).optional(),
      volumeBindingMode: z
        .enum(["Immediate", "WaitForFirstConsumer"])
        .optional(),
    },
  },
);
