/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const configMap = resource("core/v1", "ConfigMap", {
  scope: "Namespaced",
  spec: {},
});

export const endpoints = resource("core/v1", "Endpoints", {
  scope: "Namespaced",
  spec: {},
});

export const limitRange = resource("core/v1", "LimitRange", {
  scope: "Namespaced",
  spec: {
    limits: z.array(
      z
        .object({
          default: z.record(z.string().default({})).optional(),
          defaultRequest: z.record(z.string().default({})).optional(),
          max: z.record(z.string().default({})).optional(),
          maxLimitRequestRatio: z.record(z.string().default({})).optional(),
          min: z.record(z.string().default({})).optional(),
          type: z.string().default(""),
        })
        .default({}),
    ),
  },
});

export const namespace = resource("core/v1", "Namespace", {
  scope: "Cluster",
  spec: {
    finalizers: z.array(z.string().default("")).optional(),
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
    phase: z.enum(["Active", "Terminating"]).optional(),
  },
});

export const node = resource("core/v1", "Node", {
  scope: "Cluster",
  spec: {
    configSource: z
      .object({
        configMap: z
          .object({
            kubeletConfigKey: z.string().default(""),
            name: z.string().default(""),
            namespace: z.string().default(""),
            resourceVersion: z.string().optional(),
            uid: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    externalID: z.string().optional(),
    podCIDR: z.string().optional(),
    podCIDRs: z.array(z.string().default("")).optional(),
    providerID: z.string().optional(),
    taints: z
      .array(
        z
          .object({
            effect: z
              .enum(["NoExecute", "NoSchedule", "PreferNoSchedule"])
              .default(""),
            key: z.string().default(""),
            timeAdded: z.string().optional(),
            value: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    unschedulable: z.boolean().optional(),
  },
  status: {
    addresses: z
      .array(
        z
          .object({
            address: z.string().default(""),
            type: z.string().default(""),
          })
          .default({}),
      )
      .optional(),
    allocatable: z.record(z.string().default({})).optional(),
    capacity: z.record(z.string().default({})).optional(),
    conditions: z
      .array(
        z
          .object({
            lastHeartbeatTime: z.string().default({}),
            lastTransitionTime: z.string().default({}),
            message: z.string().optional(),
            reason: z.string().optional(),
            status: z.string().default(""),
            type: z.string().default(""),
          })
          .default({}),
      )
      .optional(),
    config: z
      .object({
        active: z
          .object({
            configMap: z
              .object({
                kubeletConfigKey: z.string().default(""),
                name: z.string().default(""),
                namespace: z.string().default(""),
                resourceVersion: z.string().optional(),
                uid: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
        assigned: z
          .object({
            configMap: z
              .object({
                kubeletConfigKey: z.string().default(""),
                name: z.string().default(""),
                namespace: z.string().default(""),
                resourceVersion: z.string().optional(),
                uid: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
        error: z.string().optional(),
        lastKnownGood: z
          .object({
            configMap: z
              .object({
                kubeletConfigKey: z.string().default(""),
                name: z.string().default(""),
                namespace: z.string().default(""),
                resourceVersion: z.string().optional(),
                uid: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
    daemonEndpoints: z
      .object({
        kubeletEndpoint: z
          .object({
            Port: z.number().default(0),
          })
          .default({}),
      })
      .default({}),
    images: z
      .array(
        z
          .object({
            names: z.array(z.string().default("")).optional(),
            sizeBytes: z.number().optional(),
          })
          .default({}),
      )
      .optional(),
    nodeInfo: z
      .object({
        architecture: z.string().default(""),
        bootID: z.string().default(""),
        containerRuntimeVersion: z.string().default(""),
        kernelVersion: z.string().default(""),
        kubeProxyVersion: z.string().default(""),
        kubeletVersion: z.string().default(""),
        machineID: z.string().default(""),
        operatingSystem: z.string().default(""),
        osImage: z.string().default(""),
        systemUUID: z.string().default(""),
      })
      .default({}),
    phase: z.enum(["Pending", "Running", "Terminated"]).optional(),
    volumesAttached: z
      .array(
        z
          .object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          })
          .default({}),
      )
      .optional(),
    volumesInUse: z.array(z.string().default("")).optional(),
  },
});

export const persistentVolumeClaim = resource(
  "core/v1",
  "PersistentVolumeClaim",
  {
    scope: "Namespaced",
    spec: {
      accessModes: z.array(z.string().default("")).optional(),
      dataSource: z
        .object({
          apiGroup: z.string().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
        })
        .optional(),
      dataSourceRef: z
        .object({
          apiGroup: z.string().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          namespace: z.string().optional(),
        })
        .optional(),
      resources: z
        .object({
          claims: z
            .array(
              z
                .object({
                  name: z.string().default(""),
                })
                .default({}),
            )
            .optional(),
          limits: z.record(z.string().default({})).optional(),
          requests: z.record(z.string().default({})).optional(),
        })
        .default({}),
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
      storageClassName: z.string().optional(),
      volumeMode: z.string().optional(),
      volumeName: z.string().optional(),
    },
    status: {
      accessModes: z.array(z.string().default("")).optional(),
      allocatedResources: z.record(z.string().default({})).optional(),
      capacity: z.record(z.string().default({})).optional(),
      conditions: z
        .array(
          z
            .object({
              lastProbeTime: z.string().default({}),
              lastTransitionTime: z.string().default({}),
              message: z.string().optional(),
              reason: z.string().optional(),
              status: z.string().default(""),
              type: z.string().default(""),
            })
            .default({}),
        )
        .optional(),
      phase: z.enum(["Bound", "Lost", "Pending"]).optional(),
      resizeStatus: z.string().optional(),
    },
  },
);

export const persistentVolume = resource("core/v1", "PersistentVolume", {
  scope: "Cluster",
  spec: {
    accessModes: z.array(z.string().default("")).optional(),
    awsElasticBlockStore: z
      .object({
        fsType: z.string().optional(),
        partition: z.number().optional(),
        readOnly: z.boolean().optional(),
        volumeID: z.string().default(""),
      })
      .optional(),
    azureDisk: z
      .object({
        cachingMode: z.string().optional(),
        diskName: z.string().default(""),
        diskURI: z.string().default(""),
        fsType: z.string().optional(),
        kind: z.string().optional(),
        readOnly: z.boolean().optional(),
      })
      .optional(),
    azureFile: z
      .object({
        readOnly: z.boolean().optional(),
        secretName: z.string().default(""),
        secretNamespace: z.string().optional(),
        shareName: z.string().default(""),
      })
      .optional(),
    capacity: z.record(z.string().default({})).optional(),
    cephfs: z
      .object({
        monitors: z.array(z.string().default("")),
        path: z.string().optional(),
        readOnly: z.boolean().optional(),
        secretFile: z.string().optional(),
        secretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        user: z.string().optional(),
      })
      .optional(),
    cinder: z
      .object({
        fsType: z.string().optional(),
        readOnly: z.boolean().optional(),
        secretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        volumeID: z.string().default(""),
      })
      .optional(),
    claimRef: z
      .object({
        apiVersion: z.string().optional(),
        fieldPath: z.string().optional(),
        kind: z.string().optional(),
        name: z.string().optional(),
        namespace: z.string().optional(),
        resourceVersion: z.string().optional(),
        uid: z.string().optional(),
      })
      .optional(),
    csi: z
      .object({
        controllerExpandSecretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        controllerPublishSecretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        driver: z.string().default(""),
        fsType: z.string().optional(),
        nodeExpandSecretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        nodePublishSecretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        nodeStageSecretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        readOnly: z.boolean().optional(),
        volumeAttributes: z.record(z.string().default("")).optional(),
        volumeHandle: z.string().default(""),
      })
      .optional(),
    fc: z
      .object({
        fsType: z.string().optional(),
        lun: z.number().optional(),
        readOnly: z.boolean().optional(),
        targetWWNs: z.array(z.string().default("")).optional(),
        wwids: z.array(z.string().default("")).optional(),
      })
      .optional(),
    flexVolume: z
      .object({
        driver: z.string().default(""),
        fsType: z.string().optional(),
        options: z.record(z.string().default("")).optional(),
        readOnly: z.boolean().optional(),
        secretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    flocker: z
      .object({
        datasetName: z.string().optional(),
        datasetUUID: z.string().optional(),
      })
      .optional(),
    gcePersistentDisk: z
      .object({
        fsType: z.string().optional(),
        partition: z.number().optional(),
        pdName: z.string().default(""),
        readOnly: z.boolean().optional(),
      })
      .optional(),
    glusterfs: z
      .object({
        endpoints: z.string().default(""),
        endpointsNamespace: z.string().optional(),
        path: z.string().default(""),
        readOnly: z.boolean().optional(),
      })
      .optional(),
    hostPath: z
      .object({
        path: z.string().default(""),
        type: z.string().optional(),
      })
      .optional(),
    iscsi: z
      .object({
        chapAuthDiscovery: z.boolean().optional(),
        chapAuthSession: z.boolean().optional(),
        fsType: z.string().optional(),
        initiatorName: z.string().optional(),
        iqn: z.string().default(""),
        iscsiInterface: z.string().optional(),
        lun: z.number().default(0),
        portals: z.array(z.string().default("")).optional(),
        readOnly: z.boolean().optional(),
        secretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        targetPortal: z.string().default(""),
      })
      .optional(),
    local: z
      .object({
        fsType: z.string().optional(),
        path: z.string().default(""),
      })
      .optional(),
    mountOptions: z.array(z.string().default("")).optional(),
    nfs: z
      .object({
        path: z.string().default(""),
        readOnly: z.boolean().optional(),
        server: z.string().default(""),
      })
      .optional(),
    nodeAffinity: z
      .object({
        required: z
          .object({
            nodeSelectorTerms: z.array(
              z
                .object({
                  matchExpressions: z
                    .array(
                      z
                        .object({
                          key: z.string().default(""),
                          operator: z
                            .enum([
                              "DoesNotExist",
                              "Exists",
                              "Gt",
                              "In",
                              "Lt",
                              "NotIn",
                            ])
                            .default(""),
                          values: z.array(z.string().default("")).optional(),
                        })
                        .default({}),
                    )
                    .optional(),
                  matchFields: z
                    .array(
                      z
                        .object({
                          key: z.string().default(""),
                          operator: z
                            .enum([
                              "DoesNotExist",
                              "Exists",
                              "Gt",
                              "In",
                              "Lt",
                              "NotIn",
                            ])
                            .default(""),
                          values: z.array(z.string().default("")).optional(),
                        })
                        .default({}),
                    )
                    .optional(),
                })
                .default({}),
            ),
          })
          .optional(),
      })
      .optional(),
    persistentVolumeReclaimPolicy: z
      .enum(["Delete", "Recycle", "Retain"])
      .optional(),
    photonPersistentDisk: z
      .object({
        fsType: z.string().optional(),
        pdID: z.string().default(""),
      })
      .optional(),
    portworxVolume: z
      .object({
        fsType: z.string().optional(),
        readOnly: z.boolean().optional(),
        volumeID: z.string().default(""),
      })
      .optional(),
    quobyte: z
      .object({
        group: z.string().optional(),
        readOnly: z.boolean().optional(),
        registry: z.string().default(""),
        tenant: z.string().optional(),
        user: z.string().optional(),
        volume: z.string().default(""),
      })
      .optional(),
    rbd: z
      .object({
        fsType: z.string().optional(),
        image: z.string().default(""),
        keyring: z.string().optional(),
        monitors: z.array(z.string().default("")),
        pool: z.string().optional(),
        readOnly: z.boolean().optional(),
        secretRef: z
          .object({
            name: z.string().optional(),
            namespace: z.string().optional(),
          })
          .optional(),
        user: z.string().optional(),
      })
      .optional(),
    scaleIO: z
      .object({
        fsType: z.string().optional(),
        gateway: z.string().default(""),
        protectionDomain: z.string().optional(),
        readOnly: z.boolean().optional(),
        secretRef: z.object({
          name: z.string().optional(),
          namespace: z.string().optional(),
        }),
        sslEnabled: z.boolean().optional(),
        storageMode: z.string().optional(),
        storagePool: z.string().optional(),
        system: z.string().default(""),
        volumeName: z.string().optional(),
      })
      .optional(),
    storageClassName: z.string().optional(),
    storageos: z
      .object({
        fsType: z.string().optional(),
        readOnly: z.boolean().optional(),
        secretRef: z
          .object({
            apiVersion: z.string().optional(),
            fieldPath: z.string().optional(),
            kind: z.string().optional(),
            name: z.string().optional(),
            namespace: z.string().optional(),
            resourceVersion: z.string().optional(),
            uid: z.string().optional(),
          })
          .optional(),
        volumeName: z.string().optional(),
        volumeNamespace: z.string().optional(),
      })
      .optional(),
    volumeMode: z.string().optional(),
    vsphereVolume: z
      .object({
        fsType: z.string().optional(),
        storagePolicyID: z.string().optional(),
        storagePolicyName: z.string().optional(),
        volumePath: z.string().default(""),
      })
      .optional(),
  },
  status: {
    message: z.string().optional(),
    phase: z
      .enum(["Available", "Bound", "Failed", "Pending", "Released"])
      .optional(),
    reason: z.string().optional(),
  },
});

export const pod = resource("core/v1", "Pod", {
  scope: "Namespaced",
  spec: {
    activeDeadlineSeconds: z.number().optional(),
    affinity: z
      .object({
        nodeAffinity: z
          .object({
            preferredDuringSchedulingIgnoredDuringExecution: z
              .array(
                z
                  .object({
                    preference: z
                      .object({
                        matchExpressions: z
                          .array(
                            z
                              .object({
                                key: z.string().default(""),
                                operator: z
                                  .enum([
                                    "DoesNotExist",
                                    "Exists",
                                    "Gt",
                                    "In",
                                    "Lt",
                                    "NotIn",
                                  ])
                                  .default(""),
                                values: z
                                  .array(z.string().default(""))
                                  .optional(),
                              })
                              .default({}),
                          )
                          .optional(),
                        matchFields: z
                          .array(
                            z
                              .object({
                                key: z.string().default(""),
                                operator: z
                                  .enum([
                                    "DoesNotExist",
                                    "Exists",
                                    "Gt",
                                    "In",
                                    "Lt",
                                    "NotIn",
                                  ])
                                  .default(""),
                                values: z
                                  .array(z.string().default(""))
                                  .optional(),
                              })
                              .default({}),
                          )
                          .optional(),
                      })
                      .default({}),
                    weight: z.number().default(0),
                  })
                  .default({}),
              )
              .optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z
              .object({
                nodeSelectorTerms: z.array(
                  z
                    .object({
                      matchExpressions: z
                        .array(
                          z
                            .object({
                              key: z.string().default(""),
                              operator: z
                                .enum([
                                  "DoesNotExist",
                                  "Exists",
                                  "Gt",
                                  "In",
                                  "Lt",
                                  "NotIn",
                                ])
                                .default(""),
                              values: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      matchFields: z
                        .array(
                          z
                            .object({
                              key: z.string().default(""),
                              operator: z
                                .enum([
                                  "DoesNotExist",
                                  "Exists",
                                  "Gt",
                                  "In",
                                  "Lt",
                                  "NotIn",
                                ])
                                .default(""),
                              values: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                    })
                    .default({}),
                ),
              })
              .optional(),
          })
          .optional(),
        podAffinity: z
          .object({
            preferredDuringSchedulingIgnoredDuringExecution: z
              .array(
                z
                  .object({
                    podAffinityTerm: z
                      .object({
                        labelSelector: z
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
                        namespaces: z.array(z.string().default("")).optional(),
                        topologyKey: z.string().default(""),
                      })
                      .default({}),
                    weight: z.number().default(0),
                  })
                  .default({}),
              )
              .optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z
              .array(
                z
                  .object({
                    labelSelector: z
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
                    namespaces: z.array(z.string().default("")).optional(),
                    topologyKey: z.string().default(""),
                  })
                  .default({}),
              )
              .optional(),
          })
          .optional(),
        podAntiAffinity: z
          .object({
            preferredDuringSchedulingIgnoredDuringExecution: z
              .array(
                z
                  .object({
                    podAffinityTerm: z
                      .object({
                        labelSelector: z
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
                        namespaces: z.array(z.string().default("")).optional(),
                        topologyKey: z.string().default(""),
                      })
                      .default({}),
                    weight: z.number().default(0),
                  })
                  .default({}),
              )
              .optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z
              .array(
                z
                  .object({
                    labelSelector: z
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
                    namespaces: z.array(z.string().default("")).optional(),
                    topologyKey: z.string().default(""),
                  })
                  .default({}),
              )
              .optional(),
          })
          .optional(),
      })
      .optional(),
    automountServiceAccountToken: z.boolean().optional(),
    containers: z.array(
      z
        .object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z
            .array(
              z
                .object({
                  name: z.string().default(""),
                  value: z.string().optional(),
                  valueFrom: z
                    .object({
                      configMapKeyRef: z
                        .object({
                          key: z.string().default(""),
                          name: z.string().optional(),
                          optional: z.boolean().optional(),
                        })
                        .optional(),
                      fieldRef: z
                        .object({
                          apiVersion: z.string().optional(),
                          fieldPath: z.string().default(""),
                        })
                        .optional(),
                      resourceFieldRef: z
                        .object({
                          containerName: z.string().optional(),
                          divisor: z.string().default({}),
                          resource: z.string().default(""),
                        })
                        .optional(),
                      secretKeyRef: z
                        .object({
                          key: z.string().default(""),
                          name: z.string().optional(),
                          optional: z.boolean().optional(),
                        })
                        .optional(),
                    })
                    .optional(),
                })
                .default({}),
            )
            .optional(),
          envFrom: z
            .array(
              z
                .object({
                  configMapRef: z
                    .object({
                      name: z.string().optional(),
                      optional: z.boolean().optional(),
                    })
                    .optional(),
                  prefix: z.string().optional(),
                  secretRef: z
                    .object({
                      name: z.string().optional(),
                      optional: z.boolean().optional(),
                    })
                    .optional(),
                })
                .default({}),
            )
            .optional(),
          image: z.string().optional(),
          imagePullPolicy: z
            .enum(["Always", "IfNotPresent", "Never"])
            .optional(),
          lifecycle: z
            .object({
              postStart: z
                .object({
                  exec: z
                    .object({
                      command: z.array(z.string().default("")).optional(),
                    })
                    .optional(),
                  httpGet: z
                    .object({
                      host: z.string().optional(),
                      httpHeaders: z
                        .array(
                          z
                            .object({
                              name: z.string().default(""),
                              value: z.string().default(""),
                            })
                            .default({}),
                        )
                        .optional(),
                      path: z.string().optional(),
                      port: z.string().default({}),
                      scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                    })
                    .optional(),
                  tcpSocket: z
                    .object({
                      host: z.string().optional(),
                      port: z.string().default({}),
                    })
                    .optional(),
                })
                .optional(),
              preStop: z
                .object({
                  exec: z
                    .object({
                      command: z.array(z.string().default("")).optional(),
                    })
                    .optional(),
                  httpGet: z
                    .object({
                      host: z.string().optional(),
                      httpHeaders: z
                        .array(
                          z
                            .object({
                              name: z.string().default(""),
                              value: z.string().default(""),
                            })
                            .default({}),
                        )
                        .optional(),
                      path: z.string().optional(),
                      port: z.string().default({}),
                      scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                    })
                    .optional(),
                  tcpSocket: z
                    .object({
                      host: z.string().optional(),
                      port: z.string().default({}),
                    })
                    .optional(),
                })
                .optional(),
            })
            .optional(),
          livenessProbe: z
            .object({
              exec: z
                .object({
                  command: z.array(z.string().default("")).optional(),
                })
                .optional(),
              failureThreshold: z.number().optional(),
              grpc: z
                .object({
                  port: z.number().default(0),
                  service: z.string().default(""),
                })
                .optional(),
              httpGet: z
                .object({
                  host: z.string().optional(),
                  httpHeaders: z
                    .array(
                      z
                        .object({
                          name: z.string().default(""),
                          value: z.string().default(""),
                        })
                        .default({}),
                    )
                    .optional(),
                  path: z.string().optional(),
                  port: z.string().default({}),
                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                })
                .optional(),
              initialDelaySeconds: z.number().optional(),
              periodSeconds: z.number().optional(),
              successThreshold: z.number().optional(),
              tcpSocket: z
                .object({
                  host: z.string().optional(),
                  port: z.string().default({}),
                })
                .optional(),
              terminationGracePeriodSeconds: z.number().optional(),
              timeoutSeconds: z.number().optional(),
            })
            .optional(),
          name: z.string().default(""),
          ports: z
            .array(
              z
                .object({
                  containerPort: z.number().default(0),
                  hostIP: z.string().optional(),
                  hostPort: z.number().optional(),
                  name: z.string().optional(),
                  protocol: z.enum(["SCTP", "TCP", "UDP"]).default("TCP"),
                })
                .default({}),
            )
            .optional(),
          readinessProbe: z
            .object({
              exec: z
                .object({
                  command: z.array(z.string().default("")).optional(),
                })
                .optional(),
              failureThreshold: z.number().optional(),
              grpc: z
                .object({
                  port: z.number().default(0),
                  service: z.string().default(""),
                })
                .optional(),
              httpGet: z
                .object({
                  host: z.string().optional(),
                  httpHeaders: z
                    .array(
                      z
                        .object({
                          name: z.string().default(""),
                          value: z.string().default(""),
                        })
                        .default({}),
                    )
                    .optional(),
                  path: z.string().optional(),
                  port: z.string().default({}),
                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                })
                .optional(),
              initialDelaySeconds: z.number().optional(),
              periodSeconds: z.number().optional(),
              successThreshold: z.number().optional(),
              tcpSocket: z
                .object({
                  host: z.string().optional(),
                  port: z.string().default({}),
                })
                .optional(),
              terminationGracePeriodSeconds: z.number().optional(),
              timeoutSeconds: z.number().optional(),
            })
            .optional(),
          resources: z
            .object({
              claims: z
                .array(
                  z
                    .object({
                      name: z.string().default(""),
                    })
                    .default({}),
                )
                .optional(),
              limits: z.record(z.string().default({})).optional(),
              requests: z.record(z.string().default({})).optional(),
            })
            .default({}),
          securityContext: z
            .object({
              allowPrivilegeEscalation: z.boolean().optional(),
              capabilities: z
                .object({
                  add: z.array(z.string().default("")).optional(),
                  drop: z.array(z.string().default("")).optional(),
                })
                .optional(),
              privileged: z.boolean().optional(),
              procMount: z.string().optional(),
              readOnlyRootFilesystem: z.boolean().optional(),
              runAsGroup: z.number().optional(),
              runAsNonRoot: z.boolean().optional(),
              runAsUser: z.number().optional(),
              seLinuxOptions: z
                .object({
                  level: z.string().optional(),
                  role: z.string().optional(),
                  type: z.string().optional(),
                  user: z.string().optional(),
                })
                .optional(),
              seccompProfile: z
                .object({
                  localhostProfile: z.string().optional(),
                  type: z
                    .enum(["Localhost", "RuntimeDefault", "Unconfined"])
                    .default(""),
                })
                .optional(),
              windowsOptions: z
                .object({
                  gmsaCredentialSpec: z.string().optional(),
                  gmsaCredentialSpecName: z.string().optional(),
                  hostProcess: z.boolean().optional(),
                  runAsUserName: z.string().optional(),
                })
                .optional(),
            })
            .optional(),
          startupProbe: z
            .object({
              exec: z
                .object({
                  command: z.array(z.string().default("")).optional(),
                })
                .optional(),
              failureThreshold: z.number().optional(),
              grpc: z
                .object({
                  port: z.number().default(0),
                  service: z.string().default(""),
                })
                .optional(),
              httpGet: z
                .object({
                  host: z.string().optional(),
                  httpHeaders: z
                    .array(
                      z
                        .object({
                          name: z.string().default(""),
                          value: z.string().default(""),
                        })
                        .default({}),
                    )
                    .optional(),
                  path: z.string().optional(),
                  port: z.string().default({}),
                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                })
                .optional(),
              initialDelaySeconds: z.number().optional(),
              periodSeconds: z.number().optional(),
              successThreshold: z.number().optional(),
              tcpSocket: z
                .object({
                  host: z.string().optional(),
                  port: z.string().default({}),
                })
                .optional(),
              terminationGracePeriodSeconds: z.number().optional(),
              timeoutSeconds: z.number().optional(),
            })
            .optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z
            .enum(["FallbackToLogsOnError", "File"])
            .optional(),
          tty: z.boolean().optional(),
          volumeDevices: z
            .array(
              z
                .object({
                  devicePath: z.string().default(""),
                  name: z.string().default(""),
                })
                .default({}),
            )
            .optional(),
          volumeMounts: z
            .array(
              z
                .object({
                  mountPath: z.string().default(""),
                  mountPropagation: z.string().optional(),
                  name: z.string().default(""),
                  readOnly: z.boolean().optional(),
                  subPath: z.string().optional(),
                  subPathExpr: z.string().optional(),
                })
                .default({}),
            )
            .optional(),
          workingDir: z.string().optional(),
        })
        .default({}),
    ),
    dnsConfig: z
      .object({
        nameservers: z.array(z.string().default("")).optional(),
        options: z
          .array(
            z
              .object({
                name: z.string().optional(),
                value: z.string().optional(),
              })
              .default({}),
          )
          .optional(),
        searches: z.array(z.string().default("")).optional(),
      })
      .optional(),
    dnsPolicy: z
      .enum(["ClusterFirst", "ClusterFirstWithHostNet", "Default", "None"])
      .optional(),
    enableServiceLinks: z.boolean().optional(),
    ephemeralContainers: z
      .array(
        z
          .object({
            args: z.array(z.string().default("")).optional(),
            command: z.array(z.string().default("")).optional(),
            env: z
              .array(
                z
                  .object({
                    name: z.string().default(""),
                    value: z.string().optional(),
                    valueFrom: z
                      .object({
                        configMapKeyRef: z
                          .object({
                            key: z.string().default(""),
                            name: z.string().optional(),
                            optional: z.boolean().optional(),
                          })
                          .optional(),
                        fieldRef: z
                          .object({
                            apiVersion: z.string().optional(),
                            fieldPath: z.string().default(""),
                          })
                          .optional(),
                        resourceFieldRef: z
                          .object({
                            containerName: z.string().optional(),
                            divisor: z.string().default({}),
                            resource: z.string().default(""),
                          })
                          .optional(),
                        secretKeyRef: z
                          .object({
                            key: z.string().default(""),
                            name: z.string().optional(),
                            optional: z.boolean().optional(),
                          })
                          .optional(),
                      })
                      .optional(),
                  })
                  .default({}),
              )
              .optional(),
            envFrom: z
              .array(
                z
                  .object({
                    configMapRef: z
                      .object({
                        name: z.string().optional(),
                        optional: z.boolean().optional(),
                      })
                      .optional(),
                    prefix: z.string().optional(),
                    secretRef: z
                      .object({
                        name: z.string().optional(),
                        optional: z.boolean().optional(),
                      })
                      .optional(),
                  })
                  .default({}),
              )
              .optional(),
            image: z.string().optional(),
            imagePullPolicy: z
              .enum(["Always", "IfNotPresent", "Never"])
              .optional(),
            lifecycle: z
              .object({
                postStart: z
                  .object({
                    exec: z
                      .object({
                        command: z.array(z.string().default("")).optional(),
                      })
                      .optional(),
                    httpGet: z
                      .object({
                        host: z.string().optional(),
                        httpHeaders: z
                          .array(
                            z
                              .object({
                                name: z.string().default(""),
                                value: z.string().default(""),
                              })
                              .default({}),
                          )
                          .optional(),
                        path: z.string().optional(),
                        port: z.string().default({}),
                        scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                      })
                      .optional(),
                    tcpSocket: z
                      .object({
                        host: z.string().optional(),
                        port: z.string().default({}),
                      })
                      .optional(),
                  })
                  .optional(),
                preStop: z
                  .object({
                    exec: z
                      .object({
                        command: z.array(z.string().default("")).optional(),
                      })
                      .optional(),
                    httpGet: z
                      .object({
                        host: z.string().optional(),
                        httpHeaders: z
                          .array(
                            z
                              .object({
                                name: z.string().default(""),
                                value: z.string().default(""),
                              })
                              .default({}),
                          )
                          .optional(),
                        path: z.string().optional(),
                        port: z.string().default({}),
                        scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                      })
                      .optional(),
                    tcpSocket: z
                      .object({
                        host: z.string().optional(),
                        port: z.string().default({}),
                      })
                      .optional(),
                  })
                  .optional(),
              })
              .optional(),
            livenessProbe: z
              .object({
                exec: z
                  .object({
                    command: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                failureThreshold: z.number().optional(),
                grpc: z
                  .object({
                    port: z.number().default(0),
                    service: z.string().default(""),
                  })
                  .optional(),
                httpGet: z
                  .object({
                    host: z.string().optional(),
                    httpHeaders: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    path: z.string().optional(),
                    port: z.string().default({}),
                    scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                  })
                  .optional(),
                initialDelaySeconds: z.number().optional(),
                periodSeconds: z.number().optional(),
                successThreshold: z.number().optional(),
                tcpSocket: z
                  .object({
                    host: z.string().optional(),
                    port: z.string().default({}),
                  })
                  .optional(),
                terminationGracePeriodSeconds: z.number().optional(),
                timeoutSeconds: z.number().optional(),
              })
              .optional(),
            name: z.string().default(""),
            ports: z
              .array(
                z
                  .object({
                    containerPort: z.number().default(0),
                    hostIP: z.string().optional(),
                    hostPort: z.number().optional(),
                    name: z.string().optional(),
                    protocol: z.enum(["SCTP", "TCP", "UDP"]).default("TCP"),
                  })
                  .default({}),
              )
              .optional(),
            readinessProbe: z
              .object({
                exec: z
                  .object({
                    command: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                failureThreshold: z.number().optional(),
                grpc: z
                  .object({
                    port: z.number().default(0),
                    service: z.string().default(""),
                  })
                  .optional(),
                httpGet: z
                  .object({
                    host: z.string().optional(),
                    httpHeaders: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    path: z.string().optional(),
                    port: z.string().default({}),
                    scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                  })
                  .optional(),
                initialDelaySeconds: z.number().optional(),
                periodSeconds: z.number().optional(),
                successThreshold: z.number().optional(),
                tcpSocket: z
                  .object({
                    host: z.string().optional(),
                    port: z.string().default({}),
                  })
                  .optional(),
                terminationGracePeriodSeconds: z.number().optional(),
                timeoutSeconds: z.number().optional(),
              })
              .optional(),
            resources: z
              .object({
                claims: z
                  .array(
                    z
                      .object({
                        name: z.string().default(""),
                      })
                      .default({}),
                  )
                  .optional(),
                limits: z.record(z.string().default({})).optional(),
                requests: z.record(z.string().default({})).optional(),
              })
              .default({}),
            securityContext: z
              .object({
                allowPrivilegeEscalation: z.boolean().optional(),
                capabilities: z
                  .object({
                    add: z.array(z.string().default("")).optional(),
                    drop: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                privileged: z.boolean().optional(),
                procMount: z.string().optional(),
                readOnlyRootFilesystem: z.boolean().optional(),
                runAsGroup: z.number().optional(),
                runAsNonRoot: z.boolean().optional(),
                runAsUser: z.number().optional(),
                seLinuxOptions: z
                  .object({
                    level: z.string().optional(),
                    role: z.string().optional(),
                    type: z.string().optional(),
                    user: z.string().optional(),
                  })
                  .optional(),
                seccompProfile: z
                  .object({
                    localhostProfile: z.string().optional(),
                    type: z
                      .enum(["Localhost", "RuntimeDefault", "Unconfined"])
                      .default(""),
                  })
                  .optional(),
                windowsOptions: z
                  .object({
                    gmsaCredentialSpec: z.string().optional(),
                    gmsaCredentialSpecName: z.string().optional(),
                    hostProcess: z.boolean().optional(),
                    runAsUserName: z.string().optional(),
                  })
                  .optional(),
              })
              .optional(),
            startupProbe: z
              .object({
                exec: z
                  .object({
                    command: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                failureThreshold: z.number().optional(),
                grpc: z
                  .object({
                    port: z.number().default(0),
                    service: z.string().default(""),
                  })
                  .optional(),
                httpGet: z
                  .object({
                    host: z.string().optional(),
                    httpHeaders: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    path: z.string().optional(),
                    port: z.string().default({}),
                    scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                  })
                  .optional(),
                initialDelaySeconds: z.number().optional(),
                periodSeconds: z.number().optional(),
                successThreshold: z.number().optional(),
                tcpSocket: z
                  .object({
                    host: z.string().optional(),
                    port: z.string().default({}),
                  })
                  .optional(),
                terminationGracePeriodSeconds: z.number().optional(),
                timeoutSeconds: z.number().optional(),
              })
              .optional(),
            stdin: z.boolean().optional(),
            stdinOnce: z.boolean().optional(),
            targetContainerName: z.string().optional(),
            terminationMessagePath: z.string().optional(),
            terminationMessagePolicy: z
              .enum(["FallbackToLogsOnError", "File"])
              .optional(),
            tty: z.boolean().optional(),
            volumeDevices: z
              .array(
                z
                  .object({
                    devicePath: z.string().default(""),
                    name: z.string().default(""),
                  })
                  .default({}),
              )
              .optional(),
            volumeMounts: z
              .array(
                z
                  .object({
                    mountPath: z.string().default(""),
                    mountPropagation: z.string().optional(),
                    name: z.string().default(""),
                    readOnly: z.boolean().optional(),
                    subPath: z.string().optional(),
                    subPathExpr: z.string().optional(),
                  })
                  .default({}),
              )
              .optional(),
            workingDir: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    hostAliases: z
      .array(
        z
          .object({
            hostnames: z.array(z.string().default("")).optional(),
            ip: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    hostIPC: z.boolean().optional(),
    hostNetwork: z.boolean().optional(),
    hostPID: z.boolean().optional(),
    hostUsers: z.boolean().optional(),
    hostname: z.string().optional(),
    imagePullSecrets: z
      .array(
        z
          .object({
            name: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    initContainers: z
      .array(
        z
          .object({
            args: z.array(z.string().default("")).optional(),
            command: z.array(z.string().default("")).optional(),
            env: z
              .array(
                z
                  .object({
                    name: z.string().default(""),
                    value: z.string().optional(),
                    valueFrom: z
                      .object({
                        configMapKeyRef: z
                          .object({
                            key: z.string().default(""),
                            name: z.string().optional(),
                            optional: z.boolean().optional(),
                          })
                          .optional(),
                        fieldRef: z
                          .object({
                            apiVersion: z.string().optional(),
                            fieldPath: z.string().default(""),
                          })
                          .optional(),
                        resourceFieldRef: z
                          .object({
                            containerName: z.string().optional(),
                            divisor: z.string().default({}),
                            resource: z.string().default(""),
                          })
                          .optional(),
                        secretKeyRef: z
                          .object({
                            key: z.string().default(""),
                            name: z.string().optional(),
                            optional: z.boolean().optional(),
                          })
                          .optional(),
                      })
                      .optional(),
                  })
                  .default({}),
              )
              .optional(),
            envFrom: z
              .array(
                z
                  .object({
                    configMapRef: z
                      .object({
                        name: z.string().optional(),
                        optional: z.boolean().optional(),
                      })
                      .optional(),
                    prefix: z.string().optional(),
                    secretRef: z
                      .object({
                        name: z.string().optional(),
                        optional: z.boolean().optional(),
                      })
                      .optional(),
                  })
                  .default({}),
              )
              .optional(),
            image: z.string().optional(),
            imagePullPolicy: z
              .enum(["Always", "IfNotPresent", "Never"])
              .optional(),
            lifecycle: z
              .object({
                postStart: z
                  .object({
                    exec: z
                      .object({
                        command: z.array(z.string().default("")).optional(),
                      })
                      .optional(),
                    httpGet: z
                      .object({
                        host: z.string().optional(),
                        httpHeaders: z
                          .array(
                            z
                              .object({
                                name: z.string().default(""),
                                value: z.string().default(""),
                              })
                              .default({}),
                          )
                          .optional(),
                        path: z.string().optional(),
                        port: z.string().default({}),
                        scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                      })
                      .optional(),
                    tcpSocket: z
                      .object({
                        host: z.string().optional(),
                        port: z.string().default({}),
                      })
                      .optional(),
                  })
                  .optional(),
                preStop: z
                  .object({
                    exec: z
                      .object({
                        command: z.array(z.string().default("")).optional(),
                      })
                      .optional(),
                    httpGet: z
                      .object({
                        host: z.string().optional(),
                        httpHeaders: z
                          .array(
                            z
                              .object({
                                name: z.string().default(""),
                                value: z.string().default(""),
                              })
                              .default({}),
                          )
                          .optional(),
                        path: z.string().optional(),
                        port: z.string().default({}),
                        scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                      })
                      .optional(),
                    tcpSocket: z
                      .object({
                        host: z.string().optional(),
                        port: z.string().default({}),
                      })
                      .optional(),
                  })
                  .optional(),
              })
              .optional(),
            livenessProbe: z
              .object({
                exec: z
                  .object({
                    command: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                failureThreshold: z.number().optional(),
                grpc: z
                  .object({
                    port: z.number().default(0),
                    service: z.string().default(""),
                  })
                  .optional(),
                httpGet: z
                  .object({
                    host: z.string().optional(),
                    httpHeaders: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    path: z.string().optional(),
                    port: z.string().default({}),
                    scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                  })
                  .optional(),
                initialDelaySeconds: z.number().optional(),
                periodSeconds: z.number().optional(),
                successThreshold: z.number().optional(),
                tcpSocket: z
                  .object({
                    host: z.string().optional(),
                    port: z.string().default({}),
                  })
                  .optional(),
                terminationGracePeriodSeconds: z.number().optional(),
                timeoutSeconds: z.number().optional(),
              })
              .optional(),
            name: z.string().default(""),
            ports: z
              .array(
                z
                  .object({
                    containerPort: z.number().default(0),
                    hostIP: z.string().optional(),
                    hostPort: z.number().optional(),
                    name: z.string().optional(),
                    protocol: z.enum(["SCTP", "TCP", "UDP"]).default("TCP"),
                  })
                  .default({}),
              )
              .optional(),
            readinessProbe: z
              .object({
                exec: z
                  .object({
                    command: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                failureThreshold: z.number().optional(),
                grpc: z
                  .object({
                    port: z.number().default(0),
                    service: z.string().default(""),
                  })
                  .optional(),
                httpGet: z
                  .object({
                    host: z.string().optional(),
                    httpHeaders: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    path: z.string().optional(),
                    port: z.string().default({}),
                    scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                  })
                  .optional(),
                initialDelaySeconds: z.number().optional(),
                periodSeconds: z.number().optional(),
                successThreshold: z.number().optional(),
                tcpSocket: z
                  .object({
                    host: z.string().optional(),
                    port: z.string().default({}),
                  })
                  .optional(),
                terminationGracePeriodSeconds: z.number().optional(),
                timeoutSeconds: z.number().optional(),
              })
              .optional(),
            resources: z
              .object({
                claims: z
                  .array(
                    z
                      .object({
                        name: z.string().default(""),
                      })
                      .default({}),
                  )
                  .optional(),
                limits: z.record(z.string().default({})).optional(),
                requests: z.record(z.string().default({})).optional(),
              })
              .default({}),
            securityContext: z
              .object({
                allowPrivilegeEscalation: z.boolean().optional(),
                capabilities: z
                  .object({
                    add: z.array(z.string().default("")).optional(),
                    drop: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                privileged: z.boolean().optional(),
                procMount: z.string().optional(),
                readOnlyRootFilesystem: z.boolean().optional(),
                runAsGroup: z.number().optional(),
                runAsNonRoot: z.boolean().optional(),
                runAsUser: z.number().optional(),
                seLinuxOptions: z
                  .object({
                    level: z.string().optional(),
                    role: z.string().optional(),
                    type: z.string().optional(),
                    user: z.string().optional(),
                  })
                  .optional(),
                seccompProfile: z
                  .object({
                    localhostProfile: z.string().optional(),
                    type: z
                      .enum(["Localhost", "RuntimeDefault", "Unconfined"])
                      .default(""),
                  })
                  .optional(),
                windowsOptions: z
                  .object({
                    gmsaCredentialSpec: z.string().optional(),
                    gmsaCredentialSpecName: z.string().optional(),
                    hostProcess: z.boolean().optional(),
                    runAsUserName: z.string().optional(),
                  })
                  .optional(),
              })
              .optional(),
            startupProbe: z
              .object({
                exec: z
                  .object({
                    command: z.array(z.string().default("")).optional(),
                  })
                  .optional(),
                failureThreshold: z.number().optional(),
                grpc: z
                  .object({
                    port: z.number().default(0),
                    service: z.string().default(""),
                  })
                  .optional(),
                httpGet: z
                  .object({
                    host: z.string().optional(),
                    httpHeaders: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    path: z.string().optional(),
                    port: z.string().default({}),
                    scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                  })
                  .optional(),
                initialDelaySeconds: z.number().optional(),
                periodSeconds: z.number().optional(),
                successThreshold: z.number().optional(),
                tcpSocket: z
                  .object({
                    host: z.string().optional(),
                    port: z.string().default({}),
                  })
                  .optional(),
                terminationGracePeriodSeconds: z.number().optional(),
                timeoutSeconds: z.number().optional(),
              })
              .optional(),
            stdin: z.boolean().optional(),
            stdinOnce: z.boolean().optional(),
            terminationMessagePath: z.string().optional(),
            terminationMessagePolicy: z
              .enum(["FallbackToLogsOnError", "File"])
              .optional(),
            tty: z.boolean().optional(),
            volumeDevices: z
              .array(
                z
                  .object({
                    devicePath: z.string().default(""),
                    name: z.string().default(""),
                  })
                  .default({}),
              )
              .optional(),
            volumeMounts: z
              .array(
                z
                  .object({
                    mountPath: z.string().default(""),
                    mountPropagation: z.string().optional(),
                    name: z.string().default(""),
                    readOnly: z.boolean().optional(),
                    subPath: z.string().optional(),
                    subPathExpr: z.string().optional(),
                  })
                  .default({}),
              )
              .optional(),
            workingDir: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    nodeName: z.string().optional(),
    nodeSelector: z.record(z.string().default("")).optional(),
    os: z
      .object({
        name: z.string().default(""),
      })
      .optional(),
    overhead: z.record(z.string().default({})).optional(),
    preemptionPolicy: z.string().optional(),
    priority: z.number().optional(),
    priorityClassName: z.string().optional(),
    readinessGates: z
      .array(
        z
          .object({
            conditionType: z.string().default(""),
          })
          .default({}),
      )
      .optional(),
    resourceClaims: z
      .array(
        z
          .object({
            name: z.string().default(""),
            source: z
              .object({
                resourceClaimName: z.string().optional(),
                resourceClaimTemplateName: z.string().optional(),
              })
              .default({}),
          })
          .default({}),
      )
      .optional(),
    restartPolicy: z.enum(["Always", "Never", "OnFailure"]).optional(),
    runtimeClassName: z.string().optional(),
    schedulerName: z.string().optional(),
    schedulingGates: z
      .array(
        z
          .object({
            name: z.string().default(""),
          })
          .default({}),
      )
      .optional(),
    securityContext: z
      .object({
        fsGroup: z.number().optional(),
        fsGroupChangePolicy: z.string().optional(),
        runAsGroup: z.number().optional(),
        runAsNonRoot: z.boolean().optional(),
        runAsUser: z.number().optional(),
        seLinuxOptions: z
          .object({
            level: z.string().optional(),
            role: z.string().optional(),
            type: z.string().optional(),
            user: z.string().optional(),
          })
          .optional(),
        seccompProfile: z
          .object({
            localhostProfile: z.string().optional(),
            type: z
              .enum(["Localhost", "RuntimeDefault", "Unconfined"])
              .default(""),
          })
          .optional(),
        supplementalGroups: z.array(z.number().default(0)).optional(),
        sysctls: z
          .array(
            z
              .object({
                name: z.string().default(""),
                value: z.string().default(""),
              })
              .default({}),
          )
          .optional(),
        windowsOptions: z
          .object({
            gmsaCredentialSpec: z.string().optional(),
            gmsaCredentialSpecName: z.string().optional(),
            hostProcess: z.boolean().optional(),
            runAsUserName: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    serviceAccount: z.string().optional(),
    serviceAccountName: z.string().optional(),
    setHostnameAsFQDN: z.boolean().optional(),
    shareProcessNamespace: z.boolean().optional(),
    subdomain: z.string().optional(),
    terminationGracePeriodSeconds: z.number().optional(),
    tolerations: z
      .array(
        z
          .object({
            effect: z
              .enum(["NoExecute", "NoSchedule", "PreferNoSchedule"])
              .optional(),
            key: z.string().optional(),
            operator: z.enum(["Equal", "Exists"]).optional(),
            tolerationSeconds: z.number().optional(),
            value: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    topologySpreadConstraints: z
      .array(
        z
          .object({
            labelSelector: z
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
            matchLabelKeys: z.array(z.string().default("")).optional(),
            maxSkew: z.number().default(0),
            minDomains: z.number().optional(),
            nodeAffinityPolicy: z.string().optional(),
            nodeTaintsPolicy: z.string().optional(),
            topologyKey: z.string().default(""),
            whenUnsatisfiable: z
              .enum(["DoNotSchedule", "ScheduleAnyway"])
              .default(""),
          })
          .default({}),
      )
      .optional(),
    volumes: z
      .array(
        z
          .object({
            awsElasticBlockStore: z
              .object({
                fsType: z.string().optional(),
                partition: z.number().optional(),
                readOnly: z.boolean().optional(),
                volumeID: z.string().default(""),
              })
              .optional(),
            azureDisk: z
              .object({
                cachingMode: z.string().optional(),
                diskName: z.string().default(""),
                diskURI: z.string().default(""),
                fsType: z.string().optional(),
                kind: z.string().optional(),
                readOnly: z.boolean().optional(),
              })
              .optional(),
            azureFile: z
              .object({
                readOnly: z.boolean().optional(),
                secretName: z.string().default(""),
                shareName: z.string().default(""),
              })
              .optional(),
            cephfs: z
              .object({
                monitors: z.array(z.string().default("")),
                path: z.string().optional(),
                readOnly: z.boolean().optional(),
                secretFile: z.string().optional(),
                secretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
                user: z.string().optional(),
              })
              .optional(),
            cinder: z
              .object({
                fsType: z.string().optional(),
                readOnly: z.boolean().optional(),
                secretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
                volumeID: z.string().default(""),
              })
              .optional(),
            configMap: z
              .object({
                defaultMode: z.number().optional(),
                items: z
                  .array(
                    z
                      .object({
                        key: z.string().default(""),
                        mode: z.number().optional(),
                        path: z.string().default(""),
                      })
                      .default({}),
                  )
                  .optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              })
              .optional(),
            csi: z
              .object({
                driver: z.string().default(""),
                fsType: z.string().optional(),
                nodePublishSecretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
                readOnly: z.boolean().optional(),
                volumeAttributes: z.record(z.string().default("")).optional(),
              })
              .optional(),
            downwardAPI: z
              .object({
                defaultMode: z.number().optional(),
                items: z
                  .array(
                    z
                      .object({
                        fieldRef: z
                          .object({
                            apiVersion: z.string().optional(),
                            fieldPath: z.string().default(""),
                          })
                          .optional(),
                        mode: z.number().optional(),
                        path: z.string().default(""),
                        resourceFieldRef: z
                          .object({
                            containerName: z.string().optional(),
                            divisor: z.string().default({}),
                            resource: z.string().default(""),
                          })
                          .optional(),
                      })
                      .default({}),
                  )
                  .optional(),
              })
              .optional(),
            emptyDir: z
              .object({
                medium: z.string().optional(),
                sizeLimit: z.string().optional(),
              })
              .optional(),
            ephemeral: z
              .object({
                volumeClaimTemplate: z
                  .object({
                    metadata: z
                      .object({
                        annotations: z
                          .record(z.string().default(""))
                          .optional(),
                        creationTimestamp: z.string().default({}),
                        deletionGracePeriodSeconds: z.number().optional(),
                        deletionTimestamp: z.string().optional(),
                        finalizers: z.array(z.string().default("")).optional(),
                        generateName: z.string().optional(),
                        generation: z.number().optional(),
                        labels: z.record(z.string().default("")).optional(),
                        managedFields: z
                          .array(
                            z
                              .object({
                                apiVersion: z.string().optional(),
                                fieldsType: z.string().optional(),
                                fieldsV1: z.record(z.string()).optional(),
                                manager: z.string().optional(),
                                operation: z.string().optional(),
                                subresource: z.string().optional(),
                                time: z.string().optional(),
                              })
                              .default({}),
                          )
                          .optional(),
                        name: z.string().optional(),
                        namespace: z.string().optional(),
                        ownerReferences: z
                          .array(
                            z
                              .object({
                                apiVersion: z.string().default(""),
                                blockOwnerDeletion: z.boolean().optional(),
                                controller: z.boolean().optional(),
                                kind: z.string().default(""),
                                name: z.string().default(""),
                                uid: z.string().default(""),
                              })
                              .default({}),
                          )
                          .optional(),
                        resourceVersion: z.string().optional(),
                        selfLink: z.string().optional(),
                        uid: z.string().optional(),
                      })
                      .default({}),
                    spec: z
                      .object({
                        accessModes: z.array(z.string().default("")).optional(),
                        dataSource: z
                          .object({
                            apiGroup: z.string().optional(),
                            kind: z.string().default(""),
                            name: z.string().default(""),
                          })
                          .optional(),
                        dataSourceRef: z
                          .object({
                            apiGroup: z.string().optional(),
                            kind: z.string().default(""),
                            name: z.string().default(""),
                            namespace: z.string().optional(),
                          })
                          .optional(),
                        resources: z
                          .object({
                            claims: z
                              .array(
                                z
                                  .object({
                                    name: z.string().default(""),
                                  })
                                  .default({}),
                              )
                              .optional(),
                            limits: z.record(z.string().default({})).optional(),
                            requests: z
                              .record(z.string().default({}))
                              .optional(),
                          })
                          .default({}),
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
                        storageClassName: z.string().optional(),
                        volumeMode: z.string().optional(),
                        volumeName: z.string().optional(),
                      })
                      .default({}),
                  })
                  .optional(),
              })
              .optional(),
            fc: z
              .object({
                fsType: z.string().optional(),
                lun: z.number().optional(),
                readOnly: z.boolean().optional(),
                targetWWNs: z.array(z.string().default("")).optional(),
                wwids: z.array(z.string().default("")).optional(),
              })
              .optional(),
            flexVolume: z
              .object({
                driver: z.string().default(""),
                fsType: z.string().optional(),
                options: z.record(z.string().default("")).optional(),
                readOnly: z.boolean().optional(),
                secretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
              })
              .optional(),
            flocker: z
              .object({
                datasetName: z.string().optional(),
                datasetUUID: z.string().optional(),
              })
              .optional(),
            gcePersistentDisk: z
              .object({
                fsType: z.string().optional(),
                partition: z.number().optional(),
                pdName: z.string().default(""),
                readOnly: z.boolean().optional(),
              })
              .optional(),
            gitRepo: z
              .object({
                directory: z.string().optional(),
                repository: z.string().default(""),
                revision: z.string().optional(),
              })
              .optional(),
            glusterfs: z
              .object({
                endpoints: z.string().default(""),
                path: z.string().default(""),
                readOnly: z.boolean().optional(),
              })
              .optional(),
            hostPath: z
              .object({
                path: z.string().default(""),
                type: z.string().optional(),
              })
              .optional(),
            iscsi: z
              .object({
                chapAuthDiscovery: z.boolean().optional(),
                chapAuthSession: z.boolean().optional(),
                fsType: z.string().optional(),
                initiatorName: z.string().optional(),
                iqn: z.string().default(""),
                iscsiInterface: z.string().optional(),
                lun: z.number().default(0),
                portals: z.array(z.string().default("")).optional(),
                readOnly: z.boolean().optional(),
                secretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
                targetPortal: z.string().default(""),
              })
              .optional(),
            name: z.string().default(""),
            nfs: z
              .object({
                path: z.string().default(""),
                readOnly: z.boolean().optional(),
                server: z.string().default(""),
              })
              .optional(),
            persistentVolumeClaim: z
              .object({
                claimName: z.string().default(""),
                readOnly: z.boolean().optional(),
              })
              .optional(),
            photonPersistentDisk: z
              .object({
                fsType: z.string().optional(),
                pdID: z.string().default(""),
              })
              .optional(),
            portworxVolume: z
              .object({
                fsType: z.string().optional(),
                readOnly: z.boolean().optional(),
                volumeID: z.string().default(""),
              })
              .optional(),
            projected: z
              .object({
                defaultMode: z.number().optional(),
                sources: z
                  .array(
                    z
                      .object({
                        configMap: z
                          .object({
                            items: z
                              .array(
                                z
                                  .object({
                                    key: z.string().default(""),
                                    mode: z.number().optional(),
                                    path: z.string().default(""),
                                  })
                                  .default({}),
                              )
                              .optional(),
                            name: z.string().optional(),
                            optional: z.boolean().optional(),
                          })
                          .optional(),
                        downwardAPI: z
                          .object({
                            items: z
                              .array(
                                z
                                  .object({
                                    fieldRef: z
                                      .object({
                                        apiVersion: z.string().optional(),
                                        fieldPath: z.string().default(""),
                                      })
                                      .optional(),
                                    mode: z.number().optional(),
                                    path: z.string().default(""),
                                    resourceFieldRef: z
                                      .object({
                                        containerName: z.string().optional(),
                                        divisor: z.string().default({}),
                                        resource: z.string().default(""),
                                      })
                                      .optional(),
                                  })
                                  .default({}),
                              )
                              .optional(),
                          })
                          .optional(),
                        secret: z
                          .object({
                            items: z
                              .array(
                                z
                                  .object({
                                    key: z.string().default(""),
                                    mode: z.number().optional(),
                                    path: z.string().default(""),
                                  })
                                  .default({}),
                              )
                              .optional(),
                            name: z.string().optional(),
                            optional: z.boolean().optional(),
                          })
                          .optional(),
                        serviceAccountToken: z
                          .object({
                            audience: z.string().optional(),
                            expirationSeconds: z.number().optional(),
                            path: z.string().default(""),
                          })
                          .optional(),
                      })
                      .default({}),
                  )
                  .optional(),
              })
              .optional(),
            quobyte: z
              .object({
                group: z.string().optional(),
                readOnly: z.boolean().optional(),
                registry: z.string().default(""),
                tenant: z.string().optional(),
                user: z.string().optional(),
                volume: z.string().default(""),
              })
              .optional(),
            rbd: z
              .object({
                fsType: z.string().optional(),
                image: z.string().default(""),
                keyring: z.string().optional(),
                monitors: z.array(z.string().default("")),
                pool: z.string().optional(),
                readOnly: z.boolean().optional(),
                secretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
                user: z.string().optional(),
              })
              .optional(),
            scaleIO: z
              .object({
                fsType: z.string().optional(),
                gateway: z.string().default(""),
                protectionDomain: z.string().optional(),
                readOnly: z.boolean().optional(),
                secretRef: z.object({
                  name: z.string().optional(),
                }),
                sslEnabled: z.boolean().optional(),
                storageMode: z.string().optional(),
                storagePool: z.string().optional(),
                system: z.string().default(""),
                volumeName: z.string().optional(),
              })
              .optional(),
            secret: z
              .object({
                defaultMode: z.number().optional(),
                items: z
                  .array(
                    z
                      .object({
                        key: z.string().default(""),
                        mode: z.number().optional(),
                        path: z.string().default(""),
                      })
                      .default({}),
                  )
                  .optional(),
                optional: z.boolean().optional(),
                secretName: z.string().optional(),
              })
              .optional(),
            storageos: z
              .object({
                fsType: z.string().optional(),
                readOnly: z.boolean().optional(),
                secretRef: z
                  .object({
                    name: z.string().optional(),
                  })
                  .optional(),
                volumeName: z.string().optional(),
                volumeNamespace: z.string().optional(),
              })
              .optional(),
            vsphereVolume: z
              .object({
                fsType: z.string().optional(),
                storagePolicyID: z.string().optional(),
                storagePolicyName: z.string().optional(),
                volumePath: z.string().default(""),
              })
              .optional(),
          })
          .default({}),
      )
      .optional(),
  },
  status: {
    conditions: z
      .array(
        z
          .object({
            lastProbeTime: z.string().default({}),
            lastTransitionTime: z.string().default({}),
            message: z.string().optional(),
            reason: z.string().optional(),
            status: z.string().default(""),
            type: z.string().default(""),
          })
          .default({}),
      )
      .optional(),
    containerStatuses: z
      .array(
        z
          .object({
            containerID: z.string().optional(),
            image: z.string().default(""),
            imageID: z.string().default(""),
            lastState: z
              .object({
                running: z
                  .object({
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                terminated: z
                  .object({
                    containerID: z.string().optional(),
                    exitCode: z.number().default(0),
                    finishedAt: z.string().default({}),
                    message: z.string().optional(),
                    reason: z.string().optional(),
                    signal: z.number().optional(),
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                waiting: z
                  .object({
                    message: z.string().optional(),
                    reason: z.string().optional(),
                  })
                  .optional(),
              })
              .default({}),
            name: z.string().default(""),
            ready: z.boolean().default(false),
            restartCount: z.number().default(0),
            started: z.boolean().optional(),
            state: z
              .object({
                running: z
                  .object({
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                terminated: z
                  .object({
                    containerID: z.string().optional(),
                    exitCode: z.number().default(0),
                    finishedAt: z.string().default({}),
                    message: z.string().optional(),
                    reason: z.string().optional(),
                    signal: z.number().optional(),
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                waiting: z
                  .object({
                    message: z.string().optional(),
                    reason: z.string().optional(),
                  })
                  .optional(),
              })
              .default({}),
          })
          .default({}),
      )
      .optional(),
    ephemeralContainerStatuses: z
      .array(
        z
          .object({
            containerID: z.string().optional(),
            image: z.string().default(""),
            imageID: z.string().default(""),
            lastState: z
              .object({
                running: z
                  .object({
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                terminated: z
                  .object({
                    containerID: z.string().optional(),
                    exitCode: z.number().default(0),
                    finishedAt: z.string().default({}),
                    message: z.string().optional(),
                    reason: z.string().optional(),
                    signal: z.number().optional(),
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                waiting: z
                  .object({
                    message: z.string().optional(),
                    reason: z.string().optional(),
                  })
                  .optional(),
              })
              .default({}),
            name: z.string().default(""),
            ready: z.boolean().default(false),
            restartCount: z.number().default(0),
            started: z.boolean().optional(),
            state: z
              .object({
                running: z
                  .object({
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                terminated: z
                  .object({
                    containerID: z.string().optional(),
                    exitCode: z.number().default(0),
                    finishedAt: z.string().default({}),
                    message: z.string().optional(),
                    reason: z.string().optional(),
                    signal: z.number().optional(),
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                waiting: z
                  .object({
                    message: z.string().optional(),
                    reason: z.string().optional(),
                  })
                  .optional(),
              })
              .default({}),
          })
          .default({}),
      )
      .optional(),
    hostIP: z.string().optional(),
    initContainerStatuses: z
      .array(
        z
          .object({
            containerID: z.string().optional(),
            image: z.string().default(""),
            imageID: z.string().default(""),
            lastState: z
              .object({
                running: z
                  .object({
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                terminated: z
                  .object({
                    containerID: z.string().optional(),
                    exitCode: z.number().default(0),
                    finishedAt: z.string().default({}),
                    message: z.string().optional(),
                    reason: z.string().optional(),
                    signal: z.number().optional(),
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                waiting: z
                  .object({
                    message: z.string().optional(),
                    reason: z.string().optional(),
                  })
                  .optional(),
              })
              .default({}),
            name: z.string().default(""),
            ready: z.boolean().default(false),
            restartCount: z.number().default(0),
            started: z.boolean().optional(),
            state: z
              .object({
                running: z
                  .object({
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                terminated: z
                  .object({
                    containerID: z.string().optional(),
                    exitCode: z.number().default(0),
                    finishedAt: z.string().default({}),
                    message: z.string().optional(),
                    reason: z.string().optional(),
                    signal: z.number().optional(),
                    startedAt: z.string().default({}),
                  })
                  .optional(),
                waiting: z
                  .object({
                    message: z.string().optional(),
                    reason: z.string().optional(),
                  })
                  .optional(),
              })
              .default({}),
          })
          .default({}),
      )
      .optional(),
    message: z.string().optional(),
    nominatedNodeName: z.string().optional(),
    phase: z
      .enum(["Failed", "Pending", "Running", "Succeeded", "Unknown"])
      .optional(),
    podIP: z.string().optional(),
    podIPs: z
      .array(
        z
          .object({
            ip: z.string().optional(),
          })
          .default({}),
      )
      .optional(),
    qosClass: z.enum(["BestEffort", "Burstable", "Guaranteed"]).optional(),
    reason: z.string().optional(),
    startTime: z.string().optional(),
  },
});

export const replicationController = resource(
  "core/v1",
  "ReplicationController",
  {
    scope: "Namespaced",
    spec: {
      minReadySeconds: z.number().optional(),
      replicas: z.number().optional(),
      selector: z.record(z.string().default("")).optional(),
      template: z
        .object({
          metadata: z
            .object({
              annotations: z.record(z.string().default("")).optional(),
              creationTimestamp: z.string().default({}),
              deletionGracePeriodSeconds: z.number().optional(),
              deletionTimestamp: z.string().optional(),
              finalizers: z.array(z.string().default("")).optional(),
              generateName: z.string().optional(),
              generation: z.number().optional(),
              labels: z.record(z.string().default("")).optional(),
              managedFields: z
                .array(
                  z
                    .object({
                      apiVersion: z.string().optional(),
                      fieldsType: z.string().optional(),
                      fieldsV1: z.record(z.string()).optional(),
                      manager: z.string().optional(),
                      operation: z.string().optional(),
                      subresource: z.string().optional(),
                      time: z.string().optional(),
                    })
                    .default({}),
                )
                .optional(),
              name: z.string().optional(),
              namespace: z.string().optional(),
              ownerReferences: z
                .array(
                  z
                    .object({
                      apiVersion: z.string().default(""),
                      blockOwnerDeletion: z.boolean().optional(),
                      controller: z.boolean().optional(),
                      kind: z.string().default(""),
                      name: z.string().default(""),
                      uid: z.string().default(""),
                    })
                    .default({}),
                )
                .optional(),
              resourceVersion: z.string().optional(),
              selfLink: z.string().optional(),
              uid: z.string().optional(),
            })
            .default({}),
          spec: z
            .object({
              activeDeadlineSeconds: z.number().optional(),
              affinity: z
                .object({
                  nodeAffinity: z
                    .object({
                      preferredDuringSchedulingIgnoredDuringExecution: z
                        .array(
                          z
                            .object({
                              preference: z
                                .object({
                                  matchExpressions: z
                                    .array(
                                      z
                                        .object({
                                          key: z.string().default(""),
                                          operator: z
                                            .enum([
                                              "DoesNotExist",
                                              "Exists",
                                              "Gt",
                                              "In",
                                              "Lt",
                                              "NotIn",
                                            ])
                                            .default(""),
                                          values: z
                                            .array(z.string().default(""))
                                            .optional(),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  matchFields: z
                                    .array(
                                      z
                                        .object({
                                          key: z.string().default(""),
                                          operator: z
                                            .enum([
                                              "DoesNotExist",
                                              "Exists",
                                              "Gt",
                                              "In",
                                              "Lt",
                                              "NotIn",
                                            ])
                                            .default(""),
                                          values: z
                                            .array(z.string().default(""))
                                            .optional(),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                })
                                .default({}),
                              weight: z.number().default(0),
                            })
                            .default({}),
                        )
                        .optional(),
                      requiredDuringSchedulingIgnoredDuringExecution: z
                        .object({
                          nodeSelectorTerms: z.array(
                            z
                              .object({
                                matchExpressions: z
                                  .array(
                                    z
                                      .object({
                                        key: z.string().default(""),
                                        operator: z
                                          .enum([
                                            "DoesNotExist",
                                            "Exists",
                                            "Gt",
                                            "In",
                                            "Lt",
                                            "NotIn",
                                          ])
                                          .default(""),
                                        values: z
                                          .array(z.string().default(""))
                                          .optional(),
                                      })
                                      .default({}),
                                  )
                                  .optional(),
                                matchFields: z
                                  .array(
                                    z
                                      .object({
                                        key: z.string().default(""),
                                        operator: z
                                          .enum([
                                            "DoesNotExist",
                                            "Exists",
                                            "Gt",
                                            "In",
                                            "Lt",
                                            "NotIn",
                                          ])
                                          .default(""),
                                        values: z
                                          .array(z.string().default(""))
                                          .optional(),
                                      })
                                      .default({}),
                                  )
                                  .optional(),
                              })
                              .default({}),
                          ),
                        })
                        .optional(),
                    })
                    .optional(),
                  podAffinity: z
                    .object({
                      preferredDuringSchedulingIgnoredDuringExecution: z
                        .array(
                          z
                            .object({
                              podAffinityTerm: z
                                .object({
                                  labelSelector: z
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
                                  namespaces: z
                                    .array(z.string().default(""))
                                    .optional(),
                                  topologyKey: z.string().default(""),
                                })
                                .default({}),
                              weight: z.number().default(0),
                            })
                            .default({}),
                        )
                        .optional(),
                      requiredDuringSchedulingIgnoredDuringExecution: z
                        .array(
                          z
                            .object({
                              labelSelector: z
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
                              namespaces: z
                                .array(z.string().default(""))
                                .optional(),
                              topologyKey: z.string().default(""),
                            })
                            .default({}),
                        )
                        .optional(),
                    })
                    .optional(),
                  podAntiAffinity: z
                    .object({
                      preferredDuringSchedulingIgnoredDuringExecution: z
                        .array(
                          z
                            .object({
                              podAffinityTerm: z
                                .object({
                                  labelSelector: z
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
                                  namespaces: z
                                    .array(z.string().default(""))
                                    .optional(),
                                  topologyKey: z.string().default(""),
                                })
                                .default({}),
                              weight: z.number().default(0),
                            })
                            .default({}),
                        )
                        .optional(),
                      requiredDuringSchedulingIgnoredDuringExecution: z
                        .array(
                          z
                            .object({
                              labelSelector: z
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
                              namespaces: z
                                .array(z.string().default(""))
                                .optional(),
                              topologyKey: z.string().default(""),
                            })
                            .default({}),
                        )
                        .optional(),
                    })
                    .optional(),
                })
                .optional(),
              automountServiceAccountToken: z.boolean().optional(),
              containers: z.array(
                z
                  .object({
                    args: z.array(z.string().default("")).optional(),
                    command: z.array(z.string().default("")).optional(),
                    env: z
                      .array(
                        z
                          .object({
                            name: z.string().default(""),
                            value: z.string().optional(),
                            valueFrom: z
                              .object({
                                configMapKeyRef: z
                                  .object({
                                    key: z.string().default(""),
                                    name: z.string().optional(),
                                    optional: z.boolean().optional(),
                                  })
                                  .optional(),
                                fieldRef: z
                                  .object({
                                    apiVersion: z.string().optional(),
                                    fieldPath: z.string().default(""),
                                  })
                                  .optional(),
                                resourceFieldRef: z
                                  .object({
                                    containerName: z.string().optional(),
                                    divisor: z.string().default({}),
                                    resource: z.string().default(""),
                                  })
                                  .optional(),
                                secretKeyRef: z
                                  .object({
                                    key: z.string().default(""),
                                    name: z.string().optional(),
                                    optional: z.boolean().optional(),
                                  })
                                  .optional(),
                              })
                              .optional(),
                          })
                          .default({}),
                      )
                      .optional(),
                    envFrom: z
                      .array(
                        z
                          .object({
                            configMapRef: z
                              .object({
                                name: z.string().optional(),
                                optional: z.boolean().optional(),
                              })
                              .optional(),
                            prefix: z.string().optional(),
                            secretRef: z
                              .object({
                                name: z.string().optional(),
                                optional: z.boolean().optional(),
                              })
                              .optional(),
                          })
                          .default({}),
                      )
                      .optional(),
                    image: z.string().optional(),
                    imagePullPolicy: z
                      .enum(["Always", "IfNotPresent", "Never"])
                      .optional(),
                    lifecycle: z
                      .object({
                        postStart: z
                          .object({
                            exec: z
                              .object({
                                command: z
                                  .array(z.string().default(""))
                                  .optional(),
                              })
                              .optional(),
                            httpGet: z
                              .object({
                                host: z.string().optional(),
                                httpHeaders: z
                                  .array(
                                    z
                                      .object({
                                        name: z.string().default(""),
                                        value: z.string().default(""),
                                      })
                                      .default({}),
                                  )
                                  .optional(),
                                path: z.string().optional(),
                                port: z.string().default({}),
                                scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                              })
                              .optional(),
                            tcpSocket: z
                              .object({
                                host: z.string().optional(),
                                port: z.string().default({}),
                              })
                              .optional(),
                          })
                          .optional(),
                        preStop: z
                          .object({
                            exec: z
                              .object({
                                command: z
                                  .array(z.string().default(""))
                                  .optional(),
                              })
                              .optional(),
                            httpGet: z
                              .object({
                                host: z.string().optional(),
                                httpHeaders: z
                                  .array(
                                    z
                                      .object({
                                        name: z.string().default(""),
                                        value: z.string().default(""),
                                      })
                                      .default({}),
                                  )
                                  .optional(),
                                path: z.string().optional(),
                                port: z.string().default({}),
                                scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                              })
                              .optional(),
                            tcpSocket: z
                              .object({
                                host: z.string().optional(),
                                port: z.string().default({}),
                              })
                              .optional(),
                          })
                          .optional(),
                      })
                      .optional(),
                    livenessProbe: z
                      .object({
                        exec: z
                          .object({
                            command: z.array(z.string().default("")).optional(),
                          })
                          .optional(),
                        failureThreshold: z.number().optional(),
                        grpc: z
                          .object({
                            port: z.number().default(0),
                            service: z.string().default(""),
                          })
                          .optional(),
                        httpGet: z
                          .object({
                            host: z.string().optional(),
                            httpHeaders: z
                              .array(
                                z
                                  .object({
                                    name: z.string().default(""),
                                    value: z.string().default(""),
                                  })
                                  .default({}),
                              )
                              .optional(),
                            path: z.string().optional(),
                            port: z.string().default({}),
                            scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                          })
                          .optional(),
                        initialDelaySeconds: z.number().optional(),
                        periodSeconds: z.number().optional(),
                        successThreshold: z.number().optional(),
                        tcpSocket: z
                          .object({
                            host: z.string().optional(),
                            port: z.string().default({}),
                          })
                          .optional(),
                        terminationGracePeriodSeconds: z.number().optional(),
                        timeoutSeconds: z.number().optional(),
                      })
                      .optional(),
                    name: z.string().default(""),
                    ports: z
                      .array(
                        z
                          .object({
                            containerPort: z.number().default(0),
                            hostIP: z.string().optional(),
                            hostPort: z.number().optional(),
                            name: z.string().optional(),
                            protocol: z
                              .enum(["SCTP", "TCP", "UDP"])
                              .default("TCP"),
                          })
                          .default({}),
                      )
                      .optional(),
                    readinessProbe: z
                      .object({
                        exec: z
                          .object({
                            command: z.array(z.string().default("")).optional(),
                          })
                          .optional(),
                        failureThreshold: z.number().optional(),
                        grpc: z
                          .object({
                            port: z.number().default(0),
                            service: z.string().default(""),
                          })
                          .optional(),
                        httpGet: z
                          .object({
                            host: z.string().optional(),
                            httpHeaders: z
                              .array(
                                z
                                  .object({
                                    name: z.string().default(""),
                                    value: z.string().default(""),
                                  })
                                  .default({}),
                              )
                              .optional(),
                            path: z.string().optional(),
                            port: z.string().default({}),
                            scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                          })
                          .optional(),
                        initialDelaySeconds: z.number().optional(),
                        periodSeconds: z.number().optional(),
                        successThreshold: z.number().optional(),
                        tcpSocket: z
                          .object({
                            host: z.string().optional(),
                            port: z.string().default({}),
                          })
                          .optional(),
                        terminationGracePeriodSeconds: z.number().optional(),
                        timeoutSeconds: z.number().optional(),
                      })
                      .optional(),
                    resources: z
                      .object({
                        claims: z
                          .array(
                            z
                              .object({
                                name: z.string().default(""),
                              })
                              .default({}),
                          )
                          .optional(),
                        limits: z.record(z.string().default({})).optional(),
                        requests: z.record(z.string().default({})).optional(),
                      })
                      .default({}),
                    securityContext: z
                      .object({
                        allowPrivilegeEscalation: z.boolean().optional(),
                        capabilities: z
                          .object({
                            add: z.array(z.string().default("")).optional(),
                            drop: z.array(z.string().default("")).optional(),
                          })
                          .optional(),
                        privileged: z.boolean().optional(),
                        procMount: z.string().optional(),
                        readOnlyRootFilesystem: z.boolean().optional(),
                        runAsGroup: z.number().optional(),
                        runAsNonRoot: z.boolean().optional(),
                        runAsUser: z.number().optional(),
                        seLinuxOptions: z
                          .object({
                            level: z.string().optional(),
                            role: z.string().optional(),
                            type: z.string().optional(),
                            user: z.string().optional(),
                          })
                          .optional(),
                        seccompProfile: z
                          .object({
                            localhostProfile: z.string().optional(),
                            type: z
                              .enum([
                                "Localhost",
                                "RuntimeDefault",
                                "Unconfined",
                              ])
                              .default(""),
                          })
                          .optional(),
                        windowsOptions: z
                          .object({
                            gmsaCredentialSpec: z.string().optional(),
                            gmsaCredentialSpecName: z.string().optional(),
                            hostProcess: z.boolean().optional(),
                            runAsUserName: z.string().optional(),
                          })
                          .optional(),
                      })
                      .optional(),
                    startupProbe: z
                      .object({
                        exec: z
                          .object({
                            command: z.array(z.string().default("")).optional(),
                          })
                          .optional(),
                        failureThreshold: z.number().optional(),
                        grpc: z
                          .object({
                            port: z.number().default(0),
                            service: z.string().default(""),
                          })
                          .optional(),
                        httpGet: z
                          .object({
                            host: z.string().optional(),
                            httpHeaders: z
                              .array(
                                z
                                  .object({
                                    name: z.string().default(""),
                                    value: z.string().default(""),
                                  })
                                  .default({}),
                              )
                              .optional(),
                            path: z.string().optional(),
                            port: z.string().default({}),
                            scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                          })
                          .optional(),
                        initialDelaySeconds: z.number().optional(),
                        periodSeconds: z.number().optional(),
                        successThreshold: z.number().optional(),
                        tcpSocket: z
                          .object({
                            host: z.string().optional(),
                            port: z.string().default({}),
                          })
                          .optional(),
                        terminationGracePeriodSeconds: z.number().optional(),
                        timeoutSeconds: z.number().optional(),
                      })
                      .optional(),
                    stdin: z.boolean().optional(),
                    stdinOnce: z.boolean().optional(),
                    terminationMessagePath: z.string().optional(),
                    terminationMessagePolicy: z
                      .enum(["FallbackToLogsOnError", "File"])
                      .optional(),
                    tty: z.boolean().optional(),
                    volumeDevices: z
                      .array(
                        z
                          .object({
                            devicePath: z.string().default(""),
                            name: z.string().default(""),
                          })
                          .default({}),
                      )
                      .optional(),
                    volumeMounts: z
                      .array(
                        z
                          .object({
                            mountPath: z.string().default(""),
                            mountPropagation: z.string().optional(),
                            name: z.string().default(""),
                            readOnly: z.boolean().optional(),
                            subPath: z.string().optional(),
                            subPathExpr: z.string().optional(),
                          })
                          .default({}),
                      )
                      .optional(),
                    workingDir: z.string().optional(),
                  })
                  .default({}),
              ),
              dnsConfig: z
                .object({
                  nameservers: z.array(z.string().default("")).optional(),
                  options: z
                    .array(
                      z
                        .object({
                          name: z.string().optional(),
                          value: z.string().optional(),
                        })
                        .default({}),
                    )
                    .optional(),
                  searches: z.array(z.string().default("")).optional(),
                })
                .optional(),
              dnsPolicy: z
                .enum([
                  "ClusterFirst",
                  "ClusterFirstWithHostNet",
                  "Default",
                  "None",
                ])
                .optional(),
              enableServiceLinks: z.boolean().optional(),
              ephemeralContainers: z
                .array(
                  z
                    .object({
                      args: z.array(z.string().default("")).optional(),
                      command: z.array(z.string().default("")).optional(),
                      env: z
                        .array(
                          z
                            .object({
                              name: z.string().default(""),
                              value: z.string().optional(),
                              valueFrom: z
                                .object({
                                  configMapKeyRef: z
                                    .object({
                                      key: z.string().default(""),
                                      name: z.string().optional(),
                                      optional: z.boolean().optional(),
                                    })
                                    .optional(),
                                  fieldRef: z
                                    .object({
                                      apiVersion: z.string().optional(),
                                      fieldPath: z.string().default(""),
                                    })
                                    .optional(),
                                  resourceFieldRef: z
                                    .object({
                                      containerName: z.string().optional(),
                                      divisor: z.string().default({}),
                                      resource: z.string().default(""),
                                    })
                                    .optional(),
                                  secretKeyRef: z
                                    .object({
                                      key: z.string().default(""),
                                      name: z.string().optional(),
                                      optional: z.boolean().optional(),
                                    })
                                    .optional(),
                                })
                                .optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      envFrom: z
                        .array(
                          z
                            .object({
                              configMapRef: z
                                .object({
                                  name: z.string().optional(),
                                  optional: z.boolean().optional(),
                                })
                                .optional(),
                              prefix: z.string().optional(),
                              secretRef: z
                                .object({
                                  name: z.string().optional(),
                                  optional: z.boolean().optional(),
                                })
                                .optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      image: z.string().optional(),
                      imagePullPolicy: z
                        .enum(["Always", "IfNotPresent", "Never"])
                        .optional(),
                      lifecycle: z
                        .object({
                          postStart: z
                            .object({
                              exec: z
                                .object({
                                  command: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .optional(),
                              httpGet: z
                                .object({
                                  host: z.string().optional(),
                                  httpHeaders: z
                                    .array(
                                      z
                                        .object({
                                          name: z.string().default(""),
                                          value: z.string().default(""),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  path: z.string().optional(),
                                  port: z.string().default({}),
                                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                                })
                                .optional(),
                              tcpSocket: z
                                .object({
                                  host: z.string().optional(),
                                  port: z.string().default({}),
                                })
                                .optional(),
                            })
                            .optional(),
                          preStop: z
                            .object({
                              exec: z
                                .object({
                                  command: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .optional(),
                              httpGet: z
                                .object({
                                  host: z.string().optional(),
                                  httpHeaders: z
                                    .array(
                                      z
                                        .object({
                                          name: z.string().default(""),
                                          value: z.string().default(""),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  path: z.string().optional(),
                                  port: z.string().default({}),
                                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                                })
                                .optional(),
                              tcpSocket: z
                                .object({
                                  host: z.string().optional(),
                                  port: z.string().default({}),
                                })
                                .optional(),
                            })
                            .optional(),
                        })
                        .optional(),
                      livenessProbe: z
                        .object({
                          exec: z
                            .object({
                              command: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .optional(),
                          failureThreshold: z.number().optional(),
                          grpc: z
                            .object({
                              port: z.number().default(0),
                              service: z.string().default(""),
                            })
                            .optional(),
                          httpGet: z
                            .object({
                              host: z.string().optional(),
                              httpHeaders: z
                                .array(
                                  z
                                    .object({
                                      name: z.string().default(""),
                                      value: z.string().default(""),
                                    })
                                    .default({}),
                                )
                                .optional(),
                              path: z.string().optional(),
                              port: z.string().default({}),
                              scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                            })
                            .optional(),
                          initialDelaySeconds: z.number().optional(),
                          periodSeconds: z.number().optional(),
                          successThreshold: z.number().optional(),
                          tcpSocket: z
                            .object({
                              host: z.string().optional(),
                              port: z.string().default({}),
                            })
                            .optional(),
                          terminationGracePeriodSeconds: z.number().optional(),
                          timeoutSeconds: z.number().optional(),
                        })
                        .optional(),
                      name: z.string().default(""),
                      ports: z
                        .array(
                          z
                            .object({
                              containerPort: z.number().default(0),
                              hostIP: z.string().optional(),
                              hostPort: z.number().optional(),
                              name: z.string().optional(),
                              protocol: z
                                .enum(["SCTP", "TCP", "UDP"])
                                .default("TCP"),
                            })
                            .default({}),
                        )
                        .optional(),
                      readinessProbe: z
                        .object({
                          exec: z
                            .object({
                              command: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .optional(),
                          failureThreshold: z.number().optional(),
                          grpc: z
                            .object({
                              port: z.number().default(0),
                              service: z.string().default(""),
                            })
                            .optional(),
                          httpGet: z
                            .object({
                              host: z.string().optional(),
                              httpHeaders: z
                                .array(
                                  z
                                    .object({
                                      name: z.string().default(""),
                                      value: z.string().default(""),
                                    })
                                    .default({}),
                                )
                                .optional(),
                              path: z.string().optional(),
                              port: z.string().default({}),
                              scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                            })
                            .optional(),
                          initialDelaySeconds: z.number().optional(),
                          periodSeconds: z.number().optional(),
                          successThreshold: z.number().optional(),
                          tcpSocket: z
                            .object({
                              host: z.string().optional(),
                              port: z.string().default({}),
                            })
                            .optional(),
                          terminationGracePeriodSeconds: z.number().optional(),
                          timeoutSeconds: z.number().optional(),
                        })
                        .optional(),
                      resources: z
                        .object({
                          claims: z
                            .array(
                              z
                                .object({
                                  name: z.string().default(""),
                                })
                                .default({}),
                            )
                            .optional(),
                          limits: z.record(z.string().default({})).optional(),
                          requests: z.record(z.string().default({})).optional(),
                        })
                        .default({}),
                      securityContext: z
                        .object({
                          allowPrivilegeEscalation: z.boolean().optional(),
                          capabilities: z
                            .object({
                              add: z.array(z.string().default("")).optional(),
                              drop: z.array(z.string().default("")).optional(),
                            })
                            .optional(),
                          privileged: z.boolean().optional(),
                          procMount: z.string().optional(),
                          readOnlyRootFilesystem: z.boolean().optional(),
                          runAsGroup: z.number().optional(),
                          runAsNonRoot: z.boolean().optional(),
                          runAsUser: z.number().optional(),
                          seLinuxOptions: z
                            .object({
                              level: z.string().optional(),
                              role: z.string().optional(),
                              type: z.string().optional(),
                              user: z.string().optional(),
                            })
                            .optional(),
                          seccompProfile: z
                            .object({
                              localhostProfile: z.string().optional(),
                              type: z
                                .enum([
                                  "Localhost",
                                  "RuntimeDefault",
                                  "Unconfined",
                                ])
                                .default(""),
                            })
                            .optional(),
                          windowsOptions: z
                            .object({
                              gmsaCredentialSpec: z.string().optional(),
                              gmsaCredentialSpecName: z.string().optional(),
                              hostProcess: z.boolean().optional(),
                              runAsUserName: z.string().optional(),
                            })
                            .optional(),
                        })
                        .optional(),
                      startupProbe: z
                        .object({
                          exec: z
                            .object({
                              command: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .optional(),
                          failureThreshold: z.number().optional(),
                          grpc: z
                            .object({
                              port: z.number().default(0),
                              service: z.string().default(""),
                            })
                            .optional(),
                          httpGet: z
                            .object({
                              host: z.string().optional(),
                              httpHeaders: z
                                .array(
                                  z
                                    .object({
                                      name: z.string().default(""),
                                      value: z.string().default(""),
                                    })
                                    .default({}),
                                )
                                .optional(),
                              path: z.string().optional(),
                              port: z.string().default({}),
                              scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                            })
                            .optional(),
                          initialDelaySeconds: z.number().optional(),
                          periodSeconds: z.number().optional(),
                          successThreshold: z.number().optional(),
                          tcpSocket: z
                            .object({
                              host: z.string().optional(),
                              port: z.string().default({}),
                            })
                            .optional(),
                          terminationGracePeriodSeconds: z.number().optional(),
                          timeoutSeconds: z.number().optional(),
                        })
                        .optional(),
                      stdin: z.boolean().optional(),
                      stdinOnce: z.boolean().optional(),
                      targetContainerName: z.string().optional(),
                      terminationMessagePath: z.string().optional(),
                      terminationMessagePolicy: z
                        .enum(["FallbackToLogsOnError", "File"])
                        .optional(),
                      tty: z.boolean().optional(),
                      volumeDevices: z
                        .array(
                          z
                            .object({
                              devicePath: z.string().default(""),
                              name: z.string().default(""),
                            })
                            .default({}),
                        )
                        .optional(),
                      volumeMounts: z
                        .array(
                          z
                            .object({
                              mountPath: z.string().default(""),
                              mountPropagation: z.string().optional(),
                              name: z.string().default(""),
                              readOnly: z.boolean().optional(),
                              subPath: z.string().optional(),
                              subPathExpr: z.string().optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      workingDir: z.string().optional(),
                    })
                    .default({}),
                )
                .optional(),
              hostAliases: z
                .array(
                  z
                    .object({
                      hostnames: z.array(z.string().default("")).optional(),
                      ip: z.string().optional(),
                    })
                    .default({}),
                )
                .optional(),
              hostIPC: z.boolean().optional(),
              hostNetwork: z.boolean().optional(),
              hostPID: z.boolean().optional(),
              hostUsers: z.boolean().optional(),
              hostname: z.string().optional(),
              imagePullSecrets: z
                .array(
                  z
                    .object({
                      name: z.string().optional(),
                    })
                    .default({}),
                )
                .optional(),
              initContainers: z
                .array(
                  z
                    .object({
                      args: z.array(z.string().default("")).optional(),
                      command: z.array(z.string().default("")).optional(),
                      env: z
                        .array(
                          z
                            .object({
                              name: z.string().default(""),
                              value: z.string().optional(),
                              valueFrom: z
                                .object({
                                  configMapKeyRef: z
                                    .object({
                                      key: z.string().default(""),
                                      name: z.string().optional(),
                                      optional: z.boolean().optional(),
                                    })
                                    .optional(),
                                  fieldRef: z
                                    .object({
                                      apiVersion: z.string().optional(),
                                      fieldPath: z.string().default(""),
                                    })
                                    .optional(),
                                  resourceFieldRef: z
                                    .object({
                                      containerName: z.string().optional(),
                                      divisor: z.string().default({}),
                                      resource: z.string().default(""),
                                    })
                                    .optional(),
                                  secretKeyRef: z
                                    .object({
                                      key: z.string().default(""),
                                      name: z.string().optional(),
                                      optional: z.boolean().optional(),
                                    })
                                    .optional(),
                                })
                                .optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      envFrom: z
                        .array(
                          z
                            .object({
                              configMapRef: z
                                .object({
                                  name: z.string().optional(),
                                  optional: z.boolean().optional(),
                                })
                                .optional(),
                              prefix: z.string().optional(),
                              secretRef: z
                                .object({
                                  name: z.string().optional(),
                                  optional: z.boolean().optional(),
                                })
                                .optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      image: z.string().optional(),
                      imagePullPolicy: z
                        .enum(["Always", "IfNotPresent", "Never"])
                        .optional(),
                      lifecycle: z
                        .object({
                          postStart: z
                            .object({
                              exec: z
                                .object({
                                  command: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .optional(),
                              httpGet: z
                                .object({
                                  host: z.string().optional(),
                                  httpHeaders: z
                                    .array(
                                      z
                                        .object({
                                          name: z.string().default(""),
                                          value: z.string().default(""),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  path: z.string().optional(),
                                  port: z.string().default({}),
                                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                                })
                                .optional(),
                              tcpSocket: z
                                .object({
                                  host: z.string().optional(),
                                  port: z.string().default({}),
                                })
                                .optional(),
                            })
                            .optional(),
                          preStop: z
                            .object({
                              exec: z
                                .object({
                                  command: z
                                    .array(z.string().default(""))
                                    .optional(),
                                })
                                .optional(),
                              httpGet: z
                                .object({
                                  host: z.string().optional(),
                                  httpHeaders: z
                                    .array(
                                      z
                                        .object({
                                          name: z.string().default(""),
                                          value: z.string().default(""),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  path: z.string().optional(),
                                  port: z.string().default({}),
                                  scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                                })
                                .optional(),
                              tcpSocket: z
                                .object({
                                  host: z.string().optional(),
                                  port: z.string().default({}),
                                })
                                .optional(),
                            })
                            .optional(),
                        })
                        .optional(),
                      livenessProbe: z
                        .object({
                          exec: z
                            .object({
                              command: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .optional(),
                          failureThreshold: z.number().optional(),
                          grpc: z
                            .object({
                              port: z.number().default(0),
                              service: z.string().default(""),
                            })
                            .optional(),
                          httpGet: z
                            .object({
                              host: z.string().optional(),
                              httpHeaders: z
                                .array(
                                  z
                                    .object({
                                      name: z.string().default(""),
                                      value: z.string().default(""),
                                    })
                                    .default({}),
                                )
                                .optional(),
                              path: z.string().optional(),
                              port: z.string().default({}),
                              scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                            })
                            .optional(),
                          initialDelaySeconds: z.number().optional(),
                          periodSeconds: z.number().optional(),
                          successThreshold: z.number().optional(),
                          tcpSocket: z
                            .object({
                              host: z.string().optional(),
                              port: z.string().default({}),
                            })
                            .optional(),
                          terminationGracePeriodSeconds: z.number().optional(),
                          timeoutSeconds: z.number().optional(),
                        })
                        .optional(),
                      name: z.string().default(""),
                      ports: z
                        .array(
                          z
                            .object({
                              containerPort: z.number().default(0),
                              hostIP: z.string().optional(),
                              hostPort: z.number().optional(),
                              name: z.string().optional(),
                              protocol: z
                                .enum(["SCTP", "TCP", "UDP"])
                                .default("TCP"),
                            })
                            .default({}),
                        )
                        .optional(),
                      readinessProbe: z
                        .object({
                          exec: z
                            .object({
                              command: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .optional(),
                          failureThreshold: z.number().optional(),
                          grpc: z
                            .object({
                              port: z.number().default(0),
                              service: z.string().default(""),
                            })
                            .optional(),
                          httpGet: z
                            .object({
                              host: z.string().optional(),
                              httpHeaders: z
                                .array(
                                  z
                                    .object({
                                      name: z.string().default(""),
                                      value: z.string().default(""),
                                    })
                                    .default({}),
                                )
                                .optional(),
                              path: z.string().optional(),
                              port: z.string().default({}),
                              scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                            })
                            .optional(),
                          initialDelaySeconds: z.number().optional(),
                          periodSeconds: z.number().optional(),
                          successThreshold: z.number().optional(),
                          tcpSocket: z
                            .object({
                              host: z.string().optional(),
                              port: z.string().default({}),
                            })
                            .optional(),
                          terminationGracePeriodSeconds: z.number().optional(),
                          timeoutSeconds: z.number().optional(),
                        })
                        .optional(),
                      resources: z
                        .object({
                          claims: z
                            .array(
                              z
                                .object({
                                  name: z.string().default(""),
                                })
                                .default({}),
                            )
                            .optional(),
                          limits: z.record(z.string().default({})).optional(),
                          requests: z.record(z.string().default({})).optional(),
                        })
                        .default({}),
                      securityContext: z
                        .object({
                          allowPrivilegeEscalation: z.boolean().optional(),
                          capabilities: z
                            .object({
                              add: z.array(z.string().default("")).optional(),
                              drop: z.array(z.string().default("")).optional(),
                            })
                            .optional(),
                          privileged: z.boolean().optional(),
                          procMount: z.string().optional(),
                          readOnlyRootFilesystem: z.boolean().optional(),
                          runAsGroup: z.number().optional(),
                          runAsNonRoot: z.boolean().optional(),
                          runAsUser: z.number().optional(),
                          seLinuxOptions: z
                            .object({
                              level: z.string().optional(),
                              role: z.string().optional(),
                              type: z.string().optional(),
                              user: z.string().optional(),
                            })
                            .optional(),
                          seccompProfile: z
                            .object({
                              localhostProfile: z.string().optional(),
                              type: z
                                .enum([
                                  "Localhost",
                                  "RuntimeDefault",
                                  "Unconfined",
                                ])
                                .default(""),
                            })
                            .optional(),
                          windowsOptions: z
                            .object({
                              gmsaCredentialSpec: z.string().optional(),
                              gmsaCredentialSpecName: z.string().optional(),
                              hostProcess: z.boolean().optional(),
                              runAsUserName: z.string().optional(),
                            })
                            .optional(),
                        })
                        .optional(),
                      startupProbe: z
                        .object({
                          exec: z
                            .object({
                              command: z
                                .array(z.string().default(""))
                                .optional(),
                            })
                            .optional(),
                          failureThreshold: z.number().optional(),
                          grpc: z
                            .object({
                              port: z.number().default(0),
                              service: z.string().default(""),
                            })
                            .optional(),
                          httpGet: z
                            .object({
                              host: z.string().optional(),
                              httpHeaders: z
                                .array(
                                  z
                                    .object({
                                      name: z.string().default(""),
                                      value: z.string().default(""),
                                    })
                                    .default({}),
                                )
                                .optional(),
                              path: z.string().optional(),
                              port: z.string().default({}),
                              scheme: z.enum(["HTTP", "HTTPS"]).optional(),
                            })
                            .optional(),
                          initialDelaySeconds: z.number().optional(),
                          periodSeconds: z.number().optional(),
                          successThreshold: z.number().optional(),
                          tcpSocket: z
                            .object({
                              host: z.string().optional(),
                              port: z.string().default({}),
                            })
                            .optional(),
                          terminationGracePeriodSeconds: z.number().optional(),
                          timeoutSeconds: z.number().optional(),
                        })
                        .optional(),
                      stdin: z.boolean().optional(),
                      stdinOnce: z.boolean().optional(),
                      terminationMessagePath: z.string().optional(),
                      terminationMessagePolicy: z
                        .enum(["FallbackToLogsOnError", "File"])
                        .optional(),
                      tty: z.boolean().optional(),
                      volumeDevices: z
                        .array(
                          z
                            .object({
                              devicePath: z.string().default(""),
                              name: z.string().default(""),
                            })
                            .default({}),
                        )
                        .optional(),
                      volumeMounts: z
                        .array(
                          z
                            .object({
                              mountPath: z.string().default(""),
                              mountPropagation: z.string().optional(),
                              name: z.string().default(""),
                              readOnly: z.boolean().optional(),
                              subPath: z.string().optional(),
                              subPathExpr: z.string().optional(),
                            })
                            .default({}),
                        )
                        .optional(),
                      workingDir: z.string().optional(),
                    })
                    .default({}),
                )
                .optional(),
              nodeName: z.string().optional(),
              nodeSelector: z.record(z.string().default("")).optional(),
              os: z
                .object({
                  name: z.string().default(""),
                })
                .optional(),
              overhead: z.record(z.string().default({})).optional(),
              preemptionPolicy: z.string().optional(),
              priority: z.number().optional(),
              priorityClassName: z.string().optional(),
              readinessGates: z
                .array(
                  z
                    .object({
                      conditionType: z.string().default(""),
                    })
                    .default({}),
                )
                .optional(),
              resourceClaims: z
                .array(
                  z
                    .object({
                      name: z.string().default(""),
                      source: z
                        .object({
                          resourceClaimName: z.string().optional(),
                          resourceClaimTemplateName: z.string().optional(),
                        })
                        .default({}),
                    })
                    .default({}),
                )
                .optional(),
              restartPolicy: z
                .enum(["Always", "Never", "OnFailure"])
                .optional(),
              runtimeClassName: z.string().optional(),
              schedulerName: z.string().optional(),
              schedulingGates: z
                .array(
                  z
                    .object({
                      name: z.string().default(""),
                    })
                    .default({}),
                )
                .optional(),
              securityContext: z
                .object({
                  fsGroup: z.number().optional(),
                  fsGroupChangePolicy: z.string().optional(),
                  runAsGroup: z.number().optional(),
                  runAsNonRoot: z.boolean().optional(),
                  runAsUser: z.number().optional(),
                  seLinuxOptions: z
                    .object({
                      level: z.string().optional(),
                      role: z.string().optional(),
                      type: z.string().optional(),
                      user: z.string().optional(),
                    })
                    .optional(),
                  seccompProfile: z
                    .object({
                      localhostProfile: z.string().optional(),
                      type: z
                        .enum(["Localhost", "RuntimeDefault", "Unconfined"])
                        .default(""),
                    })
                    .optional(),
                  supplementalGroups: z.array(z.number().default(0)).optional(),
                  sysctls: z
                    .array(
                      z
                        .object({
                          name: z.string().default(""),
                          value: z.string().default(""),
                        })
                        .default({}),
                    )
                    .optional(),
                  windowsOptions: z
                    .object({
                      gmsaCredentialSpec: z.string().optional(),
                      gmsaCredentialSpecName: z.string().optional(),
                      hostProcess: z.boolean().optional(),
                      runAsUserName: z.string().optional(),
                    })
                    .optional(),
                })
                .optional(),
              serviceAccount: z.string().optional(),
              serviceAccountName: z.string().optional(),
              setHostnameAsFQDN: z.boolean().optional(),
              shareProcessNamespace: z.boolean().optional(),
              subdomain: z.string().optional(),
              terminationGracePeriodSeconds: z.number().optional(),
              tolerations: z
                .array(
                  z
                    .object({
                      effect: z
                        .enum(["NoExecute", "NoSchedule", "PreferNoSchedule"])
                        .optional(),
                      key: z.string().optional(),
                      operator: z.enum(["Equal", "Exists"]).optional(),
                      tolerationSeconds: z.number().optional(),
                      value: z.string().optional(),
                    })
                    .default({}),
                )
                .optional(),
              topologySpreadConstraints: z
                .array(
                  z
                    .object({
                      labelSelector: z
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
                      matchLabelKeys: z
                        .array(z.string().default(""))
                        .optional(),
                      maxSkew: z.number().default(0),
                      minDomains: z.number().optional(),
                      nodeAffinityPolicy: z.string().optional(),
                      nodeTaintsPolicy: z.string().optional(),
                      topologyKey: z.string().default(""),
                      whenUnsatisfiable: z
                        .enum(["DoNotSchedule", "ScheduleAnyway"])
                        .default(""),
                    })
                    .default({}),
                )
                .optional(),
              volumes: z
                .array(
                  z
                    .object({
                      awsElasticBlockStore: z
                        .object({
                          fsType: z.string().optional(),
                          partition: z.number().optional(),
                          readOnly: z.boolean().optional(),
                          volumeID: z.string().default(""),
                        })
                        .optional(),
                      azureDisk: z
                        .object({
                          cachingMode: z.string().optional(),
                          diskName: z.string().default(""),
                          diskURI: z.string().default(""),
                          fsType: z.string().optional(),
                          kind: z.string().optional(),
                          readOnly: z.boolean().optional(),
                        })
                        .optional(),
                      azureFile: z
                        .object({
                          readOnly: z.boolean().optional(),
                          secretName: z.string().default(""),
                          shareName: z.string().default(""),
                        })
                        .optional(),
                      cephfs: z
                        .object({
                          monitors: z.array(z.string().default("")),
                          path: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          secretFile: z.string().optional(),
                          secretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                          user: z.string().optional(),
                        })
                        .optional(),
                      cinder: z
                        .object({
                          fsType: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          secretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                          volumeID: z.string().default(""),
                        })
                        .optional(),
                      configMap: z
                        .object({
                          defaultMode: z.number().optional(),
                          items: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  mode: z.number().optional(),
                                  path: z.string().default(""),
                                })
                                .default({}),
                            )
                            .optional(),
                          name: z.string().optional(),
                          optional: z.boolean().optional(),
                        })
                        .optional(),
                      csi: z
                        .object({
                          driver: z.string().default(""),
                          fsType: z.string().optional(),
                          nodePublishSecretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                          readOnly: z.boolean().optional(),
                          volumeAttributes: z
                            .record(z.string().default(""))
                            .optional(),
                        })
                        .optional(),
                      downwardAPI: z
                        .object({
                          defaultMode: z.number().optional(),
                          items: z
                            .array(
                              z
                                .object({
                                  fieldRef: z
                                    .object({
                                      apiVersion: z.string().optional(),
                                      fieldPath: z.string().default(""),
                                    })
                                    .optional(),
                                  mode: z.number().optional(),
                                  path: z.string().default(""),
                                  resourceFieldRef: z
                                    .object({
                                      containerName: z.string().optional(),
                                      divisor: z.string().default({}),
                                      resource: z.string().default(""),
                                    })
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                        })
                        .optional(),
                      emptyDir: z
                        .object({
                          medium: z.string().optional(),
                          sizeLimit: z.string().optional(),
                        })
                        .optional(),
                      ephemeral: z
                        .object({
                          volumeClaimTemplate: z
                            .object({
                              metadata: z
                                .object({
                                  annotations: z
                                    .record(z.string().default(""))
                                    .optional(),
                                  creationTimestamp: z.string().default({}),
                                  deletionGracePeriodSeconds: z
                                    .number()
                                    .optional(),
                                  deletionTimestamp: z.string().optional(),
                                  finalizers: z
                                    .array(z.string().default(""))
                                    .optional(),
                                  generateName: z.string().optional(),
                                  generation: z.number().optional(),
                                  labels: z
                                    .record(z.string().default(""))
                                    .optional(),
                                  managedFields: z
                                    .array(
                                      z
                                        .object({
                                          apiVersion: z.string().optional(),
                                          fieldsType: z.string().optional(),
                                          fieldsV1: z
                                            .record(z.string())
                                            .optional(),
                                          manager: z.string().optional(),
                                          operation: z.string().optional(),
                                          subresource: z.string().optional(),
                                          time: z.string().optional(),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  name: z.string().optional(),
                                  namespace: z.string().optional(),
                                  ownerReferences: z
                                    .array(
                                      z
                                        .object({
                                          apiVersion: z.string().default(""),
                                          blockOwnerDeletion: z
                                            .boolean()
                                            .optional(),
                                          controller: z.boolean().optional(),
                                          kind: z.string().default(""),
                                          name: z.string().default(""),
                                          uid: z.string().default(""),
                                        })
                                        .default({}),
                                    )
                                    .optional(),
                                  resourceVersion: z.string().optional(),
                                  selfLink: z.string().optional(),
                                  uid: z.string().optional(),
                                })
                                .default({}),
                              spec: z
                                .object({
                                  accessModes: z
                                    .array(z.string().default(""))
                                    .optional(),
                                  dataSource: z
                                    .object({
                                      apiGroup: z.string().optional(),
                                      kind: z.string().default(""),
                                      name: z.string().default(""),
                                    })
                                    .optional(),
                                  dataSourceRef: z
                                    .object({
                                      apiGroup: z.string().optional(),
                                      kind: z.string().default(""),
                                      name: z.string().default(""),
                                      namespace: z.string().optional(),
                                    })
                                    .optional(),
                                  resources: z
                                    .object({
                                      claims: z
                                        .array(
                                          z
                                            .object({
                                              name: z.string().default(""),
                                            })
                                            .default({}),
                                        )
                                        .optional(),
                                      limits: z
                                        .record(z.string().default({}))
                                        .optional(),
                                      requests: z
                                        .record(z.string().default({}))
                                        .optional(),
                                    })
                                    .default({}),
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
                                  storageClassName: z.string().optional(),
                                  volumeMode: z.string().optional(),
                                  volumeName: z.string().optional(),
                                })
                                .default({}),
                            })
                            .optional(),
                        })
                        .optional(),
                      fc: z
                        .object({
                          fsType: z.string().optional(),
                          lun: z.number().optional(),
                          readOnly: z.boolean().optional(),
                          targetWWNs: z
                            .array(z.string().default(""))
                            .optional(),
                          wwids: z.array(z.string().default("")).optional(),
                        })
                        .optional(),
                      flexVolume: z
                        .object({
                          driver: z.string().default(""),
                          fsType: z.string().optional(),
                          options: z.record(z.string().default("")).optional(),
                          readOnly: z.boolean().optional(),
                          secretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                        })
                        .optional(),
                      flocker: z
                        .object({
                          datasetName: z.string().optional(),
                          datasetUUID: z.string().optional(),
                        })
                        .optional(),
                      gcePersistentDisk: z
                        .object({
                          fsType: z.string().optional(),
                          partition: z.number().optional(),
                          pdName: z.string().default(""),
                          readOnly: z.boolean().optional(),
                        })
                        .optional(),
                      gitRepo: z
                        .object({
                          directory: z.string().optional(),
                          repository: z.string().default(""),
                          revision: z.string().optional(),
                        })
                        .optional(),
                      glusterfs: z
                        .object({
                          endpoints: z.string().default(""),
                          path: z.string().default(""),
                          readOnly: z.boolean().optional(),
                        })
                        .optional(),
                      hostPath: z
                        .object({
                          path: z.string().default(""),
                          type: z.string().optional(),
                        })
                        .optional(),
                      iscsi: z
                        .object({
                          chapAuthDiscovery: z.boolean().optional(),
                          chapAuthSession: z.boolean().optional(),
                          fsType: z.string().optional(),
                          initiatorName: z.string().optional(),
                          iqn: z.string().default(""),
                          iscsiInterface: z.string().optional(),
                          lun: z.number().default(0),
                          portals: z.array(z.string().default("")).optional(),
                          readOnly: z.boolean().optional(),
                          secretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                          targetPortal: z.string().default(""),
                        })
                        .optional(),
                      name: z.string().default(""),
                      nfs: z
                        .object({
                          path: z.string().default(""),
                          readOnly: z.boolean().optional(),
                          server: z.string().default(""),
                        })
                        .optional(),
                      persistentVolumeClaim: z
                        .object({
                          claimName: z.string().default(""),
                          readOnly: z.boolean().optional(),
                        })
                        .optional(),
                      photonPersistentDisk: z
                        .object({
                          fsType: z.string().optional(),
                          pdID: z.string().default(""),
                        })
                        .optional(),
                      portworxVolume: z
                        .object({
                          fsType: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          volumeID: z.string().default(""),
                        })
                        .optional(),
                      projected: z
                        .object({
                          defaultMode: z.number().optional(),
                          sources: z
                            .array(
                              z
                                .object({
                                  configMap: z
                                    .object({
                                      items: z
                                        .array(
                                          z
                                            .object({
                                              key: z.string().default(""),
                                              mode: z.number().optional(),
                                              path: z.string().default(""),
                                            })
                                            .default({}),
                                        )
                                        .optional(),
                                      name: z.string().optional(),
                                      optional: z.boolean().optional(),
                                    })
                                    .optional(),
                                  downwardAPI: z
                                    .object({
                                      items: z
                                        .array(
                                          z
                                            .object({
                                              fieldRef: z
                                                .object({
                                                  apiVersion: z
                                                    .string()
                                                    .optional(),
                                                  fieldPath: z
                                                    .string()
                                                    .default(""),
                                                })
                                                .optional(),
                                              mode: z.number().optional(),
                                              path: z.string().default(""),
                                              resourceFieldRef: z
                                                .object({
                                                  containerName: z
                                                    .string()
                                                    .optional(),
                                                  divisor: z
                                                    .string()
                                                    .default({}),
                                                  resource: z
                                                    .string()
                                                    .default(""),
                                                })
                                                .optional(),
                                            })
                                            .default({}),
                                        )
                                        .optional(),
                                    })
                                    .optional(),
                                  secret: z
                                    .object({
                                      items: z
                                        .array(
                                          z
                                            .object({
                                              key: z.string().default(""),
                                              mode: z.number().optional(),
                                              path: z.string().default(""),
                                            })
                                            .default({}),
                                        )
                                        .optional(),
                                      name: z.string().optional(),
                                      optional: z.boolean().optional(),
                                    })
                                    .optional(),
                                  serviceAccountToken: z
                                    .object({
                                      audience: z.string().optional(),
                                      expirationSeconds: z.number().optional(),
                                      path: z.string().default(""),
                                    })
                                    .optional(),
                                })
                                .default({}),
                            )
                            .optional(),
                        })
                        .optional(),
                      quobyte: z
                        .object({
                          group: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          registry: z.string().default(""),
                          tenant: z.string().optional(),
                          user: z.string().optional(),
                          volume: z.string().default(""),
                        })
                        .optional(),
                      rbd: z
                        .object({
                          fsType: z.string().optional(),
                          image: z.string().default(""),
                          keyring: z.string().optional(),
                          monitors: z.array(z.string().default("")),
                          pool: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          secretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                          user: z.string().optional(),
                        })
                        .optional(),
                      scaleIO: z
                        .object({
                          fsType: z.string().optional(),
                          gateway: z.string().default(""),
                          protectionDomain: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          secretRef: z.object({
                            name: z.string().optional(),
                          }),
                          sslEnabled: z.boolean().optional(),
                          storageMode: z.string().optional(),
                          storagePool: z.string().optional(),
                          system: z.string().default(""),
                          volumeName: z.string().optional(),
                        })
                        .optional(),
                      secret: z
                        .object({
                          defaultMode: z.number().optional(),
                          items: z
                            .array(
                              z
                                .object({
                                  key: z.string().default(""),
                                  mode: z.number().optional(),
                                  path: z.string().default(""),
                                })
                                .default({}),
                            )
                            .optional(),
                          optional: z.boolean().optional(),
                          secretName: z.string().optional(),
                        })
                        .optional(),
                      storageos: z
                        .object({
                          fsType: z.string().optional(),
                          readOnly: z.boolean().optional(),
                          secretRef: z
                            .object({
                              name: z.string().optional(),
                            })
                            .optional(),
                          volumeName: z.string().optional(),
                          volumeNamespace: z.string().optional(),
                        })
                        .optional(),
                      vsphereVolume: z
                        .object({
                          fsType: z.string().optional(),
                          storagePolicyID: z.string().optional(),
                          storagePolicyName: z.string().optional(),
                          volumePath: z.string().default(""),
                        })
                        .optional(),
                    })
                    .default({}),
                )
                .optional(),
            })
            .default({}),
        })
        .optional(),
    },
    status: {
      availableReplicas: z.number().optional(),
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
      fullyLabeledReplicas: z.number().optional(),
      observedGeneration: z.number().optional(),
      readyReplicas: z.number().optional(),
      replicas: z.number().default(0),
    },
  },
);

export const resourceQuota = resource("core/v1", "ResourceQuota", {
  scope: "Namespaced",
  spec: {
    hard: z.record(z.string().default({})).optional(),
    scopeSelector: z
      .object({
        matchExpressions: z
          .array(
            z
              .object({
                operator: z
                  .enum(["DoesNotExist", "Exists", "In", "NotIn"])
                  .default(""),
                scopeName: z
                  .enum([
                    "BestEffort",
                    "CrossNamespacePodAffinity",
                    "NotBestEffort",
                    "NotTerminating",
                    "PriorityClass",
                    "Terminating",
                  ])
                  .default(""),
                values: z.array(z.string().default("")).optional(),
              })
              .default({}),
          )
          .optional(),
      })
      .optional(),
    scopes: z.array(z.string().default("")).optional(),
  },
  status: {
    hard: z.record(z.string().default({})).optional(),
    used: z.record(z.string().default({})).optional(),
  },
});

export const secret = resource("core/v1", "Secret", {
  scope: "Namespaced",
  spec: {},
});

export const serviceAccount = resource("core/v1", "ServiceAccount", {
  scope: "Namespaced",
  spec: {},
});

export const service = resource("core/v1", "Service", {
  scope: "Namespaced",
  spec: {
    allocateLoadBalancerNodePorts: z.boolean().optional(),
    clusterIP: z.string().optional(),
    clusterIPs: z.array(z.string().default("")).optional(),
    externalIPs: z.array(z.string().default("")).optional(),
    externalName: z.string().optional(),
    externalTrafficPolicy: z.enum(["Cluster", "Local"]).optional(),
    healthCheckNodePort: z.number().optional(),
    internalTrafficPolicy: z.string().optional(),
    ipFamilies: z.array(z.string().default("")).optional(),
    ipFamilyPolicy: z.string().optional(),
    loadBalancerClass: z.string().optional(),
    loadBalancerIP: z.string().optional(),
    loadBalancerSourceRanges: z.array(z.string().default("")).optional(),
    ports: z
      .array(
        z
          .object({
            appProtocol: z.string().optional(),
            name: z.string().optional(),
            nodePort: z.number().optional(),
            port: z.number().default(0),
            protocol: z.enum(["SCTP", "TCP", "UDP"]).default("TCP"),
            targetPort: z.string().default({}),
          })
          .default({}),
      )
      .optional(),
    publishNotReadyAddresses: z.boolean().optional(),
    selector: z.record(z.string().default("")).optional(),
    sessionAffinity: z.enum(["ClientIP", "None"]).optional(),
    sessionAffinityConfig: z
      .object({
        clientIP: z
          .object({
            timeoutSeconds: z.number().optional(),
          })
          .optional(),
      })
      .optional(),
    type: z
      .enum(["ClusterIP", "ExternalName", "LoadBalancer", "NodePort"])
      .optional(),
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
