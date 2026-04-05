/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const destinationRule = /* @__PURE__ */ resource(
  "networking.istio.io/v1beta1",
  "DestinationRule",
  {
    scope: "Namespaced",
    shortNames: ["dr"],
    spec: {
      exportTo: z.array(z.string()).optional(),
      host: z.string(),
      subsets: z
        .array(
          z.object({
            labels: z.record(z.string()).optional(),
            name: z.string(),
            trafficPolicy: z
              .object({
                connectionPool: z
                  .object({
                    http: z
                      .object({
                        h2UpgradePolicy: z
                          .enum(["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"])
                          .optional(),
                        http1MaxPendingRequests: z.number().optional(),
                        http2MaxRequests: z.number().optional(),
                        idleTimeout: z.string().optional(),
                        maxConcurrentStreams: z.number().optional(),
                        maxRequestsPerConnection: z.number().optional(),
                        maxRetries: z.number().optional(),
                        useClientProtocol: z.boolean().optional(),
                      })
                      .optional(),
                    tcp: z
                      .object({
                        connectTimeout: z.string().optional(),
                        idleTimeout: z.string().optional(),
                        maxConnectionDuration: z.string().optional(),
                        maxConnections: z.number().optional(),
                        tcpKeepalive: z
                          .object({
                            interval: z.string().optional(),
                            probes: z.number().optional(),
                            time: z.string().optional(),
                          })
                          .optional(),
                      })
                      .optional(),
                  })
                  .optional(),
                loadBalancer: z
                  .object({
                    consistentHash: z
                      .object({
                        httpCookie: z
                          .object({
                            attributes: z
                              .array(
                                z.object({
                                  name: z.string(),
                                  value: z.string().optional(),
                                }),
                              )
                              .optional(),
                            name: z.string(),
                            path: z.string().optional(),
                            ttl: z.string().optional(),
                          })
                          .optional(),
                        httpHeaderName: z.string().optional(),
                        httpQueryParameterName: z.string().optional(),
                        maglev: z
                          .object({
                            tableSize: z.number().optional(),
                          })
                          .optional(),
                        minimumRingSize: z.number().optional(),
                        ringHash: z
                          .object({
                            minimumRingSize: z.number().optional(),
                          })
                          .optional(),
                        useSourceIp: z.boolean().optional(),
                      })
                      .optional(),
                    localityLbSetting: z
                      .object({
                        distribute: z
                          .array(
                            z.object({
                              from: z.string().optional(),
                              to: z.record(z.number()).optional(),
                            }),
                          )
                          .optional(),
                        enabled: z.boolean().optional(),
                        failover: z
                          .array(
                            z.object({
                              from: z.string().optional(),
                              to: z.string().optional(),
                            }),
                          )
                          .optional(),
                        failoverPriority: z.array(z.string()).optional(),
                      })
                      .optional(),
                    simple: z
                      .enum([
                        "UNSPECIFIED",
                        "LEAST_CONN",
                        "RANDOM",
                        "PASSTHROUGH",
                        "ROUND_ROBIN",
                        "LEAST_REQUEST",
                      ])
                      .optional(),
                    warmup: z
                      .object({
                        aggression: z.number().optional(),
                        duration: z.string(),
                        minimumPercent: z.number().optional(),
                      })
                      .optional(),
                    warmupDurationSecs: z.string().optional(),
                  })
                  .optional(),
                outlierDetection: z
                  .object({
                    baseEjectionTime: z.string().optional(),
                    consecutive5xxErrors: z.number().optional(),
                    consecutiveErrors: z.number().optional(),
                    consecutiveGatewayErrors: z.number().optional(),
                    consecutiveLocalOriginFailures: z.number().optional(),
                    interval: z.string().optional(),
                    maxEjectionPercent: z.number().optional(),
                    minHealthPercent: z.number().optional(),
                    splitExternalLocalOriginErrors: z.boolean().optional(),
                  })
                  .optional(),
                portLevelSettings: z
                  .array(
                    z.object({
                      connectionPool: z
                        .object({
                          http: z
                            .object({
                              h2UpgradePolicy: z
                                .enum(["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"])
                                .optional(),
                              http1MaxPendingRequests: z.number().optional(),
                              http2MaxRequests: z.number().optional(),
                              idleTimeout: z.string().optional(),
                              maxConcurrentStreams: z.number().optional(),
                              maxRequestsPerConnection: z.number().optional(),
                              maxRetries: z.number().optional(),
                              useClientProtocol: z.boolean().optional(),
                            })
                            .optional(),
                          tcp: z
                            .object({
                              connectTimeout: z.string().optional(),
                              idleTimeout: z.string().optional(),
                              maxConnectionDuration: z.string().optional(),
                              maxConnections: z.number().optional(),
                              tcpKeepalive: z
                                .object({
                                  interval: z.string().optional(),
                                  probes: z.number().optional(),
                                  time: z.string().optional(),
                                })
                                .optional(),
                            })
                            .optional(),
                        })
                        .optional(),
                      loadBalancer: z
                        .object({
                          consistentHash: z
                            .object({
                              httpCookie: z
                                .object({
                                  attributes: z
                                    .array(
                                      z.object({
                                        name: z.string(),
                                        value: z.string().optional(),
                                      }),
                                    )
                                    .optional(),
                                  name: z.string(),
                                  path: z.string().optional(),
                                  ttl: z.string().optional(),
                                })
                                .optional(),
                              httpHeaderName: z.string().optional(),
                              httpQueryParameterName: z.string().optional(),
                              maglev: z
                                .object({
                                  tableSize: z.number().optional(),
                                })
                                .optional(),
                              minimumRingSize: z.number().optional(),
                              ringHash: z
                                .object({
                                  minimumRingSize: z.number().optional(),
                                })
                                .optional(),
                              useSourceIp: z.boolean().optional(),
                            })
                            .optional(),
                          localityLbSetting: z
                            .object({
                              distribute: z
                                .array(
                                  z.object({
                                    from: z.string().optional(),
                                    to: z.record(z.number()).optional(),
                                  }),
                                )
                                .optional(),
                              enabled: z.boolean().optional(),
                              failover: z
                                .array(
                                  z.object({
                                    from: z.string().optional(),
                                    to: z.string().optional(),
                                  }),
                                )
                                .optional(),
                              failoverPriority: z.array(z.string()).optional(),
                            })
                            .optional(),
                          simple: z
                            .enum([
                              "UNSPECIFIED",
                              "LEAST_CONN",
                              "RANDOM",
                              "PASSTHROUGH",
                              "ROUND_ROBIN",
                              "LEAST_REQUEST",
                            ])
                            .optional(),
                          warmup: z
                            .object({
                              aggression: z.number().optional(),
                              duration: z.string(),
                              minimumPercent: z.number().optional(),
                            })
                            .optional(),
                          warmupDurationSecs: z.string().optional(),
                        })
                        .optional(),
                      outlierDetection: z
                        .object({
                          baseEjectionTime: z.string().optional(),
                          consecutive5xxErrors: z.number().optional(),
                          consecutiveErrors: z.number().optional(),
                          consecutiveGatewayErrors: z.number().optional(),
                          consecutiveLocalOriginFailures: z.number().optional(),
                          interval: z.string().optional(),
                          maxEjectionPercent: z.number().optional(),
                          minHealthPercent: z.number().optional(),
                          splitExternalLocalOriginErrors: z
                            .boolean()
                            .optional(),
                        })
                        .optional(),
                      port: z
                        .object({
                          number: z.number().optional(),
                        })
                        .optional(),
                      tls: z
                        .object({
                          caCertificates: z.string().optional(),
                          caCrl: z.string().optional(),
                          clientCertificate: z.string().optional(),
                          credentialName: z.string().optional(),
                          insecureSkipVerify: z.boolean().optional(),
                          mode: z
                            .enum([
                              "DISABLE",
                              "SIMPLE",
                              "MUTUAL",
                              "ISTIO_MUTUAL",
                            ])
                            .optional(),
                          privateKey: z.string().optional(),
                          sni: z.string().optional(),
                          subjectAltNames: z.array(z.string()).optional(),
                        })
                        .optional(),
                    }),
                  )
                  .optional(),
                proxyProtocol: z
                  .object({
                    version: z.enum(["V1", "V2"]).optional(),
                  })
                  .optional(),
                retryBudget: z
                  .object({
                    minRetryConcurrency: z.number().optional(),
                    percent: z.number().optional(),
                  })
                  .optional(),
                tls: z
                  .object({
                    caCertificates: z.string().optional(),
                    caCrl: z.string().optional(),
                    clientCertificate: z.string().optional(),
                    credentialName: z.string().optional(),
                    insecureSkipVerify: z.boolean().optional(),
                    mode: z
                      .enum(["DISABLE", "SIMPLE", "MUTUAL", "ISTIO_MUTUAL"])
                      .optional(),
                    privateKey: z.string().optional(),
                    sni: z.string().optional(),
                    subjectAltNames: z.array(z.string()).optional(),
                  })
                  .optional(),
                tunnel: z
                  .object({
                    protocol: z.string().optional(),
                    targetHost: z.string(),
                    targetPort: z.number(),
                  })
                  .optional(),
              })
              .optional(),
          }),
        )
        .optional(),
      trafficPolicy: z
        .object({
          connectionPool: z
            .object({
              http: z
                .object({
                  h2UpgradePolicy: z
                    .enum(["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"])
                    .optional(),
                  http1MaxPendingRequests: z.number().optional(),
                  http2MaxRequests: z.number().optional(),
                  idleTimeout: z.string().optional(),
                  maxConcurrentStreams: z.number().optional(),
                  maxRequestsPerConnection: z.number().optional(),
                  maxRetries: z.number().optional(),
                  useClientProtocol: z.boolean().optional(),
                })
                .optional(),
              tcp: z
                .object({
                  connectTimeout: z.string().optional(),
                  idleTimeout: z.string().optional(),
                  maxConnectionDuration: z.string().optional(),
                  maxConnections: z.number().optional(),
                  tcpKeepalive: z
                    .object({
                      interval: z.string().optional(),
                      probes: z.number().optional(),
                      time: z.string().optional(),
                    })
                    .optional(),
                })
                .optional(),
            })
            .optional(),
          loadBalancer: z
            .object({
              consistentHash: z
                .object({
                  httpCookie: z
                    .object({
                      attributes: z
                        .array(
                          z.object({
                            name: z.string(),
                            value: z.string().optional(),
                          }),
                        )
                        .optional(),
                      name: z.string(),
                      path: z.string().optional(),
                      ttl: z.string().optional(),
                    })
                    .optional(),
                  httpHeaderName: z.string().optional(),
                  httpQueryParameterName: z.string().optional(),
                  maglev: z
                    .object({
                      tableSize: z.number().optional(),
                    })
                    .optional(),
                  minimumRingSize: z.number().optional(),
                  ringHash: z
                    .object({
                      minimumRingSize: z.number().optional(),
                    })
                    .optional(),
                  useSourceIp: z.boolean().optional(),
                })
                .optional(),
              localityLbSetting: z
                .object({
                  distribute: z
                    .array(
                      z.object({
                        from: z.string().optional(),
                        to: z.record(z.number()).optional(),
                      }),
                    )
                    .optional(),
                  enabled: z.boolean().optional(),
                  failover: z
                    .array(
                      z.object({
                        from: z.string().optional(),
                        to: z.string().optional(),
                      }),
                    )
                    .optional(),
                  failoverPriority: z.array(z.string()).optional(),
                })
                .optional(),
              simple: z
                .enum([
                  "UNSPECIFIED",
                  "LEAST_CONN",
                  "RANDOM",
                  "PASSTHROUGH",
                  "ROUND_ROBIN",
                  "LEAST_REQUEST",
                ])
                .optional(),
              warmup: z
                .object({
                  aggression: z.number().optional(),
                  duration: z.string(),
                  minimumPercent: z.number().optional(),
                })
                .optional(),
              warmupDurationSecs: z.string().optional(),
            })
            .optional(),
          outlierDetection: z
            .object({
              baseEjectionTime: z.string().optional(),
              consecutive5xxErrors: z.number().optional(),
              consecutiveErrors: z.number().optional(),
              consecutiveGatewayErrors: z.number().optional(),
              consecutiveLocalOriginFailures: z.number().optional(),
              interval: z.string().optional(),
              maxEjectionPercent: z.number().optional(),
              minHealthPercent: z.number().optional(),
              splitExternalLocalOriginErrors: z.boolean().optional(),
            })
            .optional(),
          portLevelSettings: z
            .array(
              z.object({
                connectionPool: z
                  .object({
                    http: z
                      .object({
                        h2UpgradePolicy: z
                          .enum(["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"])
                          .optional(),
                        http1MaxPendingRequests: z.number().optional(),
                        http2MaxRequests: z.number().optional(),
                        idleTimeout: z.string().optional(),
                        maxConcurrentStreams: z.number().optional(),
                        maxRequestsPerConnection: z.number().optional(),
                        maxRetries: z.number().optional(),
                        useClientProtocol: z.boolean().optional(),
                      })
                      .optional(),
                    tcp: z
                      .object({
                        connectTimeout: z.string().optional(),
                        idleTimeout: z.string().optional(),
                        maxConnectionDuration: z.string().optional(),
                        maxConnections: z.number().optional(),
                        tcpKeepalive: z
                          .object({
                            interval: z.string().optional(),
                            probes: z.number().optional(),
                            time: z.string().optional(),
                          })
                          .optional(),
                      })
                      .optional(),
                  })
                  .optional(),
                loadBalancer: z
                  .object({
                    consistentHash: z
                      .object({
                        httpCookie: z
                          .object({
                            attributes: z
                              .array(
                                z.object({
                                  name: z.string(),
                                  value: z.string().optional(),
                                }),
                              )
                              .optional(),
                            name: z.string(),
                            path: z.string().optional(),
                            ttl: z.string().optional(),
                          })
                          .optional(),
                        httpHeaderName: z.string().optional(),
                        httpQueryParameterName: z.string().optional(),
                        maglev: z
                          .object({
                            tableSize: z.number().optional(),
                          })
                          .optional(),
                        minimumRingSize: z.number().optional(),
                        ringHash: z
                          .object({
                            minimumRingSize: z.number().optional(),
                          })
                          .optional(),
                        useSourceIp: z.boolean().optional(),
                      })
                      .optional(),
                    localityLbSetting: z
                      .object({
                        distribute: z
                          .array(
                            z.object({
                              from: z.string().optional(),
                              to: z.record(z.number()).optional(),
                            }),
                          )
                          .optional(),
                        enabled: z.boolean().optional(),
                        failover: z
                          .array(
                            z.object({
                              from: z.string().optional(),
                              to: z.string().optional(),
                            }),
                          )
                          .optional(),
                        failoverPriority: z.array(z.string()).optional(),
                      })
                      .optional(),
                    simple: z
                      .enum([
                        "UNSPECIFIED",
                        "LEAST_CONN",
                        "RANDOM",
                        "PASSTHROUGH",
                        "ROUND_ROBIN",
                        "LEAST_REQUEST",
                      ])
                      .optional(),
                    warmup: z
                      .object({
                        aggression: z.number().optional(),
                        duration: z.string(),
                        minimumPercent: z.number().optional(),
                      })
                      .optional(),
                    warmupDurationSecs: z.string().optional(),
                  })
                  .optional(),
                outlierDetection: z
                  .object({
                    baseEjectionTime: z.string().optional(),
                    consecutive5xxErrors: z.number().optional(),
                    consecutiveErrors: z.number().optional(),
                    consecutiveGatewayErrors: z.number().optional(),
                    consecutiveLocalOriginFailures: z.number().optional(),
                    interval: z.string().optional(),
                    maxEjectionPercent: z.number().optional(),
                    minHealthPercent: z.number().optional(),
                    splitExternalLocalOriginErrors: z.boolean().optional(),
                  })
                  .optional(),
                port: z
                  .object({
                    number: z.number().optional(),
                  })
                  .optional(),
                tls: z
                  .object({
                    caCertificates: z.string().optional(),
                    caCrl: z.string().optional(),
                    clientCertificate: z.string().optional(),
                    credentialName: z.string().optional(),
                    insecureSkipVerify: z.boolean().optional(),
                    mode: z
                      .enum(["DISABLE", "SIMPLE", "MUTUAL", "ISTIO_MUTUAL"])
                      .optional(),
                    privateKey: z.string().optional(),
                    sni: z.string().optional(),
                    subjectAltNames: z.array(z.string()).optional(),
                  })
                  .optional(),
              }),
            )
            .optional(),
          proxyProtocol: z
            .object({
              version: z.enum(["V1", "V2"]).optional(),
            })
            .optional(),
          retryBudget: z
            .object({
              minRetryConcurrency: z.number().optional(),
              percent: z.number().optional(),
            })
            .optional(),
          tls: z
            .object({
              caCertificates: z.string().optional(),
              caCrl: z.string().optional(),
              clientCertificate: z.string().optional(),
              credentialName: z.string().optional(),
              insecureSkipVerify: z.boolean().optional(),
              mode: z
                .enum(["DISABLE", "SIMPLE", "MUTUAL", "ISTIO_MUTUAL"])
                .optional(),
              privateKey: z.string().optional(),
              sni: z.string().optional(),
              subjectAltNames: z.array(z.string()).optional(),
            })
            .optional(),
          tunnel: z
            .object({
              protocol: z.string().optional(),
              targetHost: z.string(),
              targetPort: z.number(),
            })
            .optional(),
        })
        .optional(),
      workloadSelector: z
        .object({
          matchLabels: z.record(z.string()).optional(),
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

export const gateway = /* @__PURE__ */ resource("networking.istio.io/v1beta1", "Gateway", {
  scope: "Namespaced",
  shortNames: ["gw"],
  spec: {
    selector: z.record(z.string()).optional(),
    servers: z
      .array(
        z.object({
          bind: z.string().optional(),
          defaultEndpoint: z.string().optional(),
          hosts: z.array(z.string()),
          name: z.string().optional(),
          port: z.object({
            name: z.string(),
            number: z.number(),
            protocol: z.string(),
            targetPort: z.number().optional(),
          }),
          tls: z
            .object({
              caCertCredentialName: z.string().optional(),
              caCertificates: z.string().optional(),
              caCrl: z.string().optional(),
              cipherSuites: z.array(z.string()).optional(),
              credentialName: z.string().optional(),
              credentialNames: z.array(z.string()).optional(),
              httpsRedirect: z.boolean().optional(),
              maxProtocolVersion: z
                .enum(["TLS_AUTO", "TLSV1_0", "TLSV1_1", "TLSV1_2", "TLSV1_3"])
                .optional(),
              minProtocolVersion: z
                .enum(["TLS_AUTO", "TLSV1_0", "TLSV1_1", "TLSV1_2", "TLSV1_3"])
                .optional(),
              mode: z
                .enum([
                  "PASSTHROUGH",
                  "SIMPLE",
                  "MUTUAL",
                  "AUTO_PASSTHROUGH",
                  "ISTIO_MUTUAL",
                  "OPTIONAL_MUTUAL",
                ])
                .optional(),
              privateKey: z.string().optional(),
              serverCertificate: z.string().optional(),
              subjectAltNames: z.array(z.string()).optional(),
              tlsCertificates: z
                .array(
                  z.object({
                    caCertificates: z.string().optional(),
                    privateKey: z.string().optional(),
                    serverCertificate: z.string().optional(),
                  }),
                )
                .optional(),
              verifyCertificateHash: z.array(z.string()).optional(),
              verifyCertificateSpki: z.array(z.string()).optional(),
            })
            .optional(),
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

export const proxyConfig = /* @__PURE__ */ resource(
  "networking.istio.io/v1beta1",
  "ProxyConfig",
  {
    scope: "Namespaced",
    spec: {
      concurrency: z.number().optional(),
      environmentVariables: z.record(z.string()).optional(),
      image: z
        .object({
          imageType: z.string().optional(),
        })
        .optional(),
      selector: z
        .object({
          matchLabels: z.record(z.string()).optional(),
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

export const serviceEntry = /* @__PURE__ */ resource(
  "networking.istio.io/v1beta1",
  "ServiceEntry",
  {
    scope: "Namespaced",
    shortNames: ["se"],
    spec: {
      addresses: z.array(z.string()).optional(),
      endpoints: z
        .array(
          z.object({
            address: z.string().optional(),
            labels: z.record(z.string()).optional(),
            locality: z.string().optional(),
            network: z.string().optional(),
            ports: z.record(z.number()).optional(),
            serviceAccount: z.string().optional(),
            weight: z.number().optional(),
          }),
        )
        .optional(),
      exportTo: z.array(z.string()).optional(),
      hosts: z.array(z.string()),
      location: z.enum(["MESH_EXTERNAL", "MESH_INTERNAL"]).optional(),
      ports: z
        .array(
          z.object({
            name: z.string(),
            number: z.number(),
            protocol: z.string().optional(),
            targetPort: z.number().optional(),
          }),
        )
        .optional(),
      resolution: z
        .enum(["NONE", "STATIC", "DNS", "DNS_ROUND_ROBIN", "DYNAMIC_DNS"])
        .optional(),
      subjectAltNames: z.array(z.string()).optional(),
      workloadSelector: z
        .object({
          labels: z.record(z.string()).optional(),
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

export const sidecar = /* @__PURE__ */ resource("networking.istio.io/v1beta1", "Sidecar", {
  scope: "Namespaced",
  spec: {
    egress: z
      .array(
        z.object({
          bind: z.string().optional(),
          captureMode: z.enum(["DEFAULT", "IPTABLES", "NONE"]).optional(),
          hosts: z.array(z.string()),
          port: z
            .object({
              name: z.string().optional(),
              number: z.number().optional(),
              protocol: z.string().optional(),
              targetPort: z.number().optional(),
            })
            .optional(),
        }),
      )
      .optional(),
    inboundConnectionPool: z
      .object({
        http: z
          .object({
            h2UpgradePolicy: z
              .enum(["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"])
              .optional(),
            http1MaxPendingRequests: z.number().optional(),
            http2MaxRequests: z.number().optional(),
            idleTimeout: z.string().optional(),
            maxConcurrentStreams: z.number().optional(),
            maxRequestsPerConnection: z.number().optional(),
            maxRetries: z.number().optional(),
            useClientProtocol: z.boolean().optional(),
          })
          .optional(),
        tcp: z
          .object({
            connectTimeout: z.string().optional(),
            idleTimeout: z.string().optional(),
            maxConnectionDuration: z.string().optional(),
            maxConnections: z.number().optional(),
            tcpKeepalive: z
              .object({
                interval: z.string().optional(),
                probes: z.number().optional(),
                time: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    ingress: z
      .array(
        z.object({
          bind: z.string().optional(),
          captureMode: z.enum(["DEFAULT", "IPTABLES", "NONE"]).optional(),
          connectionPool: z
            .object({
              http: z
                .object({
                  h2UpgradePolicy: z
                    .enum(["DEFAULT", "DO_NOT_UPGRADE", "UPGRADE"])
                    .optional(),
                  http1MaxPendingRequests: z.number().optional(),
                  http2MaxRequests: z.number().optional(),
                  idleTimeout: z.string().optional(),
                  maxConcurrentStreams: z.number().optional(),
                  maxRequestsPerConnection: z.number().optional(),
                  maxRetries: z.number().optional(),
                  useClientProtocol: z.boolean().optional(),
                })
                .optional(),
              tcp: z
                .object({
                  connectTimeout: z.string().optional(),
                  idleTimeout: z.string().optional(),
                  maxConnectionDuration: z.string().optional(),
                  maxConnections: z.number().optional(),
                  tcpKeepalive: z
                    .object({
                      interval: z.string().optional(),
                      probes: z.number().optional(),
                      time: z.string().optional(),
                    })
                    .optional(),
                })
                .optional(),
            })
            .optional(),
          defaultEndpoint: z.string().optional(),
          port: z.object({
            name: z.string().optional(),
            number: z.number().optional(),
            protocol: z.string().optional(),
            targetPort: z.number().optional(),
          }),
          tls: z
            .object({
              caCertCredentialName: z.string().optional(),
              caCertificates: z.string().optional(),
              caCrl: z.string().optional(),
              cipherSuites: z.array(z.string()).optional(),
              credentialName: z.string().optional(),
              credentialNames: z.array(z.string()).optional(),
              httpsRedirect: z.boolean().optional(),
              maxProtocolVersion: z
                .enum(["TLS_AUTO", "TLSV1_0", "TLSV1_1", "TLSV1_2", "TLSV1_3"])
                .optional(),
              minProtocolVersion: z
                .enum(["TLS_AUTO", "TLSV1_0", "TLSV1_1", "TLSV1_2", "TLSV1_3"])
                .optional(),
              mode: z
                .enum([
                  "PASSTHROUGH",
                  "SIMPLE",
                  "MUTUAL",
                  "AUTO_PASSTHROUGH",
                  "ISTIO_MUTUAL",
                  "OPTIONAL_MUTUAL",
                ])
                .optional(),
              privateKey: z.string().optional(),
              serverCertificate: z.string().optional(),
              subjectAltNames: z.array(z.string()).optional(),
              tlsCertificates: z
                .array(
                  z.object({
                    caCertificates: z.string().optional(),
                    privateKey: z.string().optional(),
                    serverCertificate: z.string().optional(),
                  }),
                )
                .optional(),
              verifyCertificateHash: z.array(z.string()).optional(),
              verifyCertificateSpki: z.array(z.string()).optional(),
            })
            .optional(),
        }),
      )
      .optional(),
    outboundTrafficPolicy: z
      .object({
        egressProxy: z
          .object({
            host: z.string(),
            port: z
              .object({
                number: z.number().optional(),
              })
              .optional(),
            subset: z.string().optional(),
          })
          .optional(),
        mode: z.enum(["REGISTRY_ONLY", "ALLOW_ANY"]).optional(),
      })
      .optional(),
    workloadSelector: z
      .object({
        labels: z.record(z.string()).optional(),
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
});

export const virtualService = /* @__PURE__ */ resource(
  "networking.istio.io/v1beta1",
  "VirtualService",
  {
    scope: "Namespaced",
    shortNames: ["vs"],
    spec: {
      exportTo: z.array(z.string()).optional(),
      gateways: z.array(z.string()).optional(),
      hosts: z.array(z.string()).optional(),
      http: z
        .array(
          z.object({
            corsPolicy: z
              .object({
                allowCredentials: z.boolean().optional(),
                allowHeaders: z.array(z.string()).optional(),
                allowMethods: z.array(z.string()).optional(),
                allowOrigin: z.array(z.string()).optional(),
                allowOrigins: z
                  .array(
                    z.object({
                      exact: z.string().optional(),
                      prefix: z.string().optional(),
                      regex: z.string().optional(),
                    }),
                  )
                  .optional(),
                exposeHeaders: z.array(z.string()).optional(),
                maxAge: z.string().optional(),
                unmatchedPreflights: z
                  .enum(["UNSPECIFIED", "FORWARD", "IGNORE"])
                  .optional(),
              })
              .optional(),
            delegate: z
              .object({
                name: z.string().optional(),
                namespace: z.string().optional(),
              })
              .optional(),
            directResponse: z
              .object({
                body: z
                  .object({
                    bytes: z.string().optional(),
                    string: z.string().optional(),
                  })
                  .optional(),
                status: z.number(),
              })
              .optional(),
            fault: z
              .object({
                abort: z
                  .object({
                    grpcStatus: z.string().optional(),
                    http2Error: z.string().optional(),
                    httpStatus: z.number().optional(),
                    percentage: z
                      .object({
                        value: z.number().optional(),
                      })
                      .optional(),
                  })
                  .optional(),
                delay: z
                  .object({
                    exponentialDelay: z.string().optional(),
                    fixedDelay: z.string().optional(),
                    percent: z.number().optional(),
                    percentage: z
                      .object({
                        value: z.number().optional(),
                      })
                      .optional(),
                  })
                  .optional(),
              })
              .optional(),
            headers: z
              .object({
                request: z
                  .object({
                    add: z.record(z.string()).optional(),
                    remove: z.array(z.string()).optional(),
                    set: z.record(z.string()).optional(),
                  })
                  .optional(),
                response: z
                  .object({
                    add: z.record(z.string()).optional(),
                    remove: z.array(z.string()).optional(),
                    set: z.record(z.string()).optional(),
                  })
                  .optional(),
              })
              .optional(),
            match: z
              .array(
                z.object({
                  authority: z
                    .object({
                      exact: z.string().optional(),
                      prefix: z.string().optional(),
                      regex: z.string().optional(),
                    })
                    .optional(),
                  gateways: z.array(z.string()).optional(),
                  headers: z
                    .record(
                      z.object({
                        exact: z.string().optional(),
                        prefix: z.string().optional(),
                        regex: z.string().optional(),
                      }),
                    )
                    .optional(),
                  ignoreUriCase: z.boolean().optional(),
                  method: z
                    .object({
                      exact: z.string().optional(),
                      prefix: z.string().optional(),
                      regex: z.string().optional(),
                    })
                    .optional(),
                  name: z.string().optional(),
                  port: z.number().optional(),
                  queryParams: z
                    .record(
                      z.object({
                        exact: z.string().optional(),
                        prefix: z.string().optional(),
                        regex: z.string().optional(),
                      }),
                    )
                    .optional(),
                  scheme: z
                    .object({
                      exact: z.string().optional(),
                      prefix: z.string().optional(),
                      regex: z.string().optional(),
                    })
                    .optional(),
                  sourceLabels: z.record(z.string()).optional(),
                  sourceNamespace: z.string().optional(),
                  statPrefix: z.string().optional(),
                  uri: z
                    .object({
                      exact: z.string().optional(),
                      prefix: z.string().optional(),
                      regex: z.string().optional(),
                    })
                    .optional(),
                  withoutHeaders: z
                    .record(
                      z.object({
                        exact: z.string().optional(),
                        prefix: z.string().optional(),
                        regex: z.string().optional(),
                      }),
                    )
                    .optional(),
                }),
              )
              .optional(),
            mirror: z
              .object({
                host: z.string(),
                port: z
                  .object({
                    number: z.number().optional(),
                  })
                  .optional(),
                subset: z.string().optional(),
              })
              .optional(),
            mirror_percent: z.number().optional(),
            mirrorPercent: z.number().optional(),
            mirrorPercentage: z
              .object({
                value: z.number().optional(),
              })
              .optional(),
            mirrors: z
              .array(
                z.object({
                  destination: z.object({
                    host: z.string(),
                    port: z
                      .object({
                        number: z.number().optional(),
                      })
                      .optional(),
                    subset: z.string().optional(),
                  }),
                  percentage: z
                    .object({
                      value: z.number().optional(),
                    })
                    .optional(),
                }),
              )
              .optional(),
            name: z.string().optional(),
            redirect: z
              .object({
                authority: z.string().optional(),
                derivePort: z
                  .enum(["FROM_PROTOCOL_DEFAULT", "FROM_REQUEST_PORT"])
                  .optional(),
                port: z.number().optional(),
                redirectCode: z.number().optional(),
                scheme: z.string().optional(),
                uri: z.string().optional(),
              })
              .optional(),
            retries: z
              .object({
                attempts: z.number().optional(),
                backoff: z.string().optional(),
                perTryTimeout: z.string().optional(),
                retryIgnorePreviousHosts: z.boolean().optional(),
                retryOn: z.string().optional(),
                retryRemoteLocalities: z.boolean().optional(),
              })
              .optional(),
            rewrite: z
              .object({
                authority: z.string().optional(),
                uri: z.string().optional(),
                uriRegexRewrite: z
                  .object({
                    match: z.string().optional(),
                    rewrite: z.string().optional(),
                  })
                  .optional(),
              })
              .optional(),
            route: z
              .array(
                z.object({
                  destination: z.object({
                    host: z.string(),
                    port: z
                      .object({
                        number: z.number().optional(),
                      })
                      .optional(),
                    subset: z.string().optional(),
                  }),
                  headers: z
                    .object({
                      request: z
                        .object({
                          add: z.record(z.string()).optional(),
                          remove: z.array(z.string()).optional(),
                          set: z.record(z.string()).optional(),
                        })
                        .optional(),
                      response: z
                        .object({
                          add: z.record(z.string()).optional(),
                          remove: z.array(z.string()).optional(),
                          set: z.record(z.string()).optional(),
                        })
                        .optional(),
                    })
                    .optional(),
                  weight: z.number().optional(),
                }),
              )
              .optional(),
            timeout: z.string().optional(),
          }),
        )
        .optional(),
      tcp: z
        .array(
          z.object({
            match: z
              .array(
                z.object({
                  destinationSubnets: z.array(z.string()).optional(),
                  gateways: z.array(z.string()).optional(),
                  port: z.number().optional(),
                  sourceLabels: z.record(z.string()).optional(),
                  sourceNamespace: z.string().optional(),
                  sourceSubnet: z.string().optional(),
                }),
              )
              .optional(),
            route: z
              .array(
                z.object({
                  destination: z.object({
                    host: z.string(),
                    port: z
                      .object({
                        number: z.number().optional(),
                      })
                      .optional(),
                    subset: z.string().optional(),
                  }),
                  weight: z.number().optional(),
                }),
              )
              .optional(),
          }),
        )
        .optional(),
      tls: z
        .array(
          z.object({
            match: z.array(
              z.object({
                destinationSubnets: z.array(z.string()).optional(),
                gateways: z.array(z.string()).optional(),
                port: z.number().optional(),
                sniHosts: z.array(z.string()),
                sourceLabels: z.record(z.string()).optional(),
                sourceNamespace: z.string().optional(),
              }),
            ),
            route: z
              .array(
                z.object({
                  destination: z.object({
                    host: z.string(),
                    port: z
                      .object({
                        number: z.number().optional(),
                      })
                      .optional(),
                    subset: z.string().optional(),
                  }),
                  weight: z.number().optional(),
                }),
              )
              .optional(),
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
  },
);

export const workloadEntry = /* @__PURE__ */ resource(
  "networking.istio.io/v1beta1",
  "WorkloadEntry",
  {
    scope: "Namespaced",
    shortNames: ["we"],
    spec: {
      address: z.string().optional(),
      labels: z.record(z.string()).optional(),
      locality: z.string().optional(),
      network: z.string().optional(),
      ports: z.record(z.number()).optional(),
      serviceAccount: z.string().optional(),
      weight: z.number().optional(),
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

export const workloadGroup = /* @__PURE__ */ resource(
  "networking.istio.io/v1beta1",
  "WorkloadGroup",
  {
    scope: "Namespaced",
    shortNames: ["wg"],
    spec: {
      metadata: z
        .object({
          annotations: z.record(z.string()).optional(),
          labels: z.record(z.string()).optional(),
        })
        .optional(),
      probe: z
        .object({
          exec: z
            .object({
              command: z.array(z.string()),
            })
            .optional(),
          failureThreshold: z.number().optional(),
          grpc: z
            .object({
              port: z.number().optional(),
              service: z.string().optional(),
            })
            .optional(),
          httpGet: z
            .object({
              host: z.string().optional(),
              httpHeaders: z
                .array(
                  z.object({
                    name: z.string().optional(),
                    value: z.string().optional(),
                  }),
                )
                .optional(),
              path: z.string().optional(),
              port: z.number(),
              scheme: z.string().optional(),
            })
            .optional(),
          initialDelaySeconds: z.number().optional(),
          periodSeconds: z.number().optional(),
          successThreshold: z.number().optional(),
          tcpSocket: z
            .object({
              host: z.string().optional(),
              port: z.number(),
            })
            .optional(),
          timeoutSeconds: z.number().optional(),
        })
        .optional(),
      template: z.object({
        address: z.string().optional(),
        labels: z.record(z.string()).optional(),
        locality: z.string().optional(),
        network: z.string().optional(),
        ports: z.record(z.number()).optional(),
        serviceAccount: z.string().optional(),
        weight: z.number().optional(),
      }),
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
