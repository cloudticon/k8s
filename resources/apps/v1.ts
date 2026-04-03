/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const daemonSet = resource("apps/v1", "DaemonSet", {
  scope: "Namespaced",
  spec: {
    minReadySeconds: z.number().optional(),
    revisionHistoryLimit: z.number().optional(),
    selector: z.object({
      matchExpressions: z.array(z.object({
        key: z.string().default(""),
        operator: z.string().default(""),
        values: z.array(z.string().default("")).optional(),
      }).default({})).optional(),
      matchLabels: z.record(z.string().default("")).optional(),
    }),
    template: z.object({
      metadata: z.object({
        annotations: z.record(z.string().default("")).optional(),
        creationTimestamp: z.string().default({}),
        deletionGracePeriodSeconds: z.number().optional(),
        deletionTimestamp: z.string().optional(),
        finalizers: z.array(z.string().default("")).optional(),
        generateName: z.string().optional(),
        generation: z.number().optional(),
        labels: z.record(z.string().default("")).optional(),
        managedFields: z.array(z.object({
          apiVersion: z.string().optional(),
          fieldsType: z.string().optional(),
          fieldsV1: z.record(z.string()).optional(),
          manager: z.string().optional(),
          operation: z.string().optional(),
          subresource: z.string().optional(),
          time: z.string().optional(),
        }).default({})).optional(),
        name: z.string().optional(),
        namespace: z.string().optional(),
        ownerReferences: z.array(z.object({
          apiVersion: z.string().default(""),
          blockOwnerDeletion: z.boolean().optional(),
          controller: z.boolean().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          uid: z.string().default(""),
        }).default({})).optional(),
        resourceVersion: z.string().optional(),
        selfLink: z.string().optional(),
        uid: z.string().optional(),
      }).default({}),
      spec: z.object({
        activeDeadlineSeconds: z.number().optional(),
        affinity: z.object({
          nodeAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              preference: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.object({
              nodeSelectorTerms: z.array(z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({})),
            }).optional(),
          }).optional(),
          podAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
          podAntiAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
        }).optional(),
        automountServiceAccountToken: z.boolean().optional(),
        containers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})),
        dnsConfig: z.object({
          nameservers: z.array(z.string().default("")).optional(),
          options: z.array(z.object({
            name: z.string().optional(),
            value: z.string().optional(),
          }).default({})).optional(),
          searches: z.array(z.string().default("")).optional(),
        }).optional(),
        dnsPolicy: z.enum(["ClusterFirst","ClusterFirstWithHostNet","Default","None"]).optional(),
        enableServiceLinks: z.boolean().optional(),
        ephemeralContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          targetContainerName: z.string().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        hostAliases: z.array(z.object({
          hostnames: z.array(z.string().default("")).optional(),
          ip: z.string().optional(),
        }).default({})).optional(),
        hostIPC: z.boolean().optional(),
        hostNetwork: z.boolean().optional(),
        hostPID: z.boolean().optional(),
        hostUsers: z.boolean().optional(),
        hostname: z.string().optional(),
        imagePullSecrets: z.array(z.object({
          name: z.string().optional(),
        }).default({})).optional(),
        initContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        nodeName: z.string().optional(),
        nodeSelector: z.record(z.string().default("")).optional(),
        os: z.object({
          name: z.string().default(""),
        }).optional(),
        overhead: z.record(z.string().default({})).optional(),
        preemptionPolicy: z.string().optional(),
        priority: z.number().optional(),
        priorityClassName: z.string().optional(),
        readinessGates: z.array(z.object({
          conditionType: z.string().default(""),
        }).default({})).optional(),
        resourceClaims: z.array(z.object({
          name: z.string().default(""),
          source: z.object({
            resourceClaimName: z.string().optional(),
            resourceClaimTemplateName: z.string().optional(),
          }).default({}),
        }).default({})).optional(),
        restartPolicy: z.enum(["Always","Never","OnFailure"]).optional(),
        runtimeClassName: z.string().optional(),
        schedulerName: z.string().optional(),
        schedulingGates: z.array(z.object({
          name: z.string().default(""),
        }).default({})).optional(),
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
            type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
          }).optional(),
          supplementalGroups: z.array(z.number().default(0)).optional(),
          sysctls: z.array(z.object({
            name: z.string().default(""),
            value: z.string().default(""),
          }).default({})).optional(),
          windowsOptions: z.object({
            gmsaCredentialSpec: z.string().optional(),
            gmsaCredentialSpecName: z.string().optional(),
            hostProcess: z.boolean().optional(),
            runAsUserName: z.string().optional(),
          }).optional(),
        }).optional(),
        serviceAccount: z.string().optional(),
        serviceAccountName: z.string().optional(),
        setHostnameAsFQDN: z.boolean().optional(),
        shareProcessNamespace: z.boolean().optional(),
        subdomain: z.string().optional(),
        terminationGracePeriodSeconds: z.number().optional(),
        tolerations: z.array(z.object({
          effect: z.enum(["NoExecute","NoSchedule","PreferNoSchedule"]).optional(),
          key: z.string().optional(),
          operator: z.enum(["Equal","Exists"]).optional(),
          tolerationSeconds: z.number().optional(),
          value: z.string().optional(),
        }).default({})).optional(),
        topologySpreadConstraints: z.array(z.object({
          labelSelector: z.object({
            matchExpressions: z.array(z.object({
              key: z.string().default(""),
              operator: z.string().default(""),
              values: z.array(z.string().default("")).optional(),
            }).default({})).optional(),
            matchLabels: z.record(z.string().default("")).optional(),
          }).optional(),
          matchLabelKeys: z.array(z.string().default("")).optional(),
          maxSkew: z.number().default(0),
          minDomains: z.number().optional(),
          nodeAffinityPolicy: z.string().optional(),
          nodeTaintsPolicy: z.string().optional(),
          topologyKey: z.string().default(""),
          whenUnsatisfiable: z.enum(["DoNotSchedule","ScheduleAnyway"]).default(""),
        }).default({})).optional(),
        volumes: z.array(z.object({
          awsElasticBlockStore: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          azureDisk: z.object({
            cachingMode: z.string().optional(),
            diskName: z.string().default(""),
            diskURI: z.string().default(""),
            fsType: z.string().optional(),
            kind: z.string().optional(),
            readOnly: z.boolean().optional(),
          }).optional(),
          azureFile: z.object({
            readOnly: z.boolean().optional(),
            secretName: z.string().default(""),
            shareName: z.string().default(""),
          }).optional(),
          cephfs: z.object({
            monitors: z.array(z.string().default("")),
            path: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretFile: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          cinder: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeID: z.string().default(""),
          }).optional(),
          configMap: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            name: z.string().optional(),
            optional: z.boolean().optional(),
          }).optional(),
          csi: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            nodePublishSecretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            readOnly: z.boolean().optional(),
            volumeAttributes: z.record(z.string().default("")).optional(),
          }).optional(),
          downwardAPI: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              mode: z.number().optional(),
              path: z.string().default(""),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          emptyDir: z.object({
            medium: z.string().optional(),
            sizeLimit: z.string().optional(),
          }).optional(),
          ephemeral: z.object({
            volumeClaimTemplate: z.object({
              metadata: z.object({
                annotations: z.record(z.string().default("")).optional(),
                creationTimestamp: z.string().default({}),
                deletionGracePeriodSeconds: z.number().optional(),
                deletionTimestamp: z.string().optional(),
                finalizers: z.array(z.string().default("")).optional(),
                generateName: z.string().optional(),
                generation: z.number().optional(),
                labels: z.record(z.string().default("")).optional(),
                managedFields: z.array(z.object({
                  apiVersion: z.string().optional(),
                  fieldsType: z.string().optional(),
                  fieldsV1: z.record(z.string()).optional(),
                  manager: z.string().optional(),
                  operation: z.string().optional(),
                  subresource: z.string().optional(),
                  time: z.string().optional(),
                }).default({})).optional(),
                name: z.string().optional(),
                namespace: z.string().optional(),
                ownerReferences: z.array(z.object({
                  apiVersion: z.string().default(""),
                  blockOwnerDeletion: z.boolean().optional(),
                  controller: z.boolean().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  uid: z.string().default(""),
                }).default({})).optional(),
                resourceVersion: z.string().optional(),
                selfLink: z.string().optional(),
                uid: z.string().optional(),
              }).default({}),
              spec: z.object({
                accessModes: z.array(z.string().default("")).optional(),
                dataSource: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                }).optional(),
                dataSourceRef: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  namespace: z.string().optional(),
                }).optional(),
                resources: z.object({
                  claims: z.array(z.object({
                    name: z.string().default(""),
                  }).default({})).optional(),
                  limits: z.record(z.string().default({})).optional(),
                  requests: z.record(z.string().default({})).optional(),
                }).default({}),
                selector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                storageClassName: z.string().optional(),
                volumeMode: z.string().optional(),
                volumeName: z.string().optional(),
              }).default({}),
            }).optional(),
          }).optional(),
          fc: z.object({
            fsType: z.string().optional(),
            lun: z.number().optional(),
            readOnly: z.boolean().optional(),
            targetWWNs: z.array(z.string().default("")).optional(),
            wwids: z.array(z.string().default("")).optional(),
          }).optional(),
          flexVolume: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            options: z.record(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
          }).optional(),
          flocker: z.object({
            datasetName: z.string().optional(),
            datasetUUID: z.string().optional(),
          }).optional(),
          gcePersistentDisk: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            pdName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          gitRepo: z.object({
            directory: z.string().optional(),
            repository: z.string().default(""),
            revision: z.string().optional(),
          }).optional(),
          glusterfs: z.object({
            endpoints: z.string().default(""),
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          hostPath: z.object({
            path: z.string().default(""),
            type: z.string().optional(),
          }).optional(),
          iscsi: z.object({
            chapAuthDiscovery: z.boolean().optional(),
            chapAuthSession: z.boolean().optional(),
            fsType: z.string().optional(),
            initiatorName: z.string().optional(),
            iqn: z.string().default(""),
            iscsiInterface: z.string().optional(),
            lun: z.number().default(0),
            portals: z.array(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            targetPortal: z.string().default(""),
          }).optional(),
          name: z.string().default(""),
          nfs: z.object({
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
            server: z.string().default(""),
          }).optional(),
          persistentVolumeClaim: z.object({
            claimName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          photonPersistentDisk: z.object({
            fsType: z.string().optional(),
            pdID: z.string().default(""),
          }).optional(),
          portworxVolume: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          projected: z.object({
            defaultMode: z.number().optional(),
            sources: z.array(z.object({
              configMap: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              downwardAPI: z.object({
                items: z.array(z.object({
                  fieldRef: z.object({
                    apiVersion: z.string().optional(),
                    fieldPath: z.string().default(""),
                  }).optional(),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                  resourceFieldRef: z.object({
                    containerName: z.string().optional(),
                    divisor: z.string().default({}),
                    resource: z.string().default(""),
                  }).optional(),
                }).default({})).optional(),
              }).optional(),
              secret: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              serviceAccountToken: z.object({
                audience: z.string().optional(),
                expirationSeconds: z.number().optional(),
                path: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          quobyte: z.object({
            group: z.string().optional(),
            readOnly: z.boolean().optional(),
            registry: z.string().default(""),
            tenant: z.string().optional(),
            user: z.string().optional(),
            volume: z.string().default(""),
          }).optional(),
          rbd: z.object({
            fsType: z.string().optional(),
            image: z.string().default(""),
            keyring: z.string().optional(),
            monitors: z.array(z.string().default("")),
            pool: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          scaleIO: z.object({
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
          }).optional(),
          secret: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            optional: z.boolean().optional(),
            secretName: z.string().optional(),
          }).optional(),
          storageos: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeName: z.string().optional(),
            volumeNamespace: z.string().optional(),
          }).optional(),
          vsphereVolume: z.object({
            fsType: z.string().optional(),
            storagePolicyID: z.string().optional(),
            storagePolicyName: z.string().optional(),
            volumePath: z.string().default(""),
          }).optional(),
        }).default({})).optional(),
      }).default({}),
    }).default({}),
    updateStrategy: z.object({
      rollingUpdate: z.object({
        maxSurge: z.string().optional(),
        maxUnavailable: z.string().optional(),
      }).optional(),
      type: z.enum(["OnDelete","RollingUpdate"]).optional(),
    }).default({}),
  },
  status: {
    collisionCount: z.number().optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().default({}),
      message: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().default(""),
      type: z.string().default(""),
    }).default({})).optional(),
    currentNumberScheduled: z.number().default(0),
    desiredNumberScheduled: z.number().default(0),
    numberAvailable: z.number().optional(),
    numberMisscheduled: z.number().default(0),
    numberReady: z.number().default(0),
    numberUnavailable: z.number().optional(),
    observedGeneration: z.number().optional(),
    updatedNumberScheduled: z.number().optional(),
  },
});

export const deployment = resource("apps/v1", "Deployment", {
  scope: "Namespaced",
  spec: {
    minReadySeconds: z.number().optional(),
    paused: z.boolean().optional(),
    progressDeadlineSeconds: z.number().optional(),
    replicas: z.number().optional(),
    revisionHistoryLimit: z.number().optional(),
    selector: z.object({
      matchExpressions: z.array(z.object({
        key: z.string().default(""),
        operator: z.string().default(""),
        values: z.array(z.string().default("")).optional(),
      }).default({})).optional(),
      matchLabels: z.record(z.string().default("")).optional(),
    }),
    strategy: z.object({
      rollingUpdate: z.object({
        maxSurge: z.string().optional(),
        maxUnavailable: z.string().optional(),
      }).optional(),
      type: z.enum(["Recreate","RollingUpdate"]).optional(),
    }).default({}),
    template: z.object({
      metadata: z.object({
        annotations: z.record(z.string().default("")).optional(),
        creationTimestamp: z.string().default({}),
        deletionGracePeriodSeconds: z.number().optional(),
        deletionTimestamp: z.string().optional(),
        finalizers: z.array(z.string().default("")).optional(),
        generateName: z.string().optional(),
        generation: z.number().optional(),
        labels: z.record(z.string().default("")).optional(),
        managedFields: z.array(z.object({
          apiVersion: z.string().optional(),
          fieldsType: z.string().optional(),
          fieldsV1: z.record(z.string()).optional(),
          manager: z.string().optional(),
          operation: z.string().optional(),
          subresource: z.string().optional(),
          time: z.string().optional(),
        }).default({})).optional(),
        name: z.string().optional(),
        namespace: z.string().optional(),
        ownerReferences: z.array(z.object({
          apiVersion: z.string().default(""),
          blockOwnerDeletion: z.boolean().optional(),
          controller: z.boolean().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          uid: z.string().default(""),
        }).default({})).optional(),
        resourceVersion: z.string().optional(),
        selfLink: z.string().optional(),
        uid: z.string().optional(),
      }).default({}),
      spec: z.object({
        activeDeadlineSeconds: z.number().optional(),
        affinity: z.object({
          nodeAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              preference: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.object({
              nodeSelectorTerms: z.array(z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({})),
            }).optional(),
          }).optional(),
          podAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
          podAntiAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
        }).optional(),
        automountServiceAccountToken: z.boolean().optional(),
        containers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})),
        dnsConfig: z.object({
          nameservers: z.array(z.string().default("")).optional(),
          options: z.array(z.object({
            name: z.string().optional(),
            value: z.string().optional(),
          }).default({})).optional(),
          searches: z.array(z.string().default("")).optional(),
        }).optional(),
        dnsPolicy: z.enum(["ClusterFirst","ClusterFirstWithHostNet","Default","None"]).optional(),
        enableServiceLinks: z.boolean().optional(),
        ephemeralContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          targetContainerName: z.string().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        hostAliases: z.array(z.object({
          hostnames: z.array(z.string().default("")).optional(),
          ip: z.string().optional(),
        }).default({})).optional(),
        hostIPC: z.boolean().optional(),
        hostNetwork: z.boolean().optional(),
        hostPID: z.boolean().optional(),
        hostUsers: z.boolean().optional(),
        hostname: z.string().optional(),
        imagePullSecrets: z.array(z.object({
          name: z.string().optional(),
        }).default({})).optional(),
        initContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        nodeName: z.string().optional(),
        nodeSelector: z.record(z.string().default("")).optional(),
        os: z.object({
          name: z.string().default(""),
        }).optional(),
        overhead: z.record(z.string().default({})).optional(),
        preemptionPolicy: z.string().optional(),
        priority: z.number().optional(),
        priorityClassName: z.string().optional(),
        readinessGates: z.array(z.object({
          conditionType: z.string().default(""),
        }).default({})).optional(),
        resourceClaims: z.array(z.object({
          name: z.string().default(""),
          source: z.object({
            resourceClaimName: z.string().optional(),
            resourceClaimTemplateName: z.string().optional(),
          }).default({}),
        }).default({})).optional(),
        restartPolicy: z.enum(["Always","Never","OnFailure"]).optional(),
        runtimeClassName: z.string().optional(),
        schedulerName: z.string().optional(),
        schedulingGates: z.array(z.object({
          name: z.string().default(""),
        }).default({})).optional(),
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
            type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
          }).optional(),
          supplementalGroups: z.array(z.number().default(0)).optional(),
          sysctls: z.array(z.object({
            name: z.string().default(""),
            value: z.string().default(""),
          }).default({})).optional(),
          windowsOptions: z.object({
            gmsaCredentialSpec: z.string().optional(),
            gmsaCredentialSpecName: z.string().optional(),
            hostProcess: z.boolean().optional(),
            runAsUserName: z.string().optional(),
          }).optional(),
        }).optional(),
        serviceAccount: z.string().optional(),
        serviceAccountName: z.string().optional(),
        setHostnameAsFQDN: z.boolean().optional(),
        shareProcessNamespace: z.boolean().optional(),
        subdomain: z.string().optional(),
        terminationGracePeriodSeconds: z.number().optional(),
        tolerations: z.array(z.object({
          effect: z.enum(["NoExecute","NoSchedule","PreferNoSchedule"]).optional(),
          key: z.string().optional(),
          operator: z.enum(["Equal","Exists"]).optional(),
          tolerationSeconds: z.number().optional(),
          value: z.string().optional(),
        }).default({})).optional(),
        topologySpreadConstraints: z.array(z.object({
          labelSelector: z.object({
            matchExpressions: z.array(z.object({
              key: z.string().default(""),
              operator: z.string().default(""),
              values: z.array(z.string().default("")).optional(),
            }).default({})).optional(),
            matchLabels: z.record(z.string().default("")).optional(),
          }).optional(),
          matchLabelKeys: z.array(z.string().default("")).optional(),
          maxSkew: z.number().default(0),
          minDomains: z.number().optional(),
          nodeAffinityPolicy: z.string().optional(),
          nodeTaintsPolicy: z.string().optional(),
          topologyKey: z.string().default(""),
          whenUnsatisfiable: z.enum(["DoNotSchedule","ScheduleAnyway"]).default(""),
        }).default({})).optional(),
        volumes: z.array(z.object({
          awsElasticBlockStore: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          azureDisk: z.object({
            cachingMode: z.string().optional(),
            diskName: z.string().default(""),
            diskURI: z.string().default(""),
            fsType: z.string().optional(),
            kind: z.string().optional(),
            readOnly: z.boolean().optional(),
          }).optional(),
          azureFile: z.object({
            readOnly: z.boolean().optional(),
            secretName: z.string().default(""),
            shareName: z.string().default(""),
          }).optional(),
          cephfs: z.object({
            monitors: z.array(z.string().default("")),
            path: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretFile: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          cinder: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeID: z.string().default(""),
          }).optional(),
          configMap: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            name: z.string().optional(),
            optional: z.boolean().optional(),
          }).optional(),
          csi: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            nodePublishSecretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            readOnly: z.boolean().optional(),
            volumeAttributes: z.record(z.string().default("")).optional(),
          }).optional(),
          downwardAPI: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              mode: z.number().optional(),
              path: z.string().default(""),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          emptyDir: z.object({
            medium: z.string().optional(),
            sizeLimit: z.string().optional(),
          }).optional(),
          ephemeral: z.object({
            volumeClaimTemplate: z.object({
              metadata: z.object({
                annotations: z.record(z.string().default("")).optional(),
                creationTimestamp: z.string().default({}),
                deletionGracePeriodSeconds: z.number().optional(),
                deletionTimestamp: z.string().optional(),
                finalizers: z.array(z.string().default("")).optional(),
                generateName: z.string().optional(),
                generation: z.number().optional(),
                labels: z.record(z.string().default("")).optional(),
                managedFields: z.array(z.object({
                  apiVersion: z.string().optional(),
                  fieldsType: z.string().optional(),
                  fieldsV1: z.record(z.string()).optional(),
                  manager: z.string().optional(),
                  operation: z.string().optional(),
                  subresource: z.string().optional(),
                  time: z.string().optional(),
                }).default({})).optional(),
                name: z.string().optional(),
                namespace: z.string().optional(),
                ownerReferences: z.array(z.object({
                  apiVersion: z.string().default(""),
                  blockOwnerDeletion: z.boolean().optional(),
                  controller: z.boolean().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  uid: z.string().default(""),
                }).default({})).optional(),
                resourceVersion: z.string().optional(),
                selfLink: z.string().optional(),
                uid: z.string().optional(),
              }).default({}),
              spec: z.object({
                accessModes: z.array(z.string().default("")).optional(),
                dataSource: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                }).optional(),
                dataSourceRef: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  namespace: z.string().optional(),
                }).optional(),
                resources: z.object({
                  claims: z.array(z.object({
                    name: z.string().default(""),
                  }).default({})).optional(),
                  limits: z.record(z.string().default({})).optional(),
                  requests: z.record(z.string().default({})).optional(),
                }).default({}),
                selector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                storageClassName: z.string().optional(),
                volumeMode: z.string().optional(),
                volumeName: z.string().optional(),
              }).default({}),
            }).optional(),
          }).optional(),
          fc: z.object({
            fsType: z.string().optional(),
            lun: z.number().optional(),
            readOnly: z.boolean().optional(),
            targetWWNs: z.array(z.string().default("")).optional(),
            wwids: z.array(z.string().default("")).optional(),
          }).optional(),
          flexVolume: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            options: z.record(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
          }).optional(),
          flocker: z.object({
            datasetName: z.string().optional(),
            datasetUUID: z.string().optional(),
          }).optional(),
          gcePersistentDisk: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            pdName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          gitRepo: z.object({
            directory: z.string().optional(),
            repository: z.string().default(""),
            revision: z.string().optional(),
          }).optional(),
          glusterfs: z.object({
            endpoints: z.string().default(""),
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          hostPath: z.object({
            path: z.string().default(""),
            type: z.string().optional(),
          }).optional(),
          iscsi: z.object({
            chapAuthDiscovery: z.boolean().optional(),
            chapAuthSession: z.boolean().optional(),
            fsType: z.string().optional(),
            initiatorName: z.string().optional(),
            iqn: z.string().default(""),
            iscsiInterface: z.string().optional(),
            lun: z.number().default(0),
            portals: z.array(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            targetPortal: z.string().default(""),
          }).optional(),
          name: z.string().default(""),
          nfs: z.object({
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
            server: z.string().default(""),
          }).optional(),
          persistentVolumeClaim: z.object({
            claimName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          photonPersistentDisk: z.object({
            fsType: z.string().optional(),
            pdID: z.string().default(""),
          }).optional(),
          portworxVolume: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          projected: z.object({
            defaultMode: z.number().optional(),
            sources: z.array(z.object({
              configMap: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              downwardAPI: z.object({
                items: z.array(z.object({
                  fieldRef: z.object({
                    apiVersion: z.string().optional(),
                    fieldPath: z.string().default(""),
                  }).optional(),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                  resourceFieldRef: z.object({
                    containerName: z.string().optional(),
                    divisor: z.string().default({}),
                    resource: z.string().default(""),
                  }).optional(),
                }).default({})).optional(),
              }).optional(),
              secret: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              serviceAccountToken: z.object({
                audience: z.string().optional(),
                expirationSeconds: z.number().optional(),
                path: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          quobyte: z.object({
            group: z.string().optional(),
            readOnly: z.boolean().optional(),
            registry: z.string().default(""),
            tenant: z.string().optional(),
            user: z.string().optional(),
            volume: z.string().default(""),
          }).optional(),
          rbd: z.object({
            fsType: z.string().optional(),
            image: z.string().default(""),
            keyring: z.string().optional(),
            monitors: z.array(z.string().default("")),
            pool: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          scaleIO: z.object({
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
          }).optional(),
          secret: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            optional: z.boolean().optional(),
            secretName: z.string().optional(),
          }).optional(),
          storageos: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeName: z.string().optional(),
            volumeNamespace: z.string().optional(),
          }).optional(),
          vsphereVolume: z.object({
            fsType: z.string().optional(),
            storagePolicyID: z.string().optional(),
            storagePolicyName: z.string().optional(),
            volumePath: z.string().default(""),
          }).optional(),
        }).default({})).optional(),
      }).default({}),
    }).default({}),
  },
  status: {
    availableReplicas: z.number().optional(),
    collisionCount: z.number().optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().default({}),
      lastUpdateTime: z.string().default({}),
      message: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().default(""),
      type: z.string().default(""),
    }).default({})).optional(),
    observedGeneration: z.number().optional(),
    readyReplicas: z.number().optional(),
    replicas: z.number().optional(),
    unavailableReplicas: z.number().optional(),
    updatedReplicas: z.number().optional(),
  },
});

export const replicaSet = resource("apps/v1", "ReplicaSet", {
  scope: "Namespaced",
  spec: {
    minReadySeconds: z.number().optional(),
    replicas: z.number().optional(),
    selector: z.object({
      matchExpressions: z.array(z.object({
        key: z.string().default(""),
        operator: z.string().default(""),
        values: z.array(z.string().default("")).optional(),
      }).default({})).optional(),
      matchLabels: z.record(z.string().default("")).optional(),
    }),
    template: z.object({
      metadata: z.object({
        annotations: z.record(z.string().default("")).optional(),
        creationTimestamp: z.string().default({}),
        deletionGracePeriodSeconds: z.number().optional(),
        deletionTimestamp: z.string().optional(),
        finalizers: z.array(z.string().default("")).optional(),
        generateName: z.string().optional(),
        generation: z.number().optional(),
        labels: z.record(z.string().default("")).optional(),
        managedFields: z.array(z.object({
          apiVersion: z.string().optional(),
          fieldsType: z.string().optional(),
          fieldsV1: z.record(z.string()).optional(),
          manager: z.string().optional(),
          operation: z.string().optional(),
          subresource: z.string().optional(),
          time: z.string().optional(),
        }).default({})).optional(),
        name: z.string().optional(),
        namespace: z.string().optional(),
        ownerReferences: z.array(z.object({
          apiVersion: z.string().default(""),
          blockOwnerDeletion: z.boolean().optional(),
          controller: z.boolean().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          uid: z.string().default(""),
        }).default({})).optional(),
        resourceVersion: z.string().optional(),
        selfLink: z.string().optional(),
        uid: z.string().optional(),
      }).default({}),
      spec: z.object({
        activeDeadlineSeconds: z.number().optional(),
        affinity: z.object({
          nodeAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              preference: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.object({
              nodeSelectorTerms: z.array(z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({})),
            }).optional(),
          }).optional(),
          podAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
          podAntiAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
        }).optional(),
        automountServiceAccountToken: z.boolean().optional(),
        containers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})),
        dnsConfig: z.object({
          nameservers: z.array(z.string().default("")).optional(),
          options: z.array(z.object({
            name: z.string().optional(),
            value: z.string().optional(),
          }).default({})).optional(),
          searches: z.array(z.string().default("")).optional(),
        }).optional(),
        dnsPolicy: z.enum(["ClusterFirst","ClusterFirstWithHostNet","Default","None"]).optional(),
        enableServiceLinks: z.boolean().optional(),
        ephemeralContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          targetContainerName: z.string().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        hostAliases: z.array(z.object({
          hostnames: z.array(z.string().default("")).optional(),
          ip: z.string().optional(),
        }).default({})).optional(),
        hostIPC: z.boolean().optional(),
        hostNetwork: z.boolean().optional(),
        hostPID: z.boolean().optional(),
        hostUsers: z.boolean().optional(),
        hostname: z.string().optional(),
        imagePullSecrets: z.array(z.object({
          name: z.string().optional(),
        }).default({})).optional(),
        initContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        nodeName: z.string().optional(),
        nodeSelector: z.record(z.string().default("")).optional(),
        os: z.object({
          name: z.string().default(""),
        }).optional(),
        overhead: z.record(z.string().default({})).optional(),
        preemptionPolicy: z.string().optional(),
        priority: z.number().optional(),
        priorityClassName: z.string().optional(),
        readinessGates: z.array(z.object({
          conditionType: z.string().default(""),
        }).default({})).optional(),
        resourceClaims: z.array(z.object({
          name: z.string().default(""),
          source: z.object({
            resourceClaimName: z.string().optional(),
            resourceClaimTemplateName: z.string().optional(),
          }).default({}),
        }).default({})).optional(),
        restartPolicy: z.enum(["Always","Never","OnFailure"]).optional(),
        runtimeClassName: z.string().optional(),
        schedulerName: z.string().optional(),
        schedulingGates: z.array(z.object({
          name: z.string().default(""),
        }).default({})).optional(),
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
            type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
          }).optional(),
          supplementalGroups: z.array(z.number().default(0)).optional(),
          sysctls: z.array(z.object({
            name: z.string().default(""),
            value: z.string().default(""),
          }).default({})).optional(),
          windowsOptions: z.object({
            gmsaCredentialSpec: z.string().optional(),
            gmsaCredentialSpecName: z.string().optional(),
            hostProcess: z.boolean().optional(),
            runAsUserName: z.string().optional(),
          }).optional(),
        }).optional(),
        serviceAccount: z.string().optional(),
        serviceAccountName: z.string().optional(),
        setHostnameAsFQDN: z.boolean().optional(),
        shareProcessNamespace: z.boolean().optional(),
        subdomain: z.string().optional(),
        terminationGracePeriodSeconds: z.number().optional(),
        tolerations: z.array(z.object({
          effect: z.enum(["NoExecute","NoSchedule","PreferNoSchedule"]).optional(),
          key: z.string().optional(),
          operator: z.enum(["Equal","Exists"]).optional(),
          tolerationSeconds: z.number().optional(),
          value: z.string().optional(),
        }).default({})).optional(),
        topologySpreadConstraints: z.array(z.object({
          labelSelector: z.object({
            matchExpressions: z.array(z.object({
              key: z.string().default(""),
              operator: z.string().default(""),
              values: z.array(z.string().default("")).optional(),
            }).default({})).optional(),
            matchLabels: z.record(z.string().default("")).optional(),
          }).optional(),
          matchLabelKeys: z.array(z.string().default("")).optional(),
          maxSkew: z.number().default(0),
          minDomains: z.number().optional(),
          nodeAffinityPolicy: z.string().optional(),
          nodeTaintsPolicy: z.string().optional(),
          topologyKey: z.string().default(""),
          whenUnsatisfiable: z.enum(["DoNotSchedule","ScheduleAnyway"]).default(""),
        }).default({})).optional(),
        volumes: z.array(z.object({
          awsElasticBlockStore: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          azureDisk: z.object({
            cachingMode: z.string().optional(),
            diskName: z.string().default(""),
            diskURI: z.string().default(""),
            fsType: z.string().optional(),
            kind: z.string().optional(),
            readOnly: z.boolean().optional(),
          }).optional(),
          azureFile: z.object({
            readOnly: z.boolean().optional(),
            secretName: z.string().default(""),
            shareName: z.string().default(""),
          }).optional(),
          cephfs: z.object({
            monitors: z.array(z.string().default("")),
            path: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretFile: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          cinder: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeID: z.string().default(""),
          }).optional(),
          configMap: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            name: z.string().optional(),
            optional: z.boolean().optional(),
          }).optional(),
          csi: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            nodePublishSecretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            readOnly: z.boolean().optional(),
            volumeAttributes: z.record(z.string().default("")).optional(),
          }).optional(),
          downwardAPI: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              mode: z.number().optional(),
              path: z.string().default(""),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          emptyDir: z.object({
            medium: z.string().optional(),
            sizeLimit: z.string().optional(),
          }).optional(),
          ephemeral: z.object({
            volumeClaimTemplate: z.object({
              metadata: z.object({
                annotations: z.record(z.string().default("")).optional(),
                creationTimestamp: z.string().default({}),
                deletionGracePeriodSeconds: z.number().optional(),
                deletionTimestamp: z.string().optional(),
                finalizers: z.array(z.string().default("")).optional(),
                generateName: z.string().optional(),
                generation: z.number().optional(),
                labels: z.record(z.string().default("")).optional(),
                managedFields: z.array(z.object({
                  apiVersion: z.string().optional(),
                  fieldsType: z.string().optional(),
                  fieldsV1: z.record(z.string()).optional(),
                  manager: z.string().optional(),
                  operation: z.string().optional(),
                  subresource: z.string().optional(),
                  time: z.string().optional(),
                }).default({})).optional(),
                name: z.string().optional(),
                namespace: z.string().optional(),
                ownerReferences: z.array(z.object({
                  apiVersion: z.string().default(""),
                  blockOwnerDeletion: z.boolean().optional(),
                  controller: z.boolean().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  uid: z.string().default(""),
                }).default({})).optional(),
                resourceVersion: z.string().optional(),
                selfLink: z.string().optional(),
                uid: z.string().optional(),
              }).default({}),
              spec: z.object({
                accessModes: z.array(z.string().default("")).optional(),
                dataSource: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                }).optional(),
                dataSourceRef: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  namespace: z.string().optional(),
                }).optional(),
                resources: z.object({
                  claims: z.array(z.object({
                    name: z.string().default(""),
                  }).default({})).optional(),
                  limits: z.record(z.string().default({})).optional(),
                  requests: z.record(z.string().default({})).optional(),
                }).default({}),
                selector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                storageClassName: z.string().optional(),
                volumeMode: z.string().optional(),
                volumeName: z.string().optional(),
              }).default({}),
            }).optional(),
          }).optional(),
          fc: z.object({
            fsType: z.string().optional(),
            lun: z.number().optional(),
            readOnly: z.boolean().optional(),
            targetWWNs: z.array(z.string().default("")).optional(),
            wwids: z.array(z.string().default("")).optional(),
          }).optional(),
          flexVolume: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            options: z.record(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
          }).optional(),
          flocker: z.object({
            datasetName: z.string().optional(),
            datasetUUID: z.string().optional(),
          }).optional(),
          gcePersistentDisk: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            pdName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          gitRepo: z.object({
            directory: z.string().optional(),
            repository: z.string().default(""),
            revision: z.string().optional(),
          }).optional(),
          glusterfs: z.object({
            endpoints: z.string().default(""),
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          hostPath: z.object({
            path: z.string().default(""),
            type: z.string().optional(),
          }).optional(),
          iscsi: z.object({
            chapAuthDiscovery: z.boolean().optional(),
            chapAuthSession: z.boolean().optional(),
            fsType: z.string().optional(),
            initiatorName: z.string().optional(),
            iqn: z.string().default(""),
            iscsiInterface: z.string().optional(),
            lun: z.number().default(0),
            portals: z.array(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            targetPortal: z.string().default(""),
          }).optional(),
          name: z.string().default(""),
          nfs: z.object({
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
            server: z.string().default(""),
          }).optional(),
          persistentVolumeClaim: z.object({
            claimName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          photonPersistentDisk: z.object({
            fsType: z.string().optional(),
            pdID: z.string().default(""),
          }).optional(),
          portworxVolume: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          projected: z.object({
            defaultMode: z.number().optional(),
            sources: z.array(z.object({
              configMap: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              downwardAPI: z.object({
                items: z.array(z.object({
                  fieldRef: z.object({
                    apiVersion: z.string().optional(),
                    fieldPath: z.string().default(""),
                  }).optional(),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                  resourceFieldRef: z.object({
                    containerName: z.string().optional(),
                    divisor: z.string().default({}),
                    resource: z.string().default(""),
                  }).optional(),
                }).default({})).optional(),
              }).optional(),
              secret: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              serviceAccountToken: z.object({
                audience: z.string().optional(),
                expirationSeconds: z.number().optional(),
                path: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          quobyte: z.object({
            group: z.string().optional(),
            readOnly: z.boolean().optional(),
            registry: z.string().default(""),
            tenant: z.string().optional(),
            user: z.string().optional(),
            volume: z.string().default(""),
          }).optional(),
          rbd: z.object({
            fsType: z.string().optional(),
            image: z.string().default(""),
            keyring: z.string().optional(),
            monitors: z.array(z.string().default("")),
            pool: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          scaleIO: z.object({
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
          }).optional(),
          secret: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            optional: z.boolean().optional(),
            secretName: z.string().optional(),
          }).optional(),
          storageos: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeName: z.string().optional(),
            volumeNamespace: z.string().optional(),
          }).optional(),
          vsphereVolume: z.object({
            fsType: z.string().optional(),
            storagePolicyID: z.string().optional(),
            storagePolicyName: z.string().optional(),
            volumePath: z.string().default(""),
          }).optional(),
        }).default({})).optional(),
      }).default({}),
    }).default({}),
  },
  status: {
    availableReplicas: z.number().optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().default({}),
      message: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().default(""),
      type: z.string().default(""),
    }).default({})).optional(),
    fullyLabeledReplicas: z.number().optional(),
    observedGeneration: z.number().optional(),
    readyReplicas: z.number().optional(),
    replicas: z.number().default(0),
  },
});

export const statefulSet = resource("apps/v1", "StatefulSet", {
  scope: "Namespaced",
  spec: {
    minReadySeconds: z.number().optional(),
    ordinals: z.object({
      start: z.number().default(0),
    }).optional(),
    persistentVolumeClaimRetentionPolicy: z.object({
      whenDeleted: z.string().optional(),
      whenScaled: z.string().optional(),
    }).optional(),
    podManagementPolicy: z.enum(["OrderedReady","Parallel"]).optional(),
    replicas: z.number().optional(),
    revisionHistoryLimit: z.number().optional(),
    selector: z.object({
      matchExpressions: z.array(z.object({
        key: z.string().default(""),
        operator: z.string().default(""),
        values: z.array(z.string().default("")).optional(),
      }).default({})).optional(),
      matchLabels: z.record(z.string().default("")).optional(),
    }),
    serviceName: z.string().default(""),
    template: z.object({
      metadata: z.object({
        annotations: z.record(z.string().default("")).optional(),
        creationTimestamp: z.string().default({}),
        deletionGracePeriodSeconds: z.number().optional(),
        deletionTimestamp: z.string().optional(),
        finalizers: z.array(z.string().default("")).optional(),
        generateName: z.string().optional(),
        generation: z.number().optional(),
        labels: z.record(z.string().default("")).optional(),
        managedFields: z.array(z.object({
          apiVersion: z.string().optional(),
          fieldsType: z.string().optional(),
          fieldsV1: z.record(z.string()).optional(),
          manager: z.string().optional(),
          operation: z.string().optional(),
          subresource: z.string().optional(),
          time: z.string().optional(),
        }).default({})).optional(),
        name: z.string().optional(),
        namespace: z.string().optional(),
        ownerReferences: z.array(z.object({
          apiVersion: z.string().default(""),
          blockOwnerDeletion: z.boolean().optional(),
          controller: z.boolean().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          uid: z.string().default(""),
        }).default({})).optional(),
        resourceVersion: z.string().optional(),
        selfLink: z.string().optional(),
        uid: z.string().optional(),
      }).default({}),
      spec: z.object({
        activeDeadlineSeconds: z.number().optional(),
        affinity: z.object({
          nodeAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              preference: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.object({
              nodeSelectorTerms: z.array(z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchFields: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.enum(["DoesNotExist","Exists","Gt","In","Lt","NotIn"]).default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
              }).default({})),
            }).optional(),
          }).optional(),
          podAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
          podAntiAffinity: z.object({
            preferredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              podAffinityTerm: z.object({
                labelSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaceSelector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                namespaces: z.array(z.string().default("")).optional(),
                topologyKey: z.string().default(""),
              }).default({}),
              weight: z.number().default(0),
            }).default({})).optional(),
            requiredDuringSchedulingIgnoredDuringExecution: z.array(z.object({
              labelSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaceSelector: z.object({
                matchExpressions: z.array(z.object({
                  key: z.string().default(""),
                  operator: z.string().default(""),
                  values: z.array(z.string().default("")).optional(),
                }).default({})).optional(),
                matchLabels: z.record(z.string().default("")).optional(),
              }).optional(),
              namespaces: z.array(z.string().default("")).optional(),
              topologyKey: z.string().default(""),
            }).default({})).optional(),
          }).optional(),
        }).optional(),
        automountServiceAccountToken: z.boolean().optional(),
        containers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})),
        dnsConfig: z.object({
          nameservers: z.array(z.string().default("")).optional(),
          options: z.array(z.object({
            name: z.string().optional(),
            value: z.string().optional(),
          }).default({})).optional(),
          searches: z.array(z.string().default("")).optional(),
        }).optional(),
        dnsPolicy: z.enum(["ClusterFirst","ClusterFirstWithHostNet","Default","None"]).optional(),
        enableServiceLinks: z.boolean().optional(),
        ephemeralContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          targetContainerName: z.string().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        hostAliases: z.array(z.object({
          hostnames: z.array(z.string().default("")).optional(),
          ip: z.string().optional(),
        }).default({})).optional(),
        hostIPC: z.boolean().optional(),
        hostNetwork: z.boolean().optional(),
        hostPID: z.boolean().optional(),
        hostUsers: z.boolean().optional(),
        hostname: z.string().optional(),
        imagePullSecrets: z.array(z.object({
          name: z.string().optional(),
        }).default({})).optional(),
        initContainers: z.array(z.object({
          args: z.array(z.string().default("")).optional(),
          command: z.array(z.string().default("")).optional(),
          env: z.array(z.object({
            name: z.string().default(""),
            value: z.string().optional(),
            valueFrom: z.object({
              configMapKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
              secretKeyRef: z.object({
                key: z.string().default(""),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
            }).optional(),
          }).default({})).optional(),
          envFrom: z.array(z.object({
            configMapRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
            prefix: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
              optional: z.boolean().optional(),
            }).optional(),
          }).default({})).optional(),
          image: z.string().optional(),
          imagePullPolicy: z.enum(["Always","IfNotPresent","Never"]).optional(),
          lifecycle: z.object({
            postStart: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
            preStop: z.object({
              exec: z.object({
                command: z.array(z.string().default("")).optional(),
              }).optional(),
              httpGet: z.object({
                host: z.string().optional(),
                httpHeaders: z.array(z.object({
                  name: z.string().default(""),
                  value: z.string().default(""),
                }).default({})).optional(),
                path: z.string().optional(),
                port: z.string().default({}),
                scheme: z.enum(["HTTP","HTTPS"]).optional(),
              }).optional(),
              tcpSocket: z.object({
                host: z.string().optional(),
                port: z.string().default({}),
              }).optional(),
            }).optional(),
          }).optional(),
          livenessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          name: z.string().default(""),
          ports: z.array(z.object({
            containerPort: z.number().default(0),
            hostIP: z.string().optional(),
            hostPort: z.number().optional(),
            name: z.string().optional(),
            protocol: z.enum(["SCTP","TCP","UDP"]).default("TCP"),
          }).default({})).optional(),
          readinessProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          resources: z.object({
            claims: z.array(z.object({
              name: z.string().default(""),
            }).default({})).optional(),
            limits: z.record(z.string().default({})).optional(),
            requests: z.record(z.string().default({})).optional(),
          }).default({}),
          securityContext: z.object({
            allowPrivilegeEscalation: z.boolean().optional(),
            capabilities: z.object({
              add: z.array(z.string().default("")).optional(),
              drop: z.array(z.string().default("")).optional(),
            }).optional(),
            privileged: z.boolean().optional(),
            procMount: z.string().optional(),
            readOnlyRootFilesystem: z.boolean().optional(),
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
              type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
            }).optional(),
            windowsOptions: z.object({
              gmsaCredentialSpec: z.string().optional(),
              gmsaCredentialSpecName: z.string().optional(),
              hostProcess: z.boolean().optional(),
              runAsUserName: z.string().optional(),
            }).optional(),
          }).optional(),
          startupProbe: z.object({
            exec: z.object({
              command: z.array(z.string().default("")).optional(),
            }).optional(),
            failureThreshold: z.number().optional(),
            grpc: z.object({
              port: z.number().default(0),
              service: z.string().default(""),
            }).optional(),
            httpGet: z.object({
              host: z.string().optional(),
              httpHeaders: z.array(z.object({
                name: z.string().default(""),
                value: z.string().default(""),
              }).default({})).optional(),
              path: z.string().optional(),
              port: z.string().default({}),
              scheme: z.enum(["HTTP","HTTPS"]).optional(),
            }).optional(),
            initialDelaySeconds: z.number().optional(),
            periodSeconds: z.number().optional(),
            successThreshold: z.number().optional(),
            tcpSocket: z.object({
              host: z.string().optional(),
              port: z.string().default({}),
            }).optional(),
            terminationGracePeriodSeconds: z.number().optional(),
            timeoutSeconds: z.number().optional(),
          }).optional(),
          stdin: z.boolean().optional(),
          stdinOnce: z.boolean().optional(),
          terminationMessagePath: z.string().optional(),
          terminationMessagePolicy: z.enum(["FallbackToLogsOnError","File"]).optional(),
          tty: z.boolean().optional(),
          volumeDevices: z.array(z.object({
            devicePath: z.string().default(""),
            name: z.string().default(""),
          }).default({})).optional(),
          volumeMounts: z.array(z.object({
            mountPath: z.string().default(""),
            mountPropagation: z.string().optional(),
            name: z.string().default(""),
            readOnly: z.boolean().optional(),
            subPath: z.string().optional(),
            subPathExpr: z.string().optional(),
          }).default({})).optional(),
          workingDir: z.string().optional(),
        }).default({})).optional(),
        nodeName: z.string().optional(),
        nodeSelector: z.record(z.string().default("")).optional(),
        os: z.object({
          name: z.string().default(""),
        }).optional(),
        overhead: z.record(z.string().default({})).optional(),
        preemptionPolicy: z.string().optional(),
        priority: z.number().optional(),
        priorityClassName: z.string().optional(),
        readinessGates: z.array(z.object({
          conditionType: z.string().default(""),
        }).default({})).optional(),
        resourceClaims: z.array(z.object({
          name: z.string().default(""),
          source: z.object({
            resourceClaimName: z.string().optional(),
            resourceClaimTemplateName: z.string().optional(),
          }).default({}),
        }).default({})).optional(),
        restartPolicy: z.enum(["Always","Never","OnFailure"]).optional(),
        runtimeClassName: z.string().optional(),
        schedulerName: z.string().optional(),
        schedulingGates: z.array(z.object({
          name: z.string().default(""),
        }).default({})).optional(),
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
            type: z.enum(["Localhost","RuntimeDefault","Unconfined"]).default(""),
          }).optional(),
          supplementalGroups: z.array(z.number().default(0)).optional(),
          sysctls: z.array(z.object({
            name: z.string().default(""),
            value: z.string().default(""),
          }).default({})).optional(),
          windowsOptions: z.object({
            gmsaCredentialSpec: z.string().optional(),
            gmsaCredentialSpecName: z.string().optional(),
            hostProcess: z.boolean().optional(),
            runAsUserName: z.string().optional(),
          }).optional(),
        }).optional(),
        serviceAccount: z.string().optional(),
        serviceAccountName: z.string().optional(),
        setHostnameAsFQDN: z.boolean().optional(),
        shareProcessNamespace: z.boolean().optional(),
        subdomain: z.string().optional(),
        terminationGracePeriodSeconds: z.number().optional(),
        tolerations: z.array(z.object({
          effect: z.enum(["NoExecute","NoSchedule","PreferNoSchedule"]).optional(),
          key: z.string().optional(),
          operator: z.enum(["Equal","Exists"]).optional(),
          tolerationSeconds: z.number().optional(),
          value: z.string().optional(),
        }).default({})).optional(),
        topologySpreadConstraints: z.array(z.object({
          labelSelector: z.object({
            matchExpressions: z.array(z.object({
              key: z.string().default(""),
              operator: z.string().default(""),
              values: z.array(z.string().default("")).optional(),
            }).default({})).optional(),
            matchLabels: z.record(z.string().default("")).optional(),
          }).optional(),
          matchLabelKeys: z.array(z.string().default("")).optional(),
          maxSkew: z.number().default(0),
          minDomains: z.number().optional(),
          nodeAffinityPolicy: z.string().optional(),
          nodeTaintsPolicy: z.string().optional(),
          topologyKey: z.string().default(""),
          whenUnsatisfiable: z.enum(["DoNotSchedule","ScheduleAnyway"]).default(""),
        }).default({})).optional(),
        volumes: z.array(z.object({
          awsElasticBlockStore: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          azureDisk: z.object({
            cachingMode: z.string().optional(),
            diskName: z.string().default(""),
            diskURI: z.string().default(""),
            fsType: z.string().optional(),
            kind: z.string().optional(),
            readOnly: z.boolean().optional(),
          }).optional(),
          azureFile: z.object({
            readOnly: z.boolean().optional(),
            secretName: z.string().default(""),
            shareName: z.string().default(""),
          }).optional(),
          cephfs: z.object({
            monitors: z.array(z.string().default("")),
            path: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretFile: z.string().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          cinder: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeID: z.string().default(""),
          }).optional(),
          configMap: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            name: z.string().optional(),
            optional: z.boolean().optional(),
          }).optional(),
          csi: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            nodePublishSecretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            readOnly: z.boolean().optional(),
            volumeAttributes: z.record(z.string().default("")).optional(),
          }).optional(),
          downwardAPI: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              fieldRef: z.object({
                apiVersion: z.string().optional(),
                fieldPath: z.string().default(""),
              }).optional(),
              mode: z.number().optional(),
              path: z.string().default(""),
              resourceFieldRef: z.object({
                containerName: z.string().optional(),
                divisor: z.string().default({}),
                resource: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          emptyDir: z.object({
            medium: z.string().optional(),
            sizeLimit: z.string().optional(),
          }).optional(),
          ephemeral: z.object({
            volumeClaimTemplate: z.object({
              metadata: z.object({
                annotations: z.record(z.string().default("")).optional(),
                creationTimestamp: z.string().default({}),
                deletionGracePeriodSeconds: z.number().optional(),
                deletionTimestamp: z.string().optional(),
                finalizers: z.array(z.string().default("")).optional(),
                generateName: z.string().optional(),
                generation: z.number().optional(),
                labels: z.record(z.string().default("")).optional(),
                managedFields: z.array(z.object({
                  apiVersion: z.string().optional(),
                  fieldsType: z.string().optional(),
                  fieldsV1: z.record(z.string()).optional(),
                  manager: z.string().optional(),
                  operation: z.string().optional(),
                  subresource: z.string().optional(),
                  time: z.string().optional(),
                }).default({})).optional(),
                name: z.string().optional(),
                namespace: z.string().optional(),
                ownerReferences: z.array(z.object({
                  apiVersion: z.string().default(""),
                  blockOwnerDeletion: z.boolean().optional(),
                  controller: z.boolean().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  uid: z.string().default(""),
                }).default({})).optional(),
                resourceVersion: z.string().optional(),
                selfLink: z.string().optional(),
                uid: z.string().optional(),
              }).default({}),
              spec: z.object({
                accessModes: z.array(z.string().default("")).optional(),
                dataSource: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                }).optional(),
                dataSourceRef: z.object({
                  apiGroup: z.string().optional(),
                  kind: z.string().default(""),
                  name: z.string().default(""),
                  namespace: z.string().optional(),
                }).optional(),
                resources: z.object({
                  claims: z.array(z.object({
                    name: z.string().default(""),
                  }).default({})).optional(),
                  limits: z.record(z.string().default({})).optional(),
                  requests: z.record(z.string().default({})).optional(),
                }).default({}),
                selector: z.object({
                  matchExpressions: z.array(z.object({
                    key: z.string().default(""),
                    operator: z.string().default(""),
                    values: z.array(z.string().default("")).optional(),
                  }).default({})).optional(),
                  matchLabels: z.record(z.string().default("")).optional(),
                }).optional(),
                storageClassName: z.string().optional(),
                volumeMode: z.string().optional(),
                volumeName: z.string().optional(),
              }).default({}),
            }).optional(),
          }).optional(),
          fc: z.object({
            fsType: z.string().optional(),
            lun: z.number().optional(),
            readOnly: z.boolean().optional(),
            targetWWNs: z.array(z.string().default("")).optional(),
            wwids: z.array(z.string().default("")).optional(),
          }).optional(),
          flexVolume: z.object({
            driver: z.string().default(""),
            fsType: z.string().optional(),
            options: z.record(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
          }).optional(),
          flocker: z.object({
            datasetName: z.string().optional(),
            datasetUUID: z.string().optional(),
          }).optional(),
          gcePersistentDisk: z.object({
            fsType: z.string().optional(),
            partition: z.number().optional(),
            pdName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          gitRepo: z.object({
            directory: z.string().optional(),
            repository: z.string().default(""),
            revision: z.string().optional(),
          }).optional(),
          glusterfs: z.object({
            endpoints: z.string().default(""),
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          hostPath: z.object({
            path: z.string().default(""),
            type: z.string().optional(),
          }).optional(),
          iscsi: z.object({
            chapAuthDiscovery: z.boolean().optional(),
            chapAuthSession: z.boolean().optional(),
            fsType: z.string().optional(),
            initiatorName: z.string().optional(),
            iqn: z.string().default(""),
            iscsiInterface: z.string().optional(),
            lun: z.number().default(0),
            portals: z.array(z.string().default("")).optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            targetPortal: z.string().default(""),
          }).optional(),
          name: z.string().default(""),
          nfs: z.object({
            path: z.string().default(""),
            readOnly: z.boolean().optional(),
            server: z.string().default(""),
          }).optional(),
          persistentVolumeClaim: z.object({
            claimName: z.string().default(""),
            readOnly: z.boolean().optional(),
          }).optional(),
          photonPersistentDisk: z.object({
            fsType: z.string().optional(),
            pdID: z.string().default(""),
          }).optional(),
          portworxVolume: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            volumeID: z.string().default(""),
          }).optional(),
          projected: z.object({
            defaultMode: z.number().optional(),
            sources: z.array(z.object({
              configMap: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              downwardAPI: z.object({
                items: z.array(z.object({
                  fieldRef: z.object({
                    apiVersion: z.string().optional(),
                    fieldPath: z.string().default(""),
                  }).optional(),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                  resourceFieldRef: z.object({
                    containerName: z.string().optional(),
                    divisor: z.string().default({}),
                    resource: z.string().default(""),
                  }).optional(),
                }).default({})).optional(),
              }).optional(),
              secret: z.object({
                items: z.array(z.object({
                  key: z.string().default(""),
                  mode: z.number().optional(),
                  path: z.string().default(""),
                }).default({})).optional(),
                name: z.string().optional(),
                optional: z.boolean().optional(),
              }).optional(),
              serviceAccountToken: z.object({
                audience: z.string().optional(),
                expirationSeconds: z.number().optional(),
                path: z.string().default(""),
              }).optional(),
            }).default({})).optional(),
          }).optional(),
          quobyte: z.object({
            group: z.string().optional(),
            readOnly: z.boolean().optional(),
            registry: z.string().default(""),
            tenant: z.string().optional(),
            user: z.string().optional(),
            volume: z.string().default(""),
          }).optional(),
          rbd: z.object({
            fsType: z.string().optional(),
            image: z.string().default(""),
            keyring: z.string().optional(),
            monitors: z.array(z.string().default("")),
            pool: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            user: z.string().optional(),
          }).optional(),
          scaleIO: z.object({
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
          }).optional(),
          secret: z.object({
            defaultMode: z.number().optional(),
            items: z.array(z.object({
              key: z.string().default(""),
              mode: z.number().optional(),
              path: z.string().default(""),
            }).default({})).optional(),
            optional: z.boolean().optional(),
            secretName: z.string().optional(),
          }).optional(),
          storageos: z.object({
            fsType: z.string().optional(),
            readOnly: z.boolean().optional(),
            secretRef: z.object({
              name: z.string().optional(),
            }).optional(),
            volumeName: z.string().optional(),
            volumeNamespace: z.string().optional(),
          }).optional(),
          vsphereVolume: z.object({
            fsType: z.string().optional(),
            storagePolicyID: z.string().optional(),
            storagePolicyName: z.string().optional(),
            volumePath: z.string().default(""),
          }).optional(),
        }).default({})).optional(),
      }).default({}),
    }).default({}),
    updateStrategy: z.object({
      rollingUpdate: z.object({
        maxUnavailable: z.string().optional(),
        partition: z.number().optional(),
      }).optional(),
      type: z.enum(["OnDelete","RollingUpdate"]).optional(),
    }).default({}),
    volumeClaimTemplates: z.array(z.object({
      apiVersion: z.string().optional(),
      kind: z.string().optional(),
      metadata: z.object({
        annotations: z.record(z.string().default("")).optional(),
        creationTimestamp: z.string().default({}),
        deletionGracePeriodSeconds: z.number().optional(),
        deletionTimestamp: z.string().optional(),
        finalizers: z.array(z.string().default("")).optional(),
        generateName: z.string().optional(),
        generation: z.number().optional(),
        labels: z.record(z.string().default("")).optional(),
        managedFields: z.array(z.object({
          apiVersion: z.string().optional(),
          fieldsType: z.string().optional(),
          fieldsV1: z.record(z.string()).optional(),
          manager: z.string().optional(),
          operation: z.string().optional(),
          subresource: z.string().optional(),
          time: z.string().optional(),
        }).default({})).optional(),
        name: z.string().optional(),
        namespace: z.string().optional(),
        ownerReferences: z.array(z.object({
          apiVersion: z.string().default(""),
          blockOwnerDeletion: z.boolean().optional(),
          controller: z.boolean().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          uid: z.string().default(""),
        }).default({})).optional(),
        resourceVersion: z.string().optional(),
        selfLink: z.string().optional(),
        uid: z.string().optional(),
      }).default({}),
      spec: z.object({
        accessModes: z.array(z.string().default("")).optional(),
        dataSource: z.object({
          apiGroup: z.string().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
        }).optional(),
        dataSourceRef: z.object({
          apiGroup: z.string().optional(),
          kind: z.string().default(""),
          name: z.string().default(""),
          namespace: z.string().optional(),
        }).optional(),
        resources: z.object({
          claims: z.array(z.object({
            name: z.string().default(""),
          }).default({})).optional(),
          limits: z.record(z.string().default({})).optional(),
          requests: z.record(z.string().default({})).optional(),
        }).default({}),
        selector: z.object({
          matchExpressions: z.array(z.object({
            key: z.string().default(""),
            operator: z.string().default(""),
            values: z.array(z.string().default("")).optional(),
          }).default({})).optional(),
          matchLabels: z.record(z.string().default("")).optional(),
        }).optional(),
        storageClassName: z.string().optional(),
        volumeMode: z.string().optional(),
        volumeName: z.string().optional(),
      }).default({}),
      status: z.object({
        accessModes: z.array(z.string().default("")).optional(),
        allocatedResources: z.record(z.string().default({})).optional(),
        capacity: z.record(z.string().default({})).optional(),
        conditions: z.array(z.object({
          lastProbeTime: z.string().default({}),
          lastTransitionTime: z.string().default({}),
          message: z.string().optional(),
          reason: z.string().optional(),
          status: z.string().default(""),
          type: z.string().default(""),
        }).default({})).optional(),
        phase: z.enum(["Bound","Lost","Pending"]).optional(),
        resizeStatus: z.string().optional(),
      }).default({}),
    }).default({})).optional(),
  },
  status: {
    availableReplicas: z.number().default(0),
    collisionCount: z.number().optional(),
    conditions: z.array(z.object({
      lastTransitionTime: z.string().default({}),
      message: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().default(""),
      type: z.string().default(""),
    }).default({})).optional(),
    currentReplicas: z.number().optional(),
    currentRevision: z.string().optional(),
    observedGeneration: z.number().optional(),
    readyReplicas: z.number().optional(),
    replicas: z.number().default(0),
    updateRevision: z.string().optional(),
    updatedReplicas: z.number().optional(),
  },
});
