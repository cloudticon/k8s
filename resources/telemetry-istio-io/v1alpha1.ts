/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const telemetry = /* @__PURE__ */ resource("telemetry.istio.io/v1alpha1", "Telemetry", {
  scope: "Namespaced",
  shortNames: ["telemetry"],
  spec: {
    accessLogging: z
      .array(
        z.object({
          disabled: z.boolean().optional(),
          filter: z
            .object({
              expression: z.string().optional(),
            })
            .optional(),
          match: z
            .object({
              mode: z
                .enum(["CLIENT_AND_SERVER", "CLIENT", "SERVER"])
                .optional(),
            })
            .optional(),
          providers: z
            .array(
              z.object({
                name: z.string(),
              }),
            )
            .optional(),
        }),
      )
      .optional(),
    metrics: z
      .array(
        z.object({
          overrides: z
            .array(
              z.object({
                disabled: z.boolean().optional(),
                match: z
                  .object({
                    customMetric: z.string().optional(),
                    metric: z
                      .enum([
                        "ALL_METRICS",
                        "REQUEST_COUNT",
                        "REQUEST_DURATION",
                        "REQUEST_SIZE",
                        "RESPONSE_SIZE",
                        "TCP_OPENED_CONNECTIONS",
                        "TCP_CLOSED_CONNECTIONS",
                        "TCP_SENT_BYTES",
                        "TCP_RECEIVED_BYTES",
                        "GRPC_REQUEST_MESSAGES",
                        "GRPC_RESPONSE_MESSAGES",
                      ])
                      .optional(),
                    mode: z
                      .enum(["CLIENT_AND_SERVER", "CLIENT", "SERVER"])
                      .optional(),
                  })
                  .optional(),
                tagOverrides: z
                  .record(
                    z.object({
                      operation: z.enum(["UPSERT", "REMOVE"]).optional(),
                      value: z.string().optional(),
                    }),
                  )
                  .optional(),
              }),
            )
            .optional(),
          providers: z
            .array(
              z.object({
                name: z.string(),
              }),
            )
            .optional(),
          reportingInterval: z.string().optional(),
        }),
      )
      .optional(),
    selector: z
      .object({
        matchLabels: z.record(z.string()).optional(),
      })
      .optional(),
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
    tracing: z
      .array(
        z.object({
          customTags: z
            .record(
              z.object({
                environment: z
                  .object({
                    defaultValue: z.string().optional(),
                    name: z.string(),
                  })
                  .optional(),
                header: z
                  .object({
                    defaultValue: z.string().optional(),
                    name: z.string(),
                  })
                  .optional(),
                literal: z
                  .object({
                    value: z.string(),
                  })
                  .optional(),
              }),
            )
            .optional(),
          disableSpanReporting: z.boolean().optional(),
          enableIstioTags: z.boolean().optional(),
          match: z
            .object({
              mode: z
                .enum(["CLIENT_AND_SERVER", "CLIENT", "SERVER"])
                .optional(),
            })
            .optional(),
          providers: z
            .array(
              z.object({
                name: z.string(),
              }),
            )
            .optional(),
          randomSamplingPercentage: z.number().optional(),
          useRequestIdForTraceSampling: z.boolean().optional(),
        }),
      )
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
});
