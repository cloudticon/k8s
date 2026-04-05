/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "https://github.com/cloudticon/k8s@master";

export const challenge = /* @__PURE__ */ resource("acme.cert-manager.io/v1", "Challenge", {
  scope: "Namespaced",
  spec: {
    authorizationURL: z.string(),
    dnsName: z.string(),
    issuerRef: z.object({
      group: z.string().optional(),
      kind: z.string().optional(),
      name: z.string(),
    }),
    key: z.string(),
    solver: z.object({
      dns01: z.object({
        acmeDNS: z.object({
          accountSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
          host: z.string(),
        }).optional(),
        akamai: z.object({
          accessTokenSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
          clientSecretSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
          clientTokenSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
          serviceConsumerDomain: z.string(),
        }).optional(),
        azureDNS: z.object({
          clientID: z.string().optional(),
          clientSecretSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
          environment: z.enum(["AzurePublicCloud","AzureChinaCloud","AzureGermanCloud","AzureUSGovernmentCloud"]).optional(),
          hostedZoneName: z.string().optional(),
          managedIdentity: z.object({
            clientID: z.string().optional(),
            resourceID: z.string().optional(),
            tenantID: z.string().optional(),
          }).optional(),
          resourceGroupName: z.string(),
          subscriptionID: z.string(),
          tenantID: z.string().optional(),
        }).optional(),
        cloudDNS: z.object({
          hostedZoneName: z.string().optional(),
          project: z.string(),
          serviceAccountSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
        }).optional(),
        cloudflare: z.object({
          apiKeySecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
          apiTokenSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
          email: z.string().optional(),
        }).optional(),
        cnameStrategy: z.enum(["None","Follow"]).optional(),
        digitalocean: z.object({
          tokenSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
        }).optional(),
        rfc2136: z.object({
          nameserver: z.string(),
          tsigAlgorithm: z.string().optional(),
          tsigKeyName: z.string().optional(),
          tsigSecretSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
        }).optional(),
        route53: z.object({
          accessKeyID: z.string().optional(),
          accessKeyIDSecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
          auth: z.object({
            kubernetes: z.object({
              serviceAccountRef: z.object({
                audiences: z.array(z.string()).optional(),
                name: z.string(),
              }),
            }),
          }).optional(),
          hostedZoneID: z.string().optional(),
          region: z.string().optional(),
          role: z.string().optional(),
          secretAccessKeySecretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
        }).optional(),
        webhook: z.object({
          config: z.string().optional(),
          groupName: z.string(),
          solverName: z.string(),
        }).optional(),
      }).optional(),
      http01: z.object({
        gatewayHTTPRoute: z.object({
          labels: z.record(z.string()).optional(),
          parentRefs: z.array(z.object({
            group: z.string().default("gateway.networking.k8s.io"),
            kind: z.string().default("Gateway"),
            name: z.string(),
            namespace: z.string().optional(),
            port: z.number().optional(),
            sectionName: z.string().optional(),
          })).optional(),
          podTemplate: z.object({
            metadata: z.object({
              annotations: z.record(z.string()).optional(),
              labels: z.record(z.string()).optional(),
            }).optional(),
            spec: z.object({
              affinity: z.object({
                nodeAffinity: z.object({
                  preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    preference: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchFields: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                    }),
                    weight: z.number(),
                  })).optional(),
                  requiredDuringSchedulingIgnoredDuringExecution: z.object({
                    nodeSelectorTerms: z.array(z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchFields: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                    })),
                  }).optional(),
                }).optional(),
                podAffinity: z.object({
                  preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    podAffinityTerm: z.object({
                      labelSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      matchLabelKeys: z.array(z.string()).optional(),
                      mismatchLabelKeys: z.array(z.string()).optional(),
                      namespaceSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      namespaces: z.array(z.string()).optional(),
                      topologyKey: z.string(),
                    }),
                    weight: z.number(),
                  })).optional(),
                  requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    labelSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    matchLabelKeys: z.array(z.string()).optional(),
                    mismatchLabelKeys: z.array(z.string()).optional(),
                    namespaceSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    namespaces: z.array(z.string()).optional(),
                    topologyKey: z.string(),
                  })).optional(),
                }).optional(),
                podAntiAffinity: z.object({
                  preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    podAffinityTerm: z.object({
                      labelSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      matchLabelKeys: z.array(z.string()).optional(),
                      mismatchLabelKeys: z.array(z.string()).optional(),
                      namespaceSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      namespaces: z.array(z.string()).optional(),
                      topologyKey: z.string(),
                    }),
                    weight: z.number(),
                  })).optional(),
                  requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    labelSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    matchLabelKeys: z.array(z.string()).optional(),
                    mismatchLabelKeys: z.array(z.string()).optional(),
                    namespaceSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    namespaces: z.array(z.string()).optional(),
                    topologyKey: z.string(),
                  })).optional(),
                }).optional(),
              }).optional(),
              imagePullSecrets: z.array(z.object({
                name: z.string().default(""),
              })).optional(),
              nodeSelector: z.record(z.string()).optional(),
              priorityClassName: z.string().optional(),
              securityContext: z.object({
                fsGroup: z.number().optional(),
                fsGroupChangePolicy: z.string().optional(),
                runAsGroup: z.number().optional(),
                runAsNonRoot: z.boolean().optional(),
                runAsUser: z.number().optional(),
                seLinuxOptions: z.object({
                  level: z.string().optional(),
                  role: z.string().optional(),
                  type: z.string().optional(),
                  user: z.string().optional(),
                }).optional(),
                seccompProfile: z.object({
                  localhostProfile: z.string().optional(),
                  type: z.string(),
                }).optional(),
                supplementalGroups: z.array(z.number()).optional(),
                sysctls: z.array(z.object({
                  name: z.string(),
                  value: z.string(),
                })).optional(),
              }).optional(),
              serviceAccountName: z.string().optional(),
              tolerations: z.array(z.object({
                effect: z.string().optional(),
                key: z.string().optional(),
                operator: z.string().optional(),
                tolerationSeconds: z.number().optional(),
                value: z.string().optional(),
              })).optional(),
            }).optional(),
          }).optional(),
          serviceType: z.string().optional(),
        }).optional(),
        ingress: z.object({
          class: z.string().optional(),
          ingressClassName: z.string().optional(),
          ingressTemplate: z.object({
            metadata: z.object({
              annotations: z.record(z.string()).optional(),
              labels: z.record(z.string()).optional(),
            }).optional(),
          }).optional(),
          name: z.string().optional(),
          podTemplate: z.object({
            metadata: z.object({
              annotations: z.record(z.string()).optional(),
              labels: z.record(z.string()).optional(),
            }).optional(),
            spec: z.object({
              affinity: z.object({
                nodeAffinity: z.object({
                  preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    preference: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchFields: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                    }),
                    weight: z.number(),
                  })).optional(),
                  requiredDuringSchedulingIgnoredDuringExecution: z.object({
                    nodeSelectorTerms: z.array(z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchFields: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                    })),
                  }).optional(),
                }).optional(),
                podAffinity: z.object({
                  preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    podAffinityTerm: z.object({
                      labelSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      matchLabelKeys: z.array(z.string()).optional(),
                      mismatchLabelKeys: z.array(z.string()).optional(),
                      namespaceSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      namespaces: z.array(z.string()).optional(),
                      topologyKey: z.string(),
                    }),
                    weight: z.number(),
                  })).optional(),
                  requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    labelSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    matchLabelKeys: z.array(z.string()).optional(),
                    mismatchLabelKeys: z.array(z.string()).optional(),
                    namespaceSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    namespaces: z.array(z.string()).optional(),
                    topologyKey: z.string(),
                  })).optional(),
                }).optional(),
                podAntiAffinity: z.object({
                  preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    podAffinityTerm: z.object({
                      labelSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      matchLabelKeys: z.array(z.string()).optional(),
                      mismatchLabelKeys: z.array(z.string()).optional(),
                      namespaceSelector: z.object({
                        matchExpressions: z.array(z.object({
                          key: z.string(),
                          operator: z.string(),
                          values: z.array(z.string()).optional(),
                        })).optional(),
                        matchLabels: z.record(z.string()).optional(),
                      }).optional(),
                      namespaces: z.array(z.string()).optional(),
                      topologyKey: z.string(),
                    }),
                    weight: z.number(),
                  })).optional(),
                  requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
                    labelSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    matchLabelKeys: z.array(z.string()).optional(),
                    mismatchLabelKeys: z.array(z.string()).optional(),
                    namespaceSelector: z.object({
                      matchExpressions: z.array(z.object({
                        key: z.string(),
                        operator: z.string(),
                        values: z.array(z.string()).optional(),
                      })).optional(),
                      matchLabels: z.record(z.string()).optional(),
                    }).optional(),
                    namespaces: z.array(z.string()).optional(),
                    topologyKey: z.string(),
                  })).optional(),
                }).optional(),
              }).optional(),
              imagePullSecrets: z.array(z.object({
                name: z.string().default(""),
              })).optional(),
              nodeSelector: z.record(z.string()).optional(),
              priorityClassName: z.string().optional(),
              securityContext: z.object({
                fsGroup: z.number().optional(),
                fsGroupChangePolicy: z.string().optional(),
                runAsGroup: z.number().optional(),
                runAsNonRoot: z.boolean().optional(),
                runAsUser: z.number().optional(),
                seLinuxOptions: z.object({
                  level: z.string().optional(),
                  role: z.string().optional(),
                  type: z.string().optional(),
                  user: z.string().optional(),
                }).optional(),
                seccompProfile: z.object({
                  localhostProfile: z.string().optional(),
                  type: z.string(),
                }).optional(),
                supplementalGroups: z.array(z.number()).optional(),
                sysctls: z.array(z.object({
                  name: z.string(),
                  value: z.string(),
                })).optional(),
              }).optional(),
              serviceAccountName: z.string().optional(),
              tolerations: z.array(z.object({
                effect: z.string().optional(),
                key: z.string().optional(),
                operator: z.string().optional(),
                tolerationSeconds: z.number().optional(),
                value: z.string().optional(),
              })).optional(),
            }).optional(),
          }).optional(),
          serviceType: z.string().optional(),
        }).optional(),
      }).optional(),
      selector: z.object({
        dnsNames: z.array(z.string()).optional(),
        dnsZones: z.array(z.string()).optional(),
        matchLabels: z.record(z.string()).optional(),
      }).optional(),
    }),
    token: z.string(),
    type: z.enum(["HTTP-01","DNS-01"]),
    url: z.string(),
    wildcard: z.boolean().optional(),
  },
  status: {
    presented: z.boolean().optional(),
    processing: z.boolean().optional(),
    reason: z.string().optional(),
    state: z.enum(["valid","ready","pending","processing","invalid","expired","errored"]).optional(),
  },
});

export const order = /* @__PURE__ */ resource("acme.cert-manager.io/v1", "Order", {
  scope: "Namespaced",
  spec: {
    commonName: z.string().optional(),
    dnsNames: z.array(z.string()).optional(),
    duration: z.string().optional(),
    ipAddresses: z.array(z.string()).optional(),
    issuerRef: z.object({
      group: z.string().optional(),
      kind: z.string().optional(),
      name: z.string(),
    }),
    profile: z.string().optional(),
    request: z.string(),
  },
  status: {
    authorizations: z.array(z.object({
      challenges: z.array(z.object({
        token: z.string(),
        type: z.string(),
        url: z.string(),
      })).optional(),
      identifier: z.string().optional(),
      initialState: z.enum(["valid","ready","pending","processing","invalid","expired","errored"]).optional(),
      url: z.string(),
      wildcard: z.boolean().optional(),
    })).optional(),
    certificate: z.string().optional(),
    failureTime: z.string().optional(),
    finalizeURL: z.string().optional(),
    reason: z.string().optional(),
    state: z.enum(["valid","ready","pending","processing","invalid","expired","errored"]).optional(),
    url: z.string().optional(),
  },
});
