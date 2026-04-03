/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, z } from "../../";

export const authorizationPolicy = resource(
  "security.istio.io/v1beta1",
  "AuthorizationPolicy",
  {
    scope: "Namespaced",
    shortNames: ["ap"],
    spec: {
      action: z.enum(["ALLOW", "DENY", "AUDIT", "CUSTOM"]).optional(),
      provider: z
        .object({
          name: z.string().optional(),
        })
        .optional(),
      rules: z
        .array(
          z.object({
            from: z
              .array(
                z.object({
                  source: z
                    .object({
                      ipBlocks: z.array(z.string()).optional(),
                      namespaces: z.array(z.string()).optional(),
                      notIpBlocks: z.array(z.string()).optional(),
                      notNamespaces: z.array(z.string()).optional(),
                      notPrincipals: z.array(z.string()).optional(),
                      notRemoteIpBlocks: z.array(z.string()).optional(),
                      notRequestPrincipals: z.array(z.string()).optional(),
                      notServiceAccounts: z.array(z.string()).optional(),
                      principals: z.array(z.string()).optional(),
                      remoteIpBlocks: z.array(z.string()).optional(),
                      requestPrincipals: z.array(z.string()).optional(),
                      serviceAccounts: z.array(z.string()).optional(),
                    })
                    .optional(),
                }),
              )
              .optional(),
            to: z
              .array(
                z.object({
                  operation: z
                    .object({
                      hosts: z.array(z.string()).optional(),
                      methods: z.array(z.string()).optional(),
                      notHosts: z.array(z.string()).optional(),
                      notMethods: z.array(z.string()).optional(),
                      notPaths: z.array(z.string()).optional(),
                      notPorts: z.array(z.string()).optional(),
                      paths: z.array(z.string()).optional(),
                      ports: z.array(z.string()).optional(),
                    })
                    .optional(),
                }),
              )
              .optional(),
            when: z
              .array(
                z.object({
                  key: z.string(),
                  notValues: z.array(z.string()).optional(),
                  values: z.array(z.string()).optional(),
                }),
              )
              .optional(),
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

export const peerAuthentication = resource(
  "security.istio.io/v1beta1",
  "PeerAuthentication",
  {
    scope: "Namespaced",
    shortNames: ["pa"],
    spec: {
      mtls: z
        .object({
          mode: z.enum(["UNSET", "DISABLE", "PERMISSIVE", "STRICT"]).optional(),
        })
        .optional(),
      portLevelMtls: z
        .record(
          z.object({
            mode: z
              .enum(["UNSET", "DISABLE", "PERMISSIVE", "STRICT"])
              .optional(),
          }),
        )
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

export const requestAuthentication = resource(
  "security.istio.io/v1beta1",
  "RequestAuthentication",
  {
    scope: "Namespaced",
    shortNames: ["ra"],
    spec: {
      jwtRules: z
        .array(
          z.object({
            audiences: z.array(z.string()).optional(),
            forwardOriginalToken: z.boolean().optional(),
            fromCookies: z.array(z.string()).optional(),
            fromHeaders: z
              .array(
                z.object({
                  name: z.string(),
                  prefix: z.string().optional(),
                }),
              )
              .optional(),
            fromParams: z.array(z.string()).optional(),
            issuer: z.string().optional(),
            jwks: z.string().optional(),
            jwks_uri: z.string().optional(),
            jwksUri: z.string().optional(),
            outputClaimToHeaders: z
              .array(
                z.object({
                  claim: z.string(),
                  header: z.string(),
                }),
              )
              .optional(),
            outputPayloadToHeader: z.string().optional(),
            spaceDelimitedClaims: z.array(z.string()).optional(),
            timeout: z.string().optional(),
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
