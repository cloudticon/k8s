/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const ingressClass = resource("networking.k8s.io/v1", "IngressClass", {
  scope: "Cluster",
  spec: {
    controller: z.string().optional(),
    parameters: z
      .object({
        apiGroup: z.string().optional(),
        kind: z.string().default(""),
        name: z.string().default(""),
        namespace: z.string().optional(),
        scope: z.string().optional(),
      })
      .optional(),
  },
});

export const ingress = resource("networking.k8s.io/v1", "Ingress", {
  scope: "Namespaced",
  spec: {
    defaultBackend: z
      .object({
        resource: z
          .object({
            apiGroup: z.string().optional(),
            kind: z.string().default(""),
            name: z.string().default(""),
          })
          .optional(),
        service: z
          .object({
            name: z.string().default(""),
            port: z
              .object({
                name: z.string().optional(),
                number: z.number().optional(),
              })
              .default({}),
          })
          .optional(),
      })
      .optional(),
    ingressClassName: z.string().optional(),
    rules: z
      .array(
        z
          .object({
            host: z.string().optional(),
            http: z
              .object({
                paths: z.array(
                  z
                    .object({
                      backend: z
                        .object({
                          resource: z
                            .object({
                              apiGroup: z.string().optional(),
                              kind: z.string().default(""),
                              name: z.string().default(""),
                            })
                            .optional(),
                          service: z
                            .object({
                              name: z.string().default(""),
                              port: z
                                .object({
                                  name: z.string().optional(),
                                  number: z.number().optional(),
                                })
                                .default({}),
                            })
                            .optional(),
                        })
                        .default({}),
                      path: z.string().optional(),
                      pathType: z.string(),
                    })
                    .default({}),
                ),
              })
              .optional(),
          })
          .default({}),
      )
      .optional(),
    tls: z
      .array(
        z
          .object({
            hosts: z.array(z.string().default("")).optional(),
            secretName: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
  },
  status: {
    loadBalancer: z
      .object({
        ingress: z
          .array(
            z
              .object({
                hostname: z.string().optional(),
                ip: z.string().optional(),
                ports: z
                  .array(
                    z
                      .object({
                        error: z.string().optional(),
                        port: z.number().default(0),
                        protocol: z.enum(["SCTP", "TCP", "UDP"]).default(""),
                      })
                      .default({}),
                  )
                  .optional(),
              })
              .default({}),
          )
          .optional(),
      })
      .default({}),
  },
});

export const networkPolicy = resource("networking.k8s.io/v1", "NetworkPolicy", {
  scope: "Namespaced",
  spec: {
    egress: z
      .array(
        z
          .object({
            ports: z
              .array(
                z
                  .object({
                    endPort: z.number().optional(),
                    port: z.string().optional(),
                    protocol: z.string().optional(),
                  })
                  .default({}),
              )
              .optional(),
            to: z
              .array(
                z
                  .object({
                    ipBlock: z
                      .object({
                        cidr: z.string().default(""),
                        except: z.array(z.string().default("")).optional(),
                      })
                      .optional(),
                    namespaceSelector: z
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
                    podSelector: z
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
              )
              .optional(),
          })
          .default({}),
      )
      .optional(),
    ingress: z
      .array(
        z
          .object({
            from: z
              .array(
                z
                  .object({
                    ipBlock: z
                      .object({
                        cidr: z.string().default(""),
                        except: z.array(z.string().default("")).optional(),
                      })
                      .optional(),
                    namespaceSelector: z
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
                    podSelector: z
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
              )
              .optional(),
            ports: z
              .array(
                z
                  .object({
                    endPort: z.number().optional(),
                    port: z.string().optional(),
                    protocol: z.string().optional(),
                  })
                  .default({}),
              )
              .optional(),
          })
          .default({}),
      )
      .optional(),
    podSelector: z
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
    policyTypes: z.array(z.string().default("")).optional(),
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
  },
});
