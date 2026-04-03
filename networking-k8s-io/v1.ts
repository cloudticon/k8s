/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import {
  resource,
  resourceClusterScope,
  type ClusterScopedResourceManifest,
  type ResourceManifest,
} from "../resource";

/**
 * Spec is the desired state of the IngressClass. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
export type IngressClassSpec = {
  /**
   * Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
   */
  controller?: string;
  /**
   * Parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.
   */
  parameters?: {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced.
     */
    kind: string;
    /**
     * Name is the name of resource being referenced.
     */
    name: string;
    /**
     * Namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster".
     */
    namespace?: string;
    /**
     * Scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace".
     */
    scope?: string;
  };
};

export interface IngressClassOpts {
  name: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: IngressClassSpec;
}

export function ingressClass(
  opts: IngressClassOpts,
): ClusterScopedResourceManifest {
  return resourceClusterScope({
    apiVersion: "networking.k8s.io/v1",
    kind: "IngressClass",
    metadata: {
      name: opts.name,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
export type IngressSpec = {
  /**
   * DefaultBackend is the backend that should handle requests that don't match any rule. If Rules are not specified, DefaultBackend must be specified. If DefaultBackend is not set, the handling of requests that do not match any of the rules will be up to the Ingress controller.
   */
  defaultBackend?: {
    /**
     * Resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".
     */
    resource?: {
      /**
       * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
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
     * Service references a Service as a Backend. This is a mutually exclusive setting with "Resource".
     */
    service?: {
      /**
       * Name is the referenced service. The service must exist in the same namespace as the Ingress object.
       */
      name: string;
      /**
       * Port of the referenced service. A port name or port number is required for a IngressServiceBackend.
       */
      port?: {
        /**
         * Name is the name of the port on the Service. This is a mutually exclusive setting with "Number".
         */
        name?: string;
        /**
         * Number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
         */
        number?: number;
      };
    };
  };
  /**
   * IngressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
   */
  ingressClassName?: string;
  /**
   * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
   */
  rules?: {
    /**
     * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
     *    the IP in the Spec of the parent Ingress.
     * 2. The `:` delimiter is not respected because ports are not allowed.
     * 	  Currently the port of an Ingress is implicitly :80 for http and
     * 	  :443 for https.
     * Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
     *
     * Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
     */
    host?: string;
    /**
     * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
     */
    http?: {
      /**
       * A collection of paths that map requests to backends.
       */
      paths: {
        /**
         * Backend defines the referenced service endpoint to which the traffic will be forwarded to.
         */
        backend: {
          /**
           * Resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".
           */
          resource?: {
            /**
             * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
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
           * Service references a Service as a Backend. This is a mutually exclusive setting with "Resource".
           */
          service?: {
            /**
             * Name is the referenced service. The service must exist in the same namespace as the Ingress object.
             */
            name: string;
            /**
             * Port of the referenced service. A port name or port number is required for a IngressServiceBackend.
             */
            port?: {
              /**
               * Name is the name of the port on the Service. This is a mutually exclusive setting with "Number".
               */
              name?: string;
              /**
               * Number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
               */
              number?: number;
            };
          };
        };
        /**
         * Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".
         */
        path?: string;
        /**
         * PathType determines the interpretation of the Path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
         *   done on a path element by element basis. A path element refers is the
         *   list of labels in the path split by the '/' separator. A request is a
         *   match for path p if every p is an element-wise prefix of p of the
         *   request path. Note that if the last element of the path is a substring
         *   of the last element in request path, it is not a match (e.g. /foo/bar
         *   matches /foo/bar/baz, but does not match /foo/barbaz).
         * * ImplementationSpecific: Interpretation of the Path matching is up to
         *   the IngressClass. Implementations can treat this as a separate PathType
         *   or treat it identically to Prefix or Exact path types.
         * Implementations are required to support all path types.
         */
        pathType: string;
      }[];
    };
  }[];
  /**
   * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
   */
  tls?: {
    /**
     * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
     */
    hosts?: string[];
    /**
     * SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
     */
    secretName?: string;
  }[];
};

export interface IngressOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: IngressSpec;
}

export function ingress(opts: IngressOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.k8s.io/v1",
    kind: "Ingress",
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
 * Specification of the desired behavior for this NetworkPolicy.
 */
export type NetworkPolicySpec = {
  /**
   * List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
   */
  egress?: {
    /**
     * List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
     */
    ports?: {
      /**
       * If set, indicates that the range of ports from port to endPort, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
       */
      endPort?: number;
      /**
       * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
       */
      port?: number | string;
      /**
       * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
       */
      protocol?: string;
    }[];
    /**
     * List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
     */
    to?: {
      /**
       * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
       */
      ipBlock?: {
        /**
         * CIDR is a string representing the IP Block Valid examples are "192.168.1.0/24" or "2001:db8::/64"
         */
        cidr: string;
        /**
         * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the CIDR range
         */
        except?: string[];
      };
      /**
       * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
       *
       * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
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
       * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
       *
       * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
       */
      podSelector?: {
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
    }[];
  }[];
  /**
   * List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
   */
  ingress?: {
    /**
     * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
     */
    from?: {
      /**
       * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
       */
      ipBlock?: {
        /**
         * CIDR is a string representing the IP Block Valid examples are "192.168.1.0/24" or "2001:db8::/64"
         */
        cidr: string;
        /**
         * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the CIDR range
         */
        except?: string[];
      };
      /**
       * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
       *
       * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
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
       * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
       *
       * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
       */
      podSelector?: {
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
    }[];
    /**
     * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
     */
    ports?: {
      /**
       * If set, indicates that the range of ports from port to endPort, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
       */
      endPort?: number;
      /**
       * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
       */
      port?: number | string;
      /**
       * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
       */
      protocol?: string;
    }[];
  }[];
  /**
   * Selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
   */
  podSelector: {
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
   * List of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
   */
  policyTypes?: string[];
};

export interface NetworkPolicyOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: NetworkPolicySpec;
}

export function networkPolicy(opts: NetworkPolicyOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.k8s.io/v1",
    kind: "NetworkPolicy",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
