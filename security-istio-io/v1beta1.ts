/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
 */
export type AuthorizationPolicySpec = {
  /**
   * Optional.
   *
   * Valid Options: ALLOW, DENY, AUDIT, CUSTOM
   */
  action?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
  /**
   * Specifies detailed configuration of the CUSTOM action.
   */
  provider?: {
    /**
     * Specifies the name of the extension provider.
     */
    name?: string;
  };
  /**
   * Optional.
   *
   * @maxItems 512
   */
  rules?: {
    /**
     * Optional.
     *
     * @maxItems 512
     */
    from?: {
      /**
       * Source specifies the source of a request.
       */
      source?: {
        /**
         * Optional.
         */
        ipBlocks?: string[];
        /**
         * Optional.
         */
        namespaces?: string[];
        /**
         * Optional.
         */
        notIpBlocks?: string[];
        /**
         * Optional.
         */
        notNamespaces?: string[];
        /**
         * Optional.
         */
        notPrincipals?: string[];
        /**
         * Optional.
         */
        notRemoteIpBlocks?: string[];
        /**
         * Optional.
         */
        notRequestPrincipals?: string[];
        /**
         * Optional.
         *
         * @maxItems 16
         */
        notServiceAccounts?:
          | []
          | [string]
          | [string, string]
          | [string, string, string]
          | [string, string, string, string]
          | [string, string, string, string, string]
          | [string, string, string, string, string, string]
          | [string, string, string, string, string, string, string]
          | [string, string, string, string, string, string, string, string]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ];
        /**
         * Optional.
         */
        principals?: string[];
        /**
         * Optional.
         */
        remoteIpBlocks?: string[];
        /**
         * Optional.
         */
        requestPrincipals?: string[];
        /**
         * Optional.
         *
         * @maxItems 16
         */
        serviceAccounts?:
          | []
          | [string]
          | [string, string]
          | [string, string, string]
          | [string, string, string, string]
          | [string, string, string, string, string]
          | [string, string, string, string, string, string]
          | [string, string, string, string, string, string, string]
          | [string, string, string, string, string, string, string, string]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ]
          | [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string,
            ];
      };
    }[];
    /**
     * Optional.
     */
    to?: {
      /**
       * Operation specifies the operation of a request.
       */
      operation?: {
        /**
         * Optional.
         */
        hosts?: string[];
        /**
         * Optional.
         */
        methods?: string[];
        /**
         * Optional.
         */
        notHosts?: string[];
        /**
         * Optional.
         */
        notMethods?: string[];
        /**
         * Optional.
         */
        notPaths?: string[];
        /**
         * Optional.
         */
        notPorts?: string[];
        /**
         * Optional.
         */
        paths?: string[];
        /**
         * Optional.
         */
        ports?: string[];
      };
    }[];
    /**
     * Optional.
     */
    when?: {
      /**
       * The name of an Istio attribute.
       */
      key: string;
      /**
       * Optional.
       */
      notValues?: string[];
      /**
       * Optional.
       */
      values?: string[];
    }[];
  }[];
  /**
   * Optional.
   */
  selector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
     */
    matchLabels?: {
      [k: string]: string;
    };
  };
  targetRef?: {
    /**
     * group is the group of the target resource.
     */
    group?: string;
    /**
     * kind is kind of the target resource.
     */
    kind: string;
    /**
     * name is the name of the target resource.
     */
    name: string;
    /**
     * namespace is the namespace of the referent.
     */
    namespace?: string;
  };
  /**
   * Optional.
   *
   * @maxItems 16
   */
  targetRefs?:
    | []
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ];
} & {
  [k: string]: unknown;
};

export interface AuthorizationPolicyOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: AuthorizationPolicySpec;
}

export function authorizationPolicy(
  opts: AuthorizationPolicyOpts,
): ResourceManifest {
  return resource({
    apiVersion: "security.istio.io/v1beta1",
    kind: "AuthorizationPolicy",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * Peer authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/peer_authentication.html
 */
export interface PeerAuthenticationSpec {
  /**
   * Mutual TLS settings for workload.
   */
  mtls?: {
    /**
     * Defines the mTLS mode used for peer authentication.
     *
     * Valid Options: DISABLE, PERMISSIVE, STRICT
     */
    mode?: "UNSET" | "DISABLE" | "PERMISSIVE" | "STRICT";
  };
  /**
   * Port specific mutual TLS settings.
   */
  portLevelMtls?: {
    [k: string]: {
      /**
       * Defines the mTLS mode used for peer authentication.
       *
       * Valid Options: DISABLE, PERMISSIVE, STRICT
       */
      mode?: "UNSET" | "DISABLE" | "PERMISSIVE" | "STRICT";
    };
  };
  /**
   * The selector determines the workloads to apply the PeerAuthentication on.
   */
  selector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
     */
    matchLabels?: {
      [k: string]: string;
    };
  };
}

export interface PeerAuthenticationOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: PeerAuthenticationSpec;
}

export function peerAuthentication(
  opts: PeerAuthenticationOpts,
): ResourceManifest {
  return resource({
    apiVersion: "security.istio.io/v1beta1",
    kind: "PeerAuthentication",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * Request authentication configuration for workloads. See more details at: https://istio.io/docs/reference/config/security/request_authentication.html
 */
export interface RequestAuthenticationSpec {
  /**
   * Define the list of JWTs that can be validated at the selected workloads' proxy.
   *
   * @maxItems 4096
   */
  jwtRules?: {
    /**
     * The list of JWT [audiences](https://tools.ietf.org/html/rfc7519#section-4.1.3) that are allowed to access.
     */
    audiences?: string[];
    /**
     * If set to true, the original token will be kept for the upstream request.
     */
    forwardOriginalToken?: boolean;
    /**
     * List of cookie names from which JWT is expected.
     */
    fromCookies?: string[];
    /**
     * List of header locations from which JWT is expected.
     */
    fromHeaders?: {
      /**
       * The HTTP header name.
       */
      name: string;
      /**
       * The prefix that should be stripped before decoding the token.
       */
      prefix?: string;
    }[];
    /**
     * List of query parameters from which JWT is expected.
     */
    fromParams?: string[];
    /**
     * Identifies the issuer that issued the JWT.
     */
    issuer?: string;
    /**
     * JSON Web Key Set of public keys to validate signature of the JWT.
     */
    jwks?: string;
    /**
     * URL of the provider's public key set to validate signature of the JWT.
     */
    jwks_uri?: string;
    /**
     * URL of the provider's public key set to validate signature of the JWT.
     */
    jwksUri?: string;
    /**
     * This field specifies a list of operations to copy the claim to HTTP headers on a successfully verified token.
     */
    outputClaimToHeaders?: {
      /**
       * The name of the claim to be copied from.
       */
      claim: string;
      /**
       * The name of the header to be created.
       */
      header: string;
    }[];
    /**
     * This field specifies the header name to output a successfully verified JWT payload to the backend.
     */
    outputPayloadToHeader?: string;
    /**
     * List of JWT claim names that should be treated as space-delimited strings.
     *
     * @maxItems 64
     */
    spaceDelimitedClaims?: string[];
    /**
     * The maximum amount of time that the resolver, determined by the PILOT_JWT_ENABLE_REMOTE_JWKS environment variable, will spend waiting for the JWKS to be fetched.
     */
    timeout?: string;
  }[];
  /**
   * Optional.
   */
  selector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
     */
    matchLabels?: {
      [k: string]: string;
    };
  };
  targetRef?: {
    /**
     * group is the group of the target resource.
     */
    group?: string;
    /**
     * kind is kind of the target resource.
     */
    kind: string;
    /**
     * name is the name of the target resource.
     */
    name: string;
    /**
     * namespace is the namespace of the referent.
     */
    namespace?: string;
  };
  /**
   * Optional.
   *
   * @maxItems 16
   */
  targetRefs?:
    | []
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ];
}

export interface RequestAuthenticationOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: RequestAuthenticationSpec;
}

export function requestAuthentication(
  opts: RequestAuthenticationOpts,
): ResourceManifest {
  return resource({
    apiVersion: "security.istio.io/v1beta1",
    kind: "RequestAuthentication",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
