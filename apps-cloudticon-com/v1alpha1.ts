/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * AppSpec defines the desired state of App.
 */
export interface AppSpec {
  discordChannelId?: string;
  globalValues?: {};
  importSecrets?: {
    environment: string;
    projectId: string;
  };
  namespace: string;
  project: string;
  prune?: boolean;
  repositories: {
    branch: string;
    name: string;
    path?: string;
    url: string;
    values?: {};
  }[];
  selfHeal?: boolean;
  sentry?: {
    gateway: string;
    host?: string;
    hosts?: string[];
    pathPrefix?: string;
  };
  title?: string;
  urls?: {
    name: string;
    url: string;
  }[];
}

export interface AppOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: AppSpec;
}

export function app(opts: AppOpts): ResourceManifest {
  return resource({
    apiVersion: "apps.cloudticon.com/v1alpha1",
    kind: "App",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

export interface HasuraSpec {
  /**
   * SecretKeySelector selects a key of a Secret.
   */
  adminSecret: {
    /**
     * The key of the secret to select from.  Must be a valid secret key.
     */
    key: string;
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     */
    optional?: boolean;
  };
  auth?: {
    webhookMode?: string;
    webhookUrl?: string;
  };
  /**
   * Deprecated: use auth.webhookUrl
   */
  authWebhookUrl?: string;
  console?: boolean;
  /**
   * SecretKeySelector selects a key of a Secret.
   */
  databaseUrl: {
    /**
     * The key of the secret to select from.  Must be a valid secret key.
     */
    key: string;
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     */
    optional?: boolean;
  };
  dev?: {
    apiPort: number;
    consolePort?: number;
    externalUrl: string;
  };
  enableRemoteSchemaPermissions?: boolean;
  env?: {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     */
    name: string;
    /**
     * Variable references $(VAR_NAME) are expanded
     * using the previously defined environment variables in the container and
     * any service environment variables. If a variable cannot be resolved,
     * the reference in the input string will be unchanged. Double $$ are reduced
     * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
     * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
     * Escaped references will never be expanded, regardless of whether the variable
     * exists or not.
     * Defaults to "".
     */
    value?: string;
    /**
     * Source for the environment variable's value. Cannot be used if value is not empty.
     */
    valueFrom?: {
      /**
       * Selects a key of a ConfigMap.
       */
      configMapKeyRef?: {
        /**
         * The key to select.
         */
        key: string;
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
        /**
         * Specify whether the ConfigMap or its key must be defined
         */
        optional?: boolean;
      };
      /**
       * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
       * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
       */
      fieldRef?: {
        /**
         * Version of the schema the FieldPath is written in terms of, defaults to "v1".
         */
        apiVersion?: string;
        /**
         * Path of the field to select in the specified API version.
         */
        fieldPath: string;
      };
      /**
       * Selects a resource of the container: only resources limits and requests
       * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
       */
      resourceFieldRef?: {
        /**
         * Container name: required for volumes, optional for env vars
         */
        containerName?: string;
        /**
         * Specifies the output format of the exposed resources, defaults to "1"
         */
        divisor?: number | string;
        /**
         * Required: resource to select
         */
        resource: string;
      };
      /**
       * Selects a key of a secret in the pod's namespace
       */
      secretKeyRef?: {
        /**
         * The key of the secret to select from.  Must be a valid secret key.
         */
        key: string;
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
        /**
         * Specify whether the Secret or its key must be defined
         */
        optional?: boolean;
      };
    };
  }[];
  eventCleanerJob?: {
    cron?: string;
    enabled?: boolean;
  };
  experimentalFeatures?: string[];
  functionsUrl?: string;
  image?: {
    name: string;
    tag: string;
  };
  logs?: {
    level?: string;
    types?: string[];
  };
  /**
   * SecretKeySelector selects a key of a Secret.
   */
  metadataDatabaseUrl?: {
    /**
     * The key of the secret to select from.  Must be a valid secret key.
     */
    key: string;
    /**
     * Name of the referent.
     * This field is effectively required, but due to backwards compatibility is
     * allowed to be empty. Instances of this type with an empty value here are
     * almost certainly wrong.
     * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     */
    optional?: boolean;
  };
  replicas?: number;
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
  runMigration?: boolean;
  version?: string;
}

export interface HasuraOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: HasuraSpec;
}

export function hasura(opts: HasuraOpts): ResourceManifest {
  return resource({
    apiVersion: "apps.cloudticon.com/v1alpha1",
    kind: "Hasura",
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
 * ImportedSecretSpec defines the desired state of ImportedSecret
 */
export interface ImportedSecretSpec {
  overwrites?: {
    [k: string]: {
      [k: string]: string;
    };
  };
  path: string;
  templates?: {
    [k: string]: {
      [k: string]: string;
    };
  };
}

export interface ImportedSecretOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: ImportedSecretSpec;
}

export function importedSecret(opts: ImportedSecretOpts): ResourceManifest {
  return resource({
    apiVersion: "apps.cloudticon.com/v1alpha1",
    kind: "ImportedSecret",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

export interface PostgresSpec {
  /**
   * AffinityConfiguration contains the info we need to create the
   * affinity rules for Pods
   */
  affinity?: {
    /**
     * AdditionalPodAffinity allows to specify pod affinity terms to be passed to all the cluster's pods.
     */
    additionalPodAffinity?: {
      /**
       * The scheduler will prefer to schedule pods to nodes that satisfy
       * the affinity expressions specified by this field, but it may choose
       * a node that violates one or more of the expressions. The node that is
       * most preferred is the one with the greatest sum of weights, i.e.
       * for each node that meets all of the scheduling requirements (resource
       * request, requiredDuringScheduling affinity expressions, etc.),
       * compute a sum by iterating through the elements of this field and adding
       * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
       * node(s) with the highest sum are the most preferred.
       */
      preferredDuringSchedulingIgnoredDuringExecution?: {
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        podAffinityTerm: {
          /**
           * A label query over a set of resources, in this case pods.
           * If it's null, this PodAffinityTerm matches with no Pods.
           */
          labelSelector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
          };
          /**
           * MatchLabelKeys is a set of pod label keys to select which pods will
           * be taken into consideration. The keys are used to lookup values from the
           * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
           * to select the group of existing pods which pods will be taken into consideration
           * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
           * pod labels will be ignored. The default value is empty.
           * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
           * Also, matchLabelKeys cannot be set when labelSelector isn't set.
           * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
           */
          matchLabelKeys?: string[];
          /**
           * MismatchLabelKeys is a set of pod label keys to select which pods will
           * be taken into consideration. The keys are used to lookup values from the
           * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
           * to select the group of existing pods which pods will be taken into consideration
           * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
           * pod labels will be ignored. The default value is empty.
           * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
           * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
           * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
           */
          mismatchLabelKeys?: string[];
          /**
           * A label query over the set of namespaces that the term applies to.
           * The term is applied to the union of the namespaces selected by this field
           * and the ones listed in the namespaces field.
           * null selector and null or empty namespaces list means "this pod's namespace".
           * An empty selector ({}) matches all namespaces.
           */
          namespaceSelector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
          };
          /**
           * namespaces specifies a static list of namespace names that the term applies to.
           * The term is applied to the union of the namespaces listed in this field
           * and the ones selected by namespaceSelector.
           * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
           */
          namespaces?: string[];
          /**
           * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
           * the labelSelector in the specified namespaces, where co-located is defined as running on a node
           * whose value of the label with key topologyKey matches that of any node on which any of the
           * selected pods is running.
           * Empty topologyKey is not allowed.
           */
          topologyKey: string;
        };
        /**
         * weight associated with matching the corresponding podAffinityTerm,
         * in the range 1-100.
         */
        weight: number;
      }[];
      /**
       * If the affinity requirements specified by this field are not met at
       * scheduling time, the pod will not be scheduled onto the node.
       * If the affinity requirements specified by this field cease to be met
       * at some point during pod execution (e.g. due to a pod label update), the
       * system may or may not try to eventually evict the pod from its node.
       * When there are multiple elements, the lists of nodes corresponding to each
       * podAffinityTerm are intersected, i.e. all terms must be satisfied.
       */
      requiredDuringSchedulingIgnoredDuringExecution?: {
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        labelSelector?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          matchExpressions?: {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: string[];
          }[];
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           * map is equivalent to an element of matchExpressions, whose key field is "key", the
           * operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          matchLabels?: {
            [k: string]: string;
          };
        };
        /**
         * MatchLabelKeys is a set of pod label keys to select which pods will
         * be taken into consideration. The keys are used to lookup values from the
         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
         * to select the group of existing pods which pods will be taken into consideration
         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
         * pod labels will be ignored. The default value is empty.
         * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
         * Also, matchLabelKeys cannot be set when labelSelector isn't set.
         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
         */
        matchLabelKeys?: string[];
        /**
         * MismatchLabelKeys is a set of pod label keys to select which pods will
         * be taken into consideration. The keys are used to lookup values from the
         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
         * to select the group of existing pods which pods will be taken into consideration
         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
         * pod labels will be ignored. The default value is empty.
         * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
         * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
         */
        mismatchLabelKeys?: string[];
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        namespaceSelector?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          matchExpressions?: {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: string[];
          }[];
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           * map is equivalent to an element of matchExpressions, whose key field is "key", the
           * operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          matchLabels?: {
            [k: string]: string;
          };
        };
        /**
         * namespaces specifies a static list of namespace names that the term applies to.
         * The term is applied to the union of the namespaces listed in this field
         * and the ones selected by namespaceSelector.
         * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
         */
        namespaces?: string[];
        /**
         * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
         * the labelSelector in the specified namespaces, where co-located is defined as running on a node
         * whose value of the label with key topologyKey matches that of any node on which any of the
         * selected pods is running.
         * Empty topologyKey is not allowed.
         */
        topologyKey: string;
      }[];
    };
    /**
     * AdditionalPodAntiAffinity allows to specify pod anti-affinity terms to be added to the ones generated
     * by the operator if EnablePodAntiAffinity is set to true (default) or to be used exclusively if set to false.
     */
    additionalPodAntiAffinity?: {
      /**
       * The scheduler will prefer to schedule pods to nodes that satisfy
       * the anti-affinity expressions specified by this field, but it may choose
       * a node that violates one or more of the expressions. The node that is
       * most preferred is the one with the greatest sum of weights, i.e.
       * for each node that meets all of the scheduling requirements (resource
       * request, requiredDuringScheduling anti-affinity expressions, etc.),
       * compute a sum by iterating through the elements of this field and adding
       * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
       * node(s) with the highest sum are the most preferred.
       */
      preferredDuringSchedulingIgnoredDuringExecution?: {
        /**
         * Required. A pod affinity term, associated with the corresponding weight.
         */
        podAffinityTerm: {
          /**
           * A label query over a set of resources, in this case pods.
           * If it's null, this PodAffinityTerm matches with no Pods.
           */
          labelSelector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
          };
          /**
           * MatchLabelKeys is a set of pod label keys to select which pods will
           * be taken into consideration. The keys are used to lookup values from the
           * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
           * to select the group of existing pods which pods will be taken into consideration
           * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
           * pod labels will be ignored. The default value is empty.
           * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
           * Also, matchLabelKeys cannot be set when labelSelector isn't set.
           * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
           */
          matchLabelKeys?: string[];
          /**
           * MismatchLabelKeys is a set of pod label keys to select which pods will
           * be taken into consideration. The keys are used to lookup values from the
           * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
           * to select the group of existing pods which pods will be taken into consideration
           * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
           * pod labels will be ignored. The default value is empty.
           * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
           * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
           * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
           */
          mismatchLabelKeys?: string[];
          /**
           * A label query over the set of namespaces that the term applies to.
           * The term is applied to the union of the namespaces selected by this field
           * and the ones listed in the namespaces field.
           * null selector and null or empty namespaces list means "this pod's namespace".
           * An empty selector ({}) matches all namespaces.
           */
          namespaceSelector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
          };
          /**
           * namespaces specifies a static list of namespace names that the term applies to.
           * The term is applied to the union of the namespaces listed in this field
           * and the ones selected by namespaceSelector.
           * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
           */
          namespaces?: string[];
          /**
           * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
           * the labelSelector in the specified namespaces, where co-located is defined as running on a node
           * whose value of the label with key topologyKey matches that of any node on which any of the
           * selected pods is running.
           * Empty topologyKey is not allowed.
           */
          topologyKey: string;
        };
        /**
         * weight associated with matching the corresponding podAffinityTerm,
         * in the range 1-100.
         */
        weight: number;
      }[];
      /**
       * If the anti-affinity requirements specified by this field are not met at
       * scheduling time, the pod will not be scheduled onto the node.
       * If the anti-affinity requirements specified by this field cease to be met
       * at some point during pod execution (e.g. due to a pod label update), the
       * system may or may not try to eventually evict the pod from its node.
       * When there are multiple elements, the lists of nodes corresponding to each
       * podAffinityTerm are intersected, i.e. all terms must be satisfied.
       */
      requiredDuringSchedulingIgnoredDuringExecution?: {
        /**
         * A label query over a set of resources, in this case pods.
         * If it's null, this PodAffinityTerm matches with no Pods.
         */
        labelSelector?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          matchExpressions?: {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: string[];
          }[];
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           * map is equivalent to an element of matchExpressions, whose key field is "key", the
           * operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          matchLabels?: {
            [k: string]: string;
          };
        };
        /**
         * MatchLabelKeys is a set of pod label keys to select which pods will
         * be taken into consideration. The keys are used to lookup values from the
         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
         * to select the group of existing pods which pods will be taken into consideration
         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
         * pod labels will be ignored. The default value is empty.
         * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
         * Also, matchLabelKeys cannot be set when labelSelector isn't set.
         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
         */
        matchLabelKeys?: string[];
        /**
         * MismatchLabelKeys is a set of pod label keys to select which pods will
         * be taken into consideration. The keys are used to lookup values from the
         * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
         * to select the group of existing pods which pods will be taken into consideration
         * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
         * pod labels will be ignored. The default value is empty.
         * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
         * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
         * This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
         */
        mismatchLabelKeys?: string[];
        /**
         * A label query over the set of namespaces that the term applies to.
         * The term is applied to the union of the namespaces selected by this field
         * and the ones listed in the namespaces field.
         * null selector and null or empty namespaces list means "this pod's namespace".
         * An empty selector ({}) matches all namespaces.
         */
        namespaceSelector?: {
          /**
           * matchExpressions is a list of label selector requirements. The requirements are ANDed.
           */
          matchExpressions?: {
            /**
             * key is the label key that the selector applies to.
             */
            key: string;
            /**
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: string[];
          }[];
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           * map is equivalent to an element of matchExpressions, whose key field is "key", the
           * operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          matchLabels?: {
            [k: string]: string;
          };
        };
        /**
         * namespaces specifies a static list of namespace names that the term applies to.
         * The term is applied to the union of the namespaces listed in this field
         * and the ones selected by namespaceSelector.
         * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
         */
        namespaces?: string[];
        /**
         * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
         * the labelSelector in the specified namespaces, where co-located is defined as running on a node
         * whose value of the label with key topologyKey matches that of any node on which any of the
         * selected pods is running.
         * Empty topologyKey is not allowed.
         */
        topologyKey: string;
      }[];
    };
    /**
     * Activates anti-affinity for the pods. The operator will define pods
     * anti-affinity unless this field is explicitly set to false
     */
    enablePodAntiAffinity?: boolean;
    /**
     * NodeAffinity describes node affinity scheduling rules for the pod.
     * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity
     */
    nodeAffinity?: {
      /**
       * The scheduler will prefer to schedule pods to nodes that satisfy
       * the affinity expressions specified by this field, but it may choose
       * a node that violates one or more of the expressions. The node that is
       * most preferred is the one with the greatest sum of weights, i.e.
       * for each node that meets all of the scheduling requirements (resource
       * request, requiredDuringScheduling affinity expressions, etc.),
       * compute a sum by iterating through the elements of this field and adding
       * "weight" to the sum if the node matches the corresponding matchExpressions; the
       * node(s) with the highest sum are the most preferred.
       */
      preferredDuringSchedulingIgnoredDuringExecution?: {
        /**
         * A node selector term, associated with the corresponding weight.
         */
        preference: {
          /**
           * A list of node selector requirements by node's labels.
           */
          matchExpressions?: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: string[];
          }[];
          /**
           * A list of node selector requirements by node's fields.
           */
          matchFields?: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: string[];
          }[];
        };
        /**
         * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
         */
        weight: number;
      }[];
      /**
       * If the affinity requirements specified by this field are not met at
       * scheduling time, the pod will not be scheduled onto the node.
       * If the affinity requirements specified by this field cease to be met
       * at some point during pod execution (e.g. due to an update), the system
       * may or may not try to eventually evict the pod from its node.
       */
      requiredDuringSchedulingIgnoredDuringExecution?: {
        /**
         * Required. A list of node selector terms. The terms are ORed.
         */
        nodeSelectorTerms: {
          /**
           * A list of node selector requirements by node's labels.
           */
          matchExpressions?: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: string[];
          }[];
          /**
           * A list of node selector requirements by node's fields.
           */
          matchFields?: {
            /**
             * The label key that the selector applies to.
             */
            key: string;
            /**
             * Represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
             */
            operator: string;
            /**
             * An array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. If the operator is Gt or Lt, the values
             * array must have a single element, which will be interpreted as an integer.
             * This array is replaced during a strategic merge patch.
             */
            values?: string[];
          }[];
        }[];
      };
    };
    /**
     * NodeSelector is map of key-value pairs used to define the nodes on which
     * the pods can run.
     * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     */
    nodeSelector?: {
      [k: string]: string;
    };
    /**
     * PodAntiAffinityType allows the user to decide whether pod anti-affinity between cluster instance has to be
     * considered a strong requirement during scheduling or not. Allowed values are: "preferred" (default if empty) or
     * "required". Setting it to "required", could lead to instances remaining pending until new kubernetes nodes are
     * added if all the existing nodes don't match the required pod anti-affinity rule.
     * More info:
     * https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
     */
    podAntiAffinityType?: string;
    /**
     * Tolerations is a list of Tolerations that should be set for all the pods, in order to allow them to run
     * on tainted nodes.
     * More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/
     */
    tolerations?: {
      /**
       * Effect indicates the taint effect to match. Empty means match all taint effects.
       * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
       */
      effect?: string;
      /**
       * Key is the taint key that the toleration applies to. Empty means match all taint keys.
       * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
       */
      key?: string;
      /**
       * Operator represents a key's relationship to the value.
       * Valid operators are Exists and Equal. Defaults to Equal.
       * Exists is equivalent to wildcard for value, so that a pod can
       * tolerate all taints of a particular category.
       */
      operator?: string;
      /**
       * TolerationSeconds represents the period of time the toleration (which must be
       * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
       * it is not set, which means tolerate the taint forever (do not evict). Zero and
       * negative values will be treated as 0 (evict immediately) by the system.
       */
      tolerationSeconds?: number;
      /**
       * Value is the taint value the toleration matches to.
       * If the operator is Exists, the value should be empty, otherwise just a regular string.
       */
      value?: string;
    }[];
    /**
     * TopologyKey to use for anti-affinity configuration. See k8s documentation
     * for more info on that
     */
    topologyKey?: string;
  };
  backup?: {
    cron?: string;
    name?: string;
    namespace?: string;
    version?: string;
  };
  import?: {
    db?: string;
    host: string;
    port?: number;
    schema?: string;
    secret: string;
    user?: string;
  };
  instances?: number;
  monitoring?: boolean;
  postInitSql?: string[];
  /**
   * PostgresConfiguration defines the PostgreSQL configuration
   */
  postgresql?: {
    /**
     * If this parameter is true, the user will be able to invoke `ALTER SYSTEM`
     * on this CloudNativePG Cluster.
     * This should only be used for debugging and troubleshooting.
     * Defaults to false.
     */
    enableAlterSystem?: boolean;
    /**
     * Options to specify LDAP configuration
     */
    ldap?: {
      /**
       * Bind as authentication configuration
       */
      bindAsAuth?: {
        /**
         * Prefix for the bind authentication option
         */
        prefix?: string;
        /**
         * Suffix for the bind authentication option
         */
        suffix?: string;
      };
      /**
       * Bind+Search authentication configuration
       */
      bindSearchAuth?: {
        /**
         * Root DN to begin the user search
         */
        baseDN?: string;
        /**
         * DN of the user to bind to the directory
         */
        bindDN?: string;
        /**
         * Secret with the password for the user to bind to the directory
         */
        bindPassword?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          key: string;
          /**
           * Name of the referent.
           * This field is effectively required, but due to backwards compatibility is
           * allowed to be empty. Instances of this type with an empty value here are
           * almost certainly wrong.
           * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          name?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          optional?: boolean;
        };
        /**
         * Attribute to match against the username
         */
        searchAttribute?: string;
        /**
         * Search filter to use when doing the search+bind authentication
         */
        searchFilter?: string;
      };
      /**
       * LDAP server port
       */
      port?: number;
      /**
       * LDAP schema to be used, possible options are `ldap` and `ldaps`
       */
      scheme?: "ldap" | "ldaps";
      /**
       * LDAP hostname or IP address
       */
      server?: string;
      /**
       * Set to 'true' to enable LDAP over TLS. 'false' is default
       */
      tls?: boolean;
    };
    /**
     * PostgreSQL configuration options (postgresql.conf)
     */
    parameters?: {
      [k: string]: string;
    };
    /**
     * PostgreSQL Host Based Authentication rules (lines to be appended
     * to the pg_hba.conf file)
     */
    pg_hba?: string[];
    /**
     * PostgreSQL User Name Maps rules (lines to be appended
     * to the pg_ident.conf file)
     */
    pg_ident?: string[];
    /**
     * Specifies the maximum number of seconds to wait when promoting an instance to primary.
     * Default value is 40000000, greater than one year in seconds,
     * big enough to simulate an infinite timeout
     */
    promotionTimeout?: number;
    /**
     * Lists of shared preload libraries to add to the default ones
     */
    shared_preload_libraries?: string[];
    /**
     * Requirements to be met by sync replicas. This will affect how the "synchronous_standby_names" parameter will be
     * set up.
     */
    syncReplicaElectionConstraint?: {
      /**
       * This flag enables the constraints for sync replicas
       */
      enabled: boolean;
      /**
       * A list of node labels values to extract and compare to evaluate if the pods reside in the same topology or not
       */
      nodeLabelsAntiAffinity?: string[];
    };
    /**
     * Configuration of the PostgreSQL synchronous replication feature
     */
    synchronous?: {
      /**
       * If set to "required", data durability is strictly enforced. Write operations
       * with synchronous commit settings (`on`, `remote_write`, or `remote_apply`) will
       * block if there are insufficient healthy replicas, ensuring data persistence.
       * If set to "preferred", data durability is maintained when healthy replicas
       * are available, but the required number of instances will adjust dynamically
       * if replicas become unavailable. This setting relaxes strict durability enforcement
       * to allow for operational continuity. This setting is only applicable if both
       * `standbyNamesPre` and `standbyNamesPost` are unset (empty).
       */
      dataDurability?: "required" | "preferred";
      /**
       * Specifies the maximum number of local cluster pods that can be
       * automatically included in the `synchronous_standby_names` option in
       * PostgreSQL.
       */
      maxStandbyNamesFromCluster?: number;
      /**
       * Method to select synchronous replication standbys from the listed
       * servers, accepting 'any' (quorum-based synchronous replication) or
       * 'first' (priority-based synchronous replication) as values.
       */
      method: "any" | "first";
      /**
       * Specifies the number of synchronous standby servers that
       * transactions must wait for responses from.
       */
      number: number;
      /**
       * A user-defined list of application names to be added to
       * `synchronous_standby_names` after local cluster pods (the order is
       * only useful for priority-based synchronous replication).
       */
      standbyNamesPost?: string[];
      /**
       * A user-defined list of application names to be added to
       * `synchronous_standby_names` before local cluster pods (the order is
       * only useful for priority-based synchronous replication).
       */
      standbyNamesPre?: string[];
    };
  };
  recovery?: {
    backupID?: string;
    cluster?: string;
    fullPath?: string;
    name?: string;
    namespace?: string;
    version?: string;
  };
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
  secret: string;
  storage?: {
    class?: string;
    size?: string;
  };
  tablespaces?: {
    /**
     * The name of the tablespace
     */
    name: string;
    /**
     * Owner is the PostgreSQL user owning the tablespace
     */
    owner?: {
      name?: string;
    };
    /**
     * The storage configuration for the tablespace
     */
    storage: {
      /**
       * Template to be used to generate the Persistent Volume Claim
       */
      pvcTemplate?: {
        /**
         * accessModes contains the desired access modes the volume should have.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
         */
        accessModes?: string[];
        /**
         * dataSource field can be used to specify either:
         * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
         * * An existing PVC (PersistentVolumeClaim)
         * If the provisioner or an external controller can support the specified data source,
         * it will create a new volume based on the contents of the specified data source.
         * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
         * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
         * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
         */
        dataSource?: {
          /**
           * APIGroup is the group for the resource being referenced.
           * If APIGroup is not specified, the specified Kind must be in the core API group.
           * For any other third-party types, APIGroup is required.
           */
          apiGroup?: string;
          /**
           * Kind is the type of resource being referenced
           */
          kind: string;
          /**
           * Name is the name of resource being referenced
           */
          name: string;
        };
        /**
         * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
         * volume is desired. This may be any object from a non-empty API group (non
         * core object) or a PersistentVolumeClaim object.
         * When this field is specified, volume binding will only succeed if the type of
         * the specified object matches some installed volume populator or dynamic
         * provisioner.
         * This field will replace the functionality of the dataSource field and as such
         * if both fields are non-empty, they must have the same value. For backwards
         * compatibility, when namespace isn't specified in dataSourceRef,
         * both fields (dataSource and dataSourceRef) will be set to the same
         * value automatically if one of them is empty and the other is non-empty.
         * When namespace is specified in dataSourceRef,
         * dataSource isn't set to the same value and must be empty.
         * There are three important differences between dataSource and dataSourceRef:
         * * While dataSource only allows two specific types of objects, dataSourceRef
         *   allows any non-core object, as well as PersistentVolumeClaim objects.
         * * While dataSource ignores disallowed values (dropping them), dataSourceRef
         *   preserves all values, and generates an error if a disallowed value is
         *   specified.
         * * While dataSource only allows local objects, dataSourceRef allows objects
         *   in any namespaces.
         * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
         * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
         */
        dataSourceRef?: {
          /**
           * APIGroup is the group for the resource being referenced.
           * If APIGroup is not specified, the specified Kind must be in the core API group.
           * For any other third-party types, APIGroup is required.
           */
          apiGroup?: string;
          /**
           * Kind is the type of resource being referenced
           */
          kind: string;
          /**
           * Name is the name of resource being referenced
           */
          name: string;
          /**
           * Namespace is the namespace of resource being referenced
           * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
           * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
           */
          namespace?: string;
        };
        /**
         * resources represents the minimum resources the volume should have.
         * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
         * that are lower than previous value but must still be higher than capacity recorded in the
         * status field of the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
         */
        resources?: {
          /**
           * Limits describes the maximum amount of compute resources allowed.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          limits?: {
            [k: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required.
           * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
           * otherwise to an implementation-defined value. Requests cannot exceed Limits.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          requests?: {
            [k: string]: number | string;
          };
        };
        /**
         * selector is a label query over volumes to consider for binding.
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
             * operator represents a key's relationship to a set of values.
             * Valid operators are In, NotIn, Exists and DoesNotExist.
             */
            operator: string;
            /**
             * values is an array of string values. If the operator is In or NotIn,
             * the values array must be non-empty. If the operator is Exists or DoesNotExist,
             * the values array must be empty. This array is replaced during a strategic
             * merge patch.
             */
            values?: string[];
          }[];
          /**
           * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
           * map is equivalent to an element of matchExpressions, whose key field is "key", the
           * operator is "In", and the values array contains only "value". The requirements are ANDed.
           */
          matchLabels?: {
            [k: string]: string;
          };
        };
        /**
         * storageClassName is the name of the StorageClass required by the claim.
         * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
         */
        storageClassName?: string;
        /**
         * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
         * If specified, the CSI driver will create or update the volume with the attributes defined
         * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
         * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
         * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
         * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
         * will be set by the persistentvolume controller if it exists.
         * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
         * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
         * exists.
         * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
         * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
         */
        volumeAttributesClassName?: string;
        /**
         * volumeMode defines what type of volume is required by the claim.
         * Value of Filesystem is implied when not included in claim spec.
         */
        volumeMode?: string;
        /**
         * volumeName is the binding reference to the PersistentVolume backing this claim.
         */
        volumeName?: string;
      };
      /**
       * Resize existent PVCs, defaults to true
       */
      resizeInUseVolumes?: boolean;
      /**
       * Size of the storage. Required if not already specified in the PVC template.
       * Changes to this field are automatically reapplied to the created PVCs.
       * Size cannot be decreased.
       */
      size?: string;
      /**
       * StorageClass to use for PVCs. Applied after
       * evaluating the PVC template, if available.
       * If not specified, the generated PVCs will use the
       * default storage class
       */
      storageClass?: string;
    };
    /**
     * When set to true, the tablespace will be added as a `temp_tablespaces`
     * entry in PostgreSQL, and will be available to automatically house temp
     * database objects, or other temporary files. Please refer to PostgreSQL
     * documentation for more information on the `temp_tablespaces` GUC.
     */
    temporary?: boolean;
  }[];
  useDevticonImage?: boolean;
  walStorage?: {
    class?: string;
    size?: string;
  };
}

export interface PostgresOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: PostgresSpec;
}

export function postgres(opts: PostgresOpts): ResourceManifest {
  return resource({
    apiVersion: "apps.cloudticon.com/v1alpha1",
    kind: "Postgres",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

export interface ProjectSecretsSpec {
  env: string;
  project: string;
}

export interface ProjectSecretsOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: ProjectSecretsSpec;
}

export function projectSecrets(opts: ProjectSecretsOpts): ResourceManifest {
  return resource({
    apiVersion: "apps.cloudticon.com/v1alpha1",
    kind: "ProjectSecrets",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
