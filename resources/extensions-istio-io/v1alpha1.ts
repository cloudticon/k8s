/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const wasmPlugin = /* @__PURE__ */ resource(
  "extensions.istio.io/v1alpha1",
  "WasmPlugin",
  {
    scope: "Namespaced",
    spec: {
      failStrategy: z
        .enum(["FAIL_CLOSE", "FAIL_OPEN", "FAIL_RELOAD"])
        .optional(),
      imagePullPolicy: z
        .enum(["UNSPECIFIED_POLICY", "IfNotPresent", "Always"])
        .optional(),
      imagePullSecret: z.string().optional(),
      match: z
        .array(
          z.object({
            mode: z
              .enum(["UNDEFINED", "CLIENT", "SERVER", "CLIENT_AND_SERVER"])
              .optional(),
            ports: z
              .array(
                z.object({
                  number: z.number(),
                }),
              )
              .optional(),
          }),
        )
        .optional(),
      phase: z
        .enum(["UNSPECIFIED_PHASE", "AUTHN", "AUTHZ", "STATS"])
        .optional(),
      pluginConfig: z.record(z.string()).optional(),
      pluginName: z.string().optional(),
      priority: z.number().optional(),
      selector: z
        .object({
          matchLabels: z.record(z.string()).optional(),
        })
        .optional(),
      sha256: z.string().optional(),
      targetRef: z
        .object({
          group: z.string().optional(),
          kind: z.string(),
          name: z.string(),
          namespace: z.string().optional(),
        })
        .optional(),
      targetRefs: z
        .array(
          z.object({
            group: z.string().optional(),
            kind: z.string(),
            name: z.string(),
            namespace: z.string().optional(),
          }),
        )
        .optional(),
      type: z.enum(["UNSPECIFIED_PLUGIN_TYPE", "HTTP", "NETWORK"]).optional(),
      url: z.string(),
      verificationKey: z.string().optional(),
      vmConfig: z
        .object({
          env: z
            .array(
              z.object({
                name: z.string(),
                value: z.string().optional(),
                valueFrom: z.enum(["INLINE", "HOST"]).optional(),
              }),
            )
            .optional(),
        })
        .optional(),
    },
    status: {
      conditions: z
        .array(
          z.object({
            lastProbeTime: z.string().optional(),
            lastTransitionTime: z.string().optional(),
            message: z.string().optional(),
            observedGeneration: z.string().optional(),
            reason: z.string().optional(),
            status: z.string().optional(),
            type: z.string().optional(),
          }),
        )
        .optional(),
      observedGeneration: z.string().optional(),
      validationMessages: z
        .array(
          z.object({
            documentationUrl: z.string().optional(),
            level: z.enum(["UNKNOWN", "ERROR", "WARNING", "INFO"]).optional(),
            type: z
              .object({
                code: z.string().optional(),
                name: z.string().optional(),
              })
              .optional(),
          }),
        )
        .optional(),
    },
  },
);
