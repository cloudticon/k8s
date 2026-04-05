/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "https://github.com/cloudticon/k8s@master";

export const certificateRequest = /* @__PURE__ */ resource("cert-manager.io/v1", "CertificateRequest", {
  scope: "Namespaced",
  shortNames: ["cr","crs"],
  spec: {
    duration: z.string().optional(),
    extra: z.record(z.array(z.string())).optional(),
    groups: z.array(z.string()).optional(),
    isCA: z.boolean().optional(),
    issuerRef: z.object({
      group: z.string().optional(),
      kind: z.string().optional(),
      name: z.string(),
    }),
    request: z.string(),
    uid: z.string().optional(),
    usages: z.array(z.enum(["signing","digital signature","content commitment","key encipherment","key agreement","data encipherment","cert sign","crl sign","encipher only","decipher only","any","server auth","client auth","code signing","email protection","s/mime","ipsec end system","ipsec tunnel","ipsec user","timestamping","ocsp signing","microsoft sgc","netscape sgc"])).optional(),
    username: z.string().optional(),
  },
  status: {
    ca: z.string().optional(),
    certificate: z.string().optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().optional(),
      message: z.string().optional(),
      reason: z.string().optional(),
      status: z.enum(["True","False","Unknown"]),
      type: z.string(),
    })).optional(),
    failureTime: z.string().optional(),
  },
});

export const certificate = /* @__PURE__ */ resource("cert-manager.io/v1", "Certificate", {
  scope: "Namespaced",
  shortNames: ["cert","certs"],
  spec: {
    additionalOutputFormats: z.array(z.object({
      type: z.enum(["DER","CombinedPEM"]),
    })).optional(),
    commonName: z.string().optional(),
    dnsNames: z.array(z.string()).optional(),
    duration: z.string().optional(),
    emailAddresses: z.array(z.string()).optional(),
    encodeUsagesInRequest: z.boolean().optional(),
    ipAddresses: z.array(z.string()).optional(),
    isCA: z.boolean().optional(),
    issuerRef: z.object({
      group: z.string().optional(),
      kind: z.string().optional(),
      name: z.string(),
    }),
    keystores: z.object({
      jks: z.object({
        alias: z.string().optional(),
        create: z.boolean(),
        password: z.string().optional(),
        passwordSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }).optional(),
      }).optional(),
      pkcs12: z.object({
        create: z.boolean(),
        password: z.string().optional(),
        passwordSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }).optional(),
        profile: z.enum(["LegacyRC2","LegacyDES","Modern2023"]).optional(),
      }).optional(),
    }).optional(),
    literalSubject: z.string().optional(),
    nameConstraints: z.object({
      critical: z.boolean().optional(),
      excluded: z.object({
        dnsDomains: z.array(z.string()).optional(),
        emailAddresses: z.array(z.string()).optional(),
        ipRanges: z.array(z.string()).optional(),
        uriDomains: z.array(z.string()).optional(),
      }).optional(),
      permitted: z.object({
        dnsDomains: z.array(z.string()).optional(),
        emailAddresses: z.array(z.string()).optional(),
        ipRanges: z.array(z.string()).optional(),
        uriDomains: z.array(z.string()).optional(),
      }).optional(),
    }).optional(),
    otherNames: z.array(z.object({
      oid: z.string().optional(),
      utf8Value: z.string().optional(),
    })).optional(),
    privateKey: z.object({
      algorithm: z.enum(["RSA","ECDSA","Ed25519"]).optional(),
      encoding: z.enum(["PKCS1","PKCS8"]).optional(),
      rotationPolicy: z.enum(["Never","Always"]).optional(),
      size: z.number().optional(),
    }).optional(),
    renewBefore: z.string().optional(),
    renewBeforePercentage: z.number().optional(),
    revisionHistoryLimit: z.number().optional(),
    secretName: z.string(),
    secretTemplate: z.object({
      annotations: z.record(z.string()).optional(),
      labels: z.record(z.string()).optional(),
    }).optional(),
    signatureAlgorithm: z.enum(["SHA256WithRSA","SHA384WithRSA","SHA512WithRSA","ECDSAWithSHA256","ECDSAWithSHA384","ECDSAWithSHA512","PureEd25519"]).optional(),
    subject: z.object({
      countries: z.array(z.string()).optional(),
      localities: z.array(z.string()).optional(),
      organizationalUnits: z.array(z.string()).optional(),
      organizations: z.array(z.string()).optional(),
      postalCodes: z.array(z.string()).optional(),
      provinces: z.array(z.string()).optional(),
      serialNumber: z.string().optional(),
      streetAddresses: z.array(z.string()).optional(),
    }).optional(),
    uris: z.array(z.string()).optional(),
    usages: z.array(z.enum(["signing","digital signature","content commitment","key encipherment","key agreement","data encipherment","cert sign","crl sign","encipher only","decipher only","any","server auth","client auth","code signing","email protection","s/mime","ipsec end system","ipsec tunnel","ipsec user","timestamping","ocsp signing","microsoft sgc","netscape sgc"])).optional(),
  },
  status: {
    conditions: z.array(z.object({
      lastTransitionTime: z.string().optional(),
      message: z.string().optional(),
      observedGeneration: z.number().optional(),
      reason: z.string().optional(),
      status: z.enum(["True","False","Unknown"]),
      type: z.string(),
    })).optional(),
    failedIssuanceAttempts: z.number().optional(),
    lastFailureTime: z.string().optional(),
    nextPrivateKeySecretName: z.string().optional(),
    notAfter: z.string().optional(),
    notBefore: z.string().optional(),
    renewalTime: z.string().optional(),
    revision: z.number().optional(),
  },
});

export const clusterIssuer = /* @__PURE__ */ resource("cert-manager.io/v1", "ClusterIssuer", {
  scope: "Cluster",
  shortNames: ["ciss"],
  spec: {
    acme: z.object({
      caBundle: z.string().optional(),
      disableAccountKeyGeneration: z.boolean().optional(),
      email: z.string().optional(),
      enableDurationFeature: z.boolean().optional(),
      externalAccountBinding: z.object({
        keyAlgorithm: z.enum(["HS256","HS384","HS512"]).optional(),
        keyID: z.string(),
        keySecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }),
      }).optional(),
      preferredChain: z.string().optional(),
      privateKeySecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }),
      profile: z.string().optional(),
      server: z.string(),
      skipTLSVerify: z.boolean().optional(),
      solvers: z.array(z.object({
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
      })).optional(),
    }).optional(),
    ca: z.object({
      crlDistributionPoints: z.array(z.string()).optional(),
      issuingCertificateURLs: z.array(z.string()).optional(),
      ocspServers: z.array(z.string()).optional(),
      secretName: z.string(),
    }).optional(),
    selfSigned: z.object({
      crlDistributionPoints: z.array(z.string()).optional(),
    }).optional(),
    vault: z.object({
      auth: z.object({
        appRole: z.object({
          path: z.string(),
          roleId: z.string(),
          secretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
        }).optional(),
        clientCertificate: z.object({
          mountPath: z.string().optional(),
          name: z.string().optional(),
          secretName: z.string().optional(),
        }).optional(),
        kubernetes: z.object({
          mountPath: z.string().optional(),
          role: z.string(),
          secretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
          serviceAccountRef: z.object({
            audiences: z.array(z.string()).optional(),
            name: z.string(),
          }).optional(),
        }).optional(),
        tokenSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }).optional(),
      }),
      caBundle: z.string().optional(),
      caBundleSecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }).optional(),
      clientCertSecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }).optional(),
      clientKeySecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }).optional(),
      namespace: z.string().optional(),
      path: z.string(),
      server: z.string(),
      serverName: z.string().optional(),
    }).optional(),
    venafi: z.object({
      cloud: z.object({
        apiTokenSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }),
        url: z.string().optional(),
      }).optional(),
      tpp: z.object({
        caBundle: z.string().optional(),
        caBundleSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }).optional(),
        credentialsRef: z.object({
          name: z.string(),
        }),
        url: z.string(),
      }).optional(),
      zone: z.string(),
    }).optional(),
  },
  status: {
    acme: z.object({
      lastPrivateKeyHash: z.string().optional(),
      lastRegisteredEmail: z.string().optional(),
      uri: z.string().optional(),
    }).optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().optional(),
      message: z.string().optional(),
      observedGeneration: z.number().optional(),
      reason: z.string().optional(),
      status: z.enum(["True","False","Unknown"]),
      type: z.string(),
    })).optional(),
  },
});

export const issuer = /* @__PURE__ */ resource("cert-manager.io/v1", "Issuer", {
  scope: "Namespaced",
  shortNames: ["iss"],
  spec: {
    acme: z.object({
      caBundle: z.string().optional(),
      disableAccountKeyGeneration: z.boolean().optional(),
      email: z.string().optional(),
      enableDurationFeature: z.boolean().optional(),
      externalAccountBinding: z.object({
        keyAlgorithm: z.enum(["HS256","HS384","HS512"]).optional(),
        keyID: z.string(),
        keySecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }),
      }).optional(),
      preferredChain: z.string().optional(),
      privateKeySecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }),
      profile: z.string().optional(),
      server: z.string(),
      skipTLSVerify: z.boolean().optional(),
      solvers: z.array(z.object({
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
      })).optional(),
    }).optional(),
    ca: z.object({
      crlDistributionPoints: z.array(z.string()).optional(),
      issuingCertificateURLs: z.array(z.string()).optional(),
      ocspServers: z.array(z.string()).optional(),
      secretName: z.string(),
    }).optional(),
    selfSigned: z.object({
      crlDistributionPoints: z.array(z.string()).optional(),
    }).optional(),
    vault: z.object({
      auth: z.object({
        appRole: z.object({
          path: z.string(),
          roleId: z.string(),
          secretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }),
        }).optional(),
        clientCertificate: z.object({
          mountPath: z.string().optional(),
          name: z.string().optional(),
          secretName: z.string().optional(),
        }).optional(),
        kubernetes: z.object({
          mountPath: z.string().optional(),
          role: z.string(),
          secretRef: z.object({
            key: z.string().optional(),
            name: z.string(),
          }).optional(),
          serviceAccountRef: z.object({
            audiences: z.array(z.string()).optional(),
            name: z.string(),
          }).optional(),
        }).optional(),
        tokenSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }).optional(),
      }),
      caBundle: z.string().optional(),
      caBundleSecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }).optional(),
      clientCertSecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }).optional(),
      clientKeySecretRef: z.object({
        key: z.string().optional(),
        name: z.string(),
      }).optional(),
      namespace: z.string().optional(),
      path: z.string(),
      server: z.string(),
      serverName: z.string().optional(),
    }).optional(),
    venafi: z.object({
      cloud: z.object({
        apiTokenSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }),
        url: z.string().optional(),
      }).optional(),
      tpp: z.object({
        caBundle: z.string().optional(),
        caBundleSecretRef: z.object({
          key: z.string().optional(),
          name: z.string(),
        }).optional(),
        credentialsRef: z.object({
          name: z.string(),
        }),
        url: z.string(),
      }).optional(),
      zone: z.string(),
    }).optional(),
  },
  status: {
    acme: z.object({
      lastPrivateKeyHash: z.string().optional(),
      lastRegisteredEmail: z.string().optional(),
      uri: z.string().optional(),
    }).optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().optional(),
      message: z.string().optional(),
      observedGeneration: z.number().optional(),
      reason: z.string().optional(),
      status: z.enum(["True","False","Unknown"]),
      type: z.string(),
    })).optional(),
  },
});
