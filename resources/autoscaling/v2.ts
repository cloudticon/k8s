/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const horizontalPodAutoscaler = resource(
  "autoscaling/v2",
  "HorizontalPodAutoscaler",
  {
    scope: "Namespaced",
    spec: {
      behavior: z
        .object({
          scaleDown: z
            .object({
              policies: z
                .array(
                  z
                    .object({
                      periodSeconds: z.number().default(0),
                      type: z.string().default(""),
                      value: z.number().default(0),
                    })
                    .default({}),
                )
                .optional(),
              selectPolicy: z.string().optional(),
              stabilizationWindowSeconds: z.number().optional(),
            })
            .optional(),
          scaleUp: z
            .object({
              policies: z
                .array(
                  z
                    .object({
                      periodSeconds: z.number().default(0),
                      type: z.string().default(""),
                      value: z.number().default(0),
                    })
                    .default({}),
                )
                .optional(),
              selectPolicy: z.string().optional(),
              stabilizationWindowSeconds: z.number().optional(),
            })
            .optional(),
        })
        .optional(),
      maxReplicas: z.number().default(0),
      metrics: z
        .array(
          z
            .object({
              containerResource: z
                .object({
                  container: z.string().default(""),
                  name: z.string().default(""),
                  target: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      type: z.string().default(""),
                      value: z.string().optional(),
                    })
                    .default({}),
                })
                .optional(),
              external: z
                .object({
                  metric: z
                    .object({
                      name: z.string().default(""),
                      selector: z
                        .object({
                          matchExpressions: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  operator: z.string().default(""),
                                  values: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                          matchLabels: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                    })
                    .default({}),
                  target: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      type: z.string().default(""),
                      value: z.string().optional(),
                    })
                    .default({}),
                })
                .optional(),
              object: z
                .object({
                  describedObject: z
                    .object({
                      apiVersion: z.string().optional(),
                      kind: z.string().default(""),
                      name: z.string().default(""),
                    })
                    .default({}),
                  metric: z
                    .object({
                      name: z.string().default(""),
                      selector: z
                        .object({
                          matchExpressions: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  operator: z.string().default(""),
                                  values: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                          matchLabels: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                    })
                    .default({}),
                  target: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      type: z.string().default(""),
                      value: z.string().optional(),
                    })
                    .default({}),
                })
                .optional(),
              pods: z
                .object({
                  metric: z
                    .object({
                      name: z.string().default(""),
                      selector: z
                        .object({
                          matchExpressions: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  operator: z.string().default(""),
                                  values: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                          matchLabels: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                    })
                    .default({}),
                  target: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      type: z.string().default(""),
                      value: z.string().optional(),
                    })
                    .default({}),
                })
                .optional(),
              resource: z
                .object({
                  name: z.string().default(""),
                  target: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      type: z.string().default(""),
                      value: z.string().optional(),
                    })
                    .default({}),
                })
                .optional(),
              type: z.string().default(""),
            })
            .default({}),
        )
        .optional(),
      minReplicas: z.number().optional(),
      scaleTargetRef: z
        .object({
          apiVersion: z.string().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
        })
        .default({}),
    },
    status: {
      conditions: z
        .array(
          z
            .object({
              lastTransitionTime: z.string().default({}),
              message: z.string().optional(),
              reason: z.string().optional(),
              status: z.string().default(""),
              type: z.string().default(""),
            })
            .default({}),
        )
        .optional(),
      currentMetrics: z
        .array(
          z
            .object({
              containerResource: z
                .object({
                  container: z.string().default(""),
                  current: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      value: z.string().optional(),
                    })
                    .default({}),
                  name: z.string().default(""),
                })
                .optional(),
              external: z
                .object({
                  current: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      value: z.string().optional(),
                    })
                    .default({}),
                  metric: z
                    .object({
                      name: z.string().default(""),
                      selector: z
                        .object({
                          matchExpressions: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  operator: z.string().default(""),
                                  values: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                          matchLabels: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                    })
                    .default({}),
                })
                .optional(),
              object: z
                .object({
                  current: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      value: z.string().optional(),
                    })
                    .default({}),
                  describedObject: z
                    .object({
                      apiVersion: z.string().optional(),
                      kind: z.string().default(""),
                      name: z.string().default(""),
                    })
                    .default({}),
                  metric: z
                    .object({
                      name: z.string().default(""),
                      selector: z
                        .object({
                          matchExpressions: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  operator: z.string().default(""),
                                  values: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                          matchLabels: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                    })
                    .default({}),
                })
                .optional(),
              pods: z
                .object({
                  current: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      value: z.string().optional(),
                    })
                    .default({}),
                  metric: z
                    .object({
                      name: z.string().default(""),
                      selector: z
                        .object({
                          matchExpressions: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  operator: z.string().default(""),
                                  values: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                          matchLabels: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                    })
                    .default({}),
                })
                .optional(),
              resource: z
                .object({
                  current: z
                    .object({
                      averageUtilization: z.number().optional(),
                      averageValue: z.string().optional(),
                      value: z.string().optional(),
                    })
                    .default({}),
                  name: z.string().default(""),
                })
                .optional(),
              type: z.string().default(""),
            })
            .default({}),
        )
        .optional(),
      currentReplicas: z.number().optional(),
      desiredReplicas: z.number().default(0),
      lastScaleTime: z.string().optional(),
      observedGeneration: z.number().optional(),
    },
  },
);
