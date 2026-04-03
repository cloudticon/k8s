/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * Specification of the desired behavior of the PodDisruptionBudget.
 */
export type PodDisruptionBudgetSpec = {
  /**
   * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
   */
  maxUnavailable?: number | string;
  /**
   * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
   */
  minAvailable?: number | string;
  /**
   * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
   */
  selector?: {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    matchExpressions?: {
      /**
       * key is the label key that the selector applies to.
       */
      key: string;
      /**
       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
       */
      operator: string;
      /**
       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
       */
      values?: string[];
    }[];
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     */
    matchLabels?: {
      [k: string]: string;
    };
  };
  /**
   * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".
   *
   * Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.
   *
   * IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
   *
   * AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
   *
   * Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.
   *
   * This field is alpha-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (disabled by default).
   */
  unhealthyPodEvictionPolicy?: string;
};

export interface PodDisruptionBudgetOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: PodDisruptionBudgetSpec;
}

export function podDisruptionBudget(
  opts: PodDisruptionBudgetOpts,
): ResourceManifest {
  return resource({
    apiVersion: "policy/v1",
    kind: "PodDisruptionBudget",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
