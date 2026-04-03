/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
 */
export interface TelemetrySpec {
  /**
   * Optional.
   */
  accessLogging?: {
    /**
     * Controls logging.
     */
    disabled?: boolean;
    /**
     * Optional.
     */
    filter?: {
      /**
       * CEL expression for selecting when requests/connections should be logged.
       */
      expression?: string;
    };
    /**
     * Allows tailoring of logging behavior to specific conditions.
     */
    match?: {
      /**
       * This determines whether or not to apply the access logging configuration based on the direction of traffic relative to the proxied workload.
       *
       * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
       */
      mode?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
    };
    /**
     * Optional.
     */
    providers?: {
      /**
       * Required.
       */
      name: string;
    }[];
  }[];
  /**
   * Optional.
   */
  metrics?: {
    /**
     * Optional.
     */
    overrides?: {
      /**
       * Optional.
       */
      disabled?: boolean;
      /**
       * Match allows providing the scope of the override.
       */
      match?: {
        [k: string]: unknown;
      };
      /**
       * Optional.
       */
      tagOverrides?: {
        [k: string]: {
          /**
           * Operation controls whether or not to update/add a tag, or to remove it.
           *
           * Valid Options: UPSERT, REMOVE
           */
          operation?: "UPSERT" | "REMOVE";
          /**
           * Value is only considered if the operation is `UPSERT`.
           */
          value?: string;
        };
      };
    }[];
    /**
     * Optional.
     */
    providers?: {
      /**
       * Required.
       */
      name: string;
    }[];
    /**
     * Optional.
     */
    reportingInterval?: string;
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
  /**
   * Optional.
   */
  tracing?: {
    /**
     * Optional.
     */
    customTags?: {
      [k: string]: {
        [k: string]: unknown;
      };
    };
    /**
     * Controls span reporting.
     */
    disableSpanReporting?: boolean;
    /**
     * Determines whether or not trace spans generated by Envoy will include Istio specific tags.
     */
    enableIstioTags?: boolean;
    /**
     * Allows tailoring of behavior to specific conditions.
     */
    match?: {
      /**
       * This determines whether or not to apply the tracing configuration based on the direction of traffic relative to the proxied workload.
       *
       * Valid Options: CLIENT_AND_SERVER, CLIENT, SERVER
       */
      mode?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
    };
    /**
     * Optional.
     */
    providers?: {
      /**
       * Required.
       */
      name: string;
    }[];
    /**
     * Controls the rate at which traffic will be selected for tracing if no prior sampling decision has been made.
     */
    randomSamplingPercentage?: number;
    useRequestIdForTraceSampling?: boolean;
  }[];
}

export interface TelemetryOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: TelemetrySpec;
}

export function telemetry(opts: TelemetryOpts): ResourceManifest {
  return resource({
    apiVersion: "telemetry.istio.io/v1",
    kind: "Telemetry",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
