/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * Configuration affecting load balancing, outlier detection, etc. See more details at: https://istio.io/docs/reference/config/networking/destination-rule.html
 */
export interface DestinationRuleSpec {
  /**
   * A list of namespaces to which this destination rule is exported.
   */
  exportTo?: string[];
  /**
   * The name of a service from the service registry.
   */
  host: string;
  /**
   * One or more named sets that represent individual versions of a service.
   */
  subsets?: {
    /**
     * Labels apply a filter over the endpoints of a service in the service registry.
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * Name of the subset.
     */
    name: string;
    /**
     * Traffic policies that apply to this subset.
     */
    trafficPolicy?: {
      connectionPool?: {
        /**
         * HTTP connection pool settings.
         */
        http?: {
          /**
           * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
           *
           * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
           */
          h2UpgradePolicy?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
          /**
           * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
           */
          http1MaxPendingRequests?: number;
          /**
           * Maximum number of active requests to a destination.
           */
          http2MaxRequests?: number;
          /**
           * The idle timeout for upstream connection pool connections.
           */
          idleTimeout?: string;
          /**
           * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
           */
          maxConcurrentStreams?: number;
          /**
           * Maximum number of requests per connection to a backend.
           */
          maxRequestsPerConnection?: number;
          /**
           * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
           */
          maxRetries?: number;
          /**
           * If set to true, client protocol will be preserved while initiating connection to backend.
           */
          useClientProtocol?: boolean;
        };
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        tcp?: {
          /**
           * TCP connection timeout.
           */
          connectTimeout?: string;
          /**
           * The idle timeout for TCP connections.
           */
          idleTimeout?: string;
          /**
           * The maximum duration of a connection.
           */
          maxConnectionDuration?: string;
          /**
           * Maximum number of HTTP1 /TCP connections to a destination host.
           */
          maxConnections?: number;
          /**
           * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
           */
          tcpKeepalive?: {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: string;
          };
        };
      };
      /**
       * Settings controlling the load balancer algorithms.
       */
      loadBalancer?: {
        [k: string]: unknown;
      };
      outlierDetection?: {
        /**
         * Minimum ejection duration.
         */
        baseEjectionTime?: string;
        /**
         * Number of 5xx errors before a host is ejected from the connection pool.
         */
        consecutive5xxErrors?: number;
        consecutiveErrors?: number;
        /**
         * Number of gateway errors before a host is ejected from the connection pool.
         */
        consecutiveGatewayErrors?: number;
        /**
         * The number of consecutive locally originated failures before ejection occurs.
         */
        consecutiveLocalOriginFailures?: number;
        /**
         * Time interval between ejection sweep analysis.
         */
        interval?: string;
        /**
         * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
         */
        maxEjectionPercent?: number;
        /**
         * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
         */
        minHealthPercent?: number;
        /**
         * Determines whether to distinguish local origin failures from external errors.
         */
        splitExternalLocalOriginErrors?: boolean;
      };
      /**
       * Traffic policies specific to individual ports.
       *
       * @maxItems 4096
       */
      portLevelSettings?: {
        connectionPool?: {
          /**
           * HTTP connection pool settings.
           */
          http?: {
            /**
             * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
             *
             * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
             */
            h2UpgradePolicy?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
            /**
             * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
             */
            http1MaxPendingRequests?: number;
            /**
             * Maximum number of active requests to a destination.
             */
            http2MaxRequests?: number;
            /**
             * The idle timeout for upstream connection pool connections.
             */
            idleTimeout?: string;
            /**
             * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
             */
            maxConcurrentStreams?: number;
            /**
             * Maximum number of requests per connection to a backend.
             */
            maxRequestsPerConnection?: number;
            /**
             * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
             */
            maxRetries?: number;
            /**
             * If set to true, client protocol will be preserved while initiating connection to backend.
             */
            useClientProtocol?: boolean;
          };
          /**
           * Settings common to both HTTP and TCP upstream connections.
           */
          tcp?: {
            /**
             * TCP connection timeout.
             */
            connectTimeout?: string;
            /**
             * The idle timeout for TCP connections.
             */
            idleTimeout?: string;
            /**
             * The maximum duration of a connection.
             */
            maxConnectionDuration?: string;
            /**
             * Maximum number of HTTP1 /TCP connections to a destination host.
             */
            maxConnections?: number;
            /**
             * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
             */
            tcpKeepalive?: {
              /**
               * The time duration between keep-alive probes.
               */
              interval?: string;
              /**
               * Maximum number of keepalive probes to send without response before deciding the connection is dead.
               */
              probes?: number;
              /**
               * The time duration a connection needs to be idle before keep-alive probes start being sent.
               */
              time?: string;
            };
          };
        };
        /**
         * Settings controlling the load balancer algorithms.
         */
        loadBalancer?: {
          [k: string]: unknown;
        };
        outlierDetection?: {
          /**
           * Minimum ejection duration.
           */
          baseEjectionTime?: string;
          /**
           * Number of 5xx errors before a host is ejected from the connection pool.
           */
          consecutive5xxErrors?: number;
          consecutiveErrors?: number;
          /**
           * Number of gateway errors before a host is ejected from the connection pool.
           */
          consecutiveGatewayErrors?: number;
          /**
           * The number of consecutive locally originated failures before ejection occurs.
           */
          consecutiveLocalOriginFailures?: number;
          /**
           * Time interval between ejection sweep analysis.
           */
          interval?: string;
          /**
           * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
           */
          maxEjectionPercent?: number;
          /**
           * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
           */
          minHealthPercent?: number;
          /**
           * Determines whether to distinguish local origin failures from external errors.
           */
          splitExternalLocalOriginErrors?: boolean;
        };
        /**
         * Specifies the number of a port on the destination service on which this policy is being applied.
         */
        port?: {
          number?: number;
        };
        /**
         * TLS related settings for connections to the upstream service.
         */
        tls?: {
          /**
           * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
           */
          caCertificates?: string;
          /**
           * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
           */
          caCrl?: string;
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          clientCertificate?: string;
          /**
           * The name of the secret that holds the TLS certs for the client including the CA certificates.
           */
          credentialName?: string;
          /**
           * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
           */
          insecureSkipVerify?: boolean;
          /**
           * Indicates whether connections to this port should be secured using TLS.
           *
           * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
           */
          mode?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
          /**
           * REQUIRED if mode is `MUTUAL`.
           */
          privateKey?: string;
          /**
           * SNI string to present to the server during TLS handshake.
           */
          sni?: string;
          /**
           * A list of alternate names to verify the subject identity in the certificate.
           */
          subjectAltNames?: string[];
        };
      }[];
      /**
       * The upstream PROXY protocol settings.
       */
      proxyProtocol?: {
        /**
         * The PROXY protocol version to use.
         *
         * Valid Options: V1, V2
         */
        version?: "V1" | "V2";
      };
      /**
       * Specifies a limit on concurrent retries in relation to the number of active requests.
       */
      retryBudget?: {
        /**
         * Specifies the minimum retry concurrency allowed for the retry budget.
         */
        minRetryConcurrency?: number;
        /**
         * Specifies the limit on concurrent retries as a percentage of the sum of active requests and active pending requests.
         */
        percent?: number;
      };
      /**
       * TLS related settings for connections to the upstream service.
       */
      tls?: {
        /**
         * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
         */
        caCertificates?: string;
        /**
         * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
         */
        caCrl?: string;
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        clientCertificate?: string;
        /**
         * The name of the secret that holds the TLS certs for the client including the CA certificates.
         */
        credentialName?: string;
        /**
         * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
         */
        insecureSkipVerify?: boolean;
        /**
         * Indicates whether connections to this port should be secured using TLS.
         *
         * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
         */
        mode?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        privateKey?: string;
        /**
         * SNI string to present to the server during TLS handshake.
         */
        sni?: string;
        /**
         * A list of alternate names to verify the subject identity in the certificate.
         */
        subjectAltNames?: string[];
      };
      /**
       * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
       */
      tunnel?: {
        /**
         * Specifies which protocol to use for tunneling the downstream connection.
         */
        protocol?: string;
        /**
         * Specifies a host to which the downstream connection is tunneled.
         */
        targetHost: string;
        /**
         * Specifies a port to which the downstream connection is tunneled.
         */
        targetPort: number;
      };
    };
  }[];
  /**
   * Traffic policies to apply (load balancing policy, connection pool sizes, outlier detection).
   */
  trafficPolicy?: {
    connectionPool?: {
      /**
       * HTTP connection pool settings.
       */
      http?: {
        /**
         * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
         *
         * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
         */
        h2UpgradePolicy?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
        /**
         * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
         */
        http1MaxPendingRequests?: number;
        /**
         * Maximum number of active requests to a destination.
         */
        http2MaxRequests?: number;
        /**
         * The idle timeout for upstream connection pool connections.
         */
        idleTimeout?: string;
        /**
         * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
         */
        maxConcurrentStreams?: number;
        /**
         * Maximum number of requests per connection to a backend.
         */
        maxRequestsPerConnection?: number;
        /**
         * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
         */
        maxRetries?: number;
        /**
         * If set to true, client protocol will be preserved while initiating connection to backend.
         */
        useClientProtocol?: boolean;
      };
      /**
       * Settings common to both HTTP and TCP upstream connections.
       */
      tcp?: {
        /**
         * TCP connection timeout.
         */
        connectTimeout?: string;
        /**
         * The idle timeout for TCP connections.
         */
        idleTimeout?: string;
        /**
         * The maximum duration of a connection.
         */
        maxConnectionDuration?: string;
        /**
         * Maximum number of HTTP1 /TCP connections to a destination host.
         */
        maxConnections?: number;
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        tcpKeepalive?: {
          /**
           * The time duration between keep-alive probes.
           */
          interval?: string;
          /**
           * Maximum number of keepalive probes to send without response before deciding the connection is dead.
           */
          probes?: number;
          /**
           * The time duration a connection needs to be idle before keep-alive probes start being sent.
           */
          time?: string;
        };
      };
    };
    /**
     * Settings controlling the load balancer algorithms.
     */
    loadBalancer?: {
      [k: string]: unknown;
    };
    outlierDetection?: {
      /**
       * Minimum ejection duration.
       */
      baseEjectionTime?: string;
      /**
       * Number of 5xx errors before a host is ejected from the connection pool.
       */
      consecutive5xxErrors?: number;
      consecutiveErrors?: number;
      /**
       * Number of gateway errors before a host is ejected from the connection pool.
       */
      consecutiveGatewayErrors?: number;
      /**
       * The number of consecutive locally originated failures before ejection occurs.
       */
      consecutiveLocalOriginFailures?: number;
      /**
       * Time interval between ejection sweep analysis.
       */
      interval?: string;
      /**
       * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
       */
      maxEjectionPercent?: number;
      /**
       * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
       */
      minHealthPercent?: number;
      /**
       * Determines whether to distinguish local origin failures from external errors.
       */
      splitExternalLocalOriginErrors?: boolean;
    };
    /**
     * Traffic policies specific to individual ports.
     *
     * @maxItems 4096
     */
    portLevelSettings?: {
      connectionPool?: {
        /**
         * HTTP connection pool settings.
         */
        http?: {
          /**
           * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
           *
           * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
           */
          h2UpgradePolicy?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
          /**
           * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
           */
          http1MaxPendingRequests?: number;
          /**
           * Maximum number of active requests to a destination.
           */
          http2MaxRequests?: number;
          /**
           * The idle timeout for upstream connection pool connections.
           */
          idleTimeout?: string;
          /**
           * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
           */
          maxConcurrentStreams?: number;
          /**
           * Maximum number of requests per connection to a backend.
           */
          maxRequestsPerConnection?: number;
          /**
           * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
           */
          maxRetries?: number;
          /**
           * If set to true, client protocol will be preserved while initiating connection to backend.
           */
          useClientProtocol?: boolean;
        };
        /**
         * Settings common to both HTTP and TCP upstream connections.
         */
        tcp?: {
          /**
           * TCP connection timeout.
           */
          connectTimeout?: string;
          /**
           * The idle timeout for TCP connections.
           */
          idleTimeout?: string;
          /**
           * The maximum duration of a connection.
           */
          maxConnectionDuration?: string;
          /**
           * Maximum number of HTTP1 /TCP connections to a destination host.
           */
          maxConnections?: number;
          /**
           * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
           */
          tcpKeepalive?: {
            /**
             * The time duration between keep-alive probes.
             */
            interval?: string;
            /**
             * Maximum number of keepalive probes to send without response before deciding the connection is dead.
             */
            probes?: number;
            /**
             * The time duration a connection needs to be idle before keep-alive probes start being sent.
             */
            time?: string;
          };
        };
      };
      /**
       * Settings controlling the load balancer algorithms.
       */
      loadBalancer?: {
        [k: string]: unknown;
      };
      outlierDetection?: {
        /**
         * Minimum ejection duration.
         */
        baseEjectionTime?: string;
        /**
         * Number of 5xx errors before a host is ejected from the connection pool.
         */
        consecutive5xxErrors?: number;
        consecutiveErrors?: number;
        /**
         * Number of gateway errors before a host is ejected from the connection pool.
         */
        consecutiveGatewayErrors?: number;
        /**
         * The number of consecutive locally originated failures before ejection occurs.
         */
        consecutiveLocalOriginFailures?: number;
        /**
         * Time interval between ejection sweep analysis.
         */
        interval?: string;
        /**
         * Maximum % of hosts in the load balancing pool for the upstream service that can be ejected.
         */
        maxEjectionPercent?: number;
        /**
         * Outlier detection will be enabled as long as the associated load balancing pool has at least `minHealthPercent` hosts in healthy mode.
         */
        minHealthPercent?: number;
        /**
         * Determines whether to distinguish local origin failures from external errors.
         */
        splitExternalLocalOriginErrors?: boolean;
      };
      /**
       * Specifies the number of a port on the destination service on which this policy is being applied.
       */
      port?: {
        number?: number;
      };
      /**
       * TLS related settings for connections to the upstream service.
       */
      tls?: {
        /**
         * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
         */
        caCertificates?: string;
        /**
         * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
         */
        caCrl?: string;
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        clientCertificate?: string;
        /**
         * The name of the secret that holds the TLS certs for the client including the CA certificates.
         */
        credentialName?: string;
        /**
         * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
         */
        insecureSkipVerify?: boolean;
        /**
         * Indicates whether connections to this port should be secured using TLS.
         *
         * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
         */
        mode?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        privateKey?: string;
        /**
         * SNI string to present to the server during TLS handshake.
         */
        sni?: string;
        /**
         * A list of alternate names to verify the subject identity in the certificate.
         */
        subjectAltNames?: string[];
      };
    }[];
    /**
     * The upstream PROXY protocol settings.
     */
    proxyProtocol?: {
      /**
       * The PROXY protocol version to use.
       *
       * Valid Options: V1, V2
       */
      version?: "V1" | "V2";
    };
    /**
     * Specifies a limit on concurrent retries in relation to the number of active requests.
     */
    retryBudget?: {
      /**
       * Specifies the minimum retry concurrency allowed for the retry budget.
       */
      minRetryConcurrency?: number;
      /**
       * Specifies the limit on concurrent retries as a percentage of the sum of active requests and active pending requests.
       */
      percent?: number;
    };
    /**
     * TLS related settings for connections to the upstream service.
     */
    tls?: {
      /**
       * OPTIONAL: The path to the file containing certificate authority certificates to use in verifying a presented server certificate.
       */
      caCertificates?: string;
      /**
       * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented server certificate.
       */
      caCrl?: string;
      /**
       * REQUIRED if mode is `MUTUAL`.
       */
      clientCertificate?: string;
      /**
       * The name of the secret that holds the TLS certs for the client including the CA certificates.
       */
      credentialName?: string;
      /**
       * `insecureSkipVerify` specifies whether the proxy should skip verifying the CA signature and SAN for the server certificate corresponding to the host.
       */
      insecureSkipVerify?: boolean;
      /**
       * Indicates whether connections to this port should be secured using TLS.
       *
       * Valid Options: DISABLE, SIMPLE, MUTUAL, ISTIO_MUTUAL
       */
      mode?: "DISABLE" | "SIMPLE" | "MUTUAL" | "ISTIO_MUTUAL";
      /**
       * REQUIRED if mode is `MUTUAL`.
       */
      privateKey?: string;
      /**
       * SNI string to present to the server during TLS handshake.
       */
      sni?: string;
      /**
       * A list of alternate names to verify the subject identity in the certificate.
       */
      subjectAltNames?: string[];
    };
    /**
     * Configuration of tunneling TCP over other transport or application layers for the host configured in the DestinationRule.
     */
    tunnel?: {
      /**
       * Specifies which protocol to use for tunneling the downstream connection.
       */
      protocol?: string;
      /**
       * Specifies a host to which the downstream connection is tunneled.
       */
      targetHost: string;
      /**
       * Specifies a port to which the downstream connection is tunneled.
       */
      targetPort: number;
    };
  };
  /**
   * Criteria used to select the specific set of pods/VMs on which this `DestinationRule` configuration should be applied.
   */
  workloadSelector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
     */
    matchLabels?: {
      [k: string]: string;
    };
  };
}

export interface DestinationRuleOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: DestinationRuleSpec;
}

export function destinationRule(opts: DestinationRuleOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "DestinationRule",
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
 * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
 */
export interface GatewaySpec {
  /**
   * One or more labels that indicate a specific set of pods/VMs on which this gateway configuration should be applied.
   */
  selector?: {
    [k: string]: string;
  };
  /**
   * A list of server specifications.
   */
  servers?: {
    /**
     * The ip or the Unix domain socket to which the listener should be bound to.
     */
    bind?: string;
    defaultEndpoint?: string;
    /**
     * One or more hosts exposed by this gateway.
     */
    hosts: string[];
    /**
     * An optional name of the server, when set must be unique across all servers.
     */
    name?: string;
    /**
     * The Port on which the proxy should listen for incoming connections.
     */
    port: {
      /**
       * Label assigned to the port.
       */
      name: string;
      /**
       * A valid non-negative integer port number.
       */
      number: number;
      /**
       * The protocol exposed on the port.
       */
      protocol: string;
      targetPort?: number;
    };
    /**
     * Set of TLS related options that govern the server's behavior.
     */
    tls?: {
      /**
       * For mutual TLS, the name of the secret or the configmap that holds CA certificates.
       */
      caCertCredentialName?: string;
      /**
       * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
       */
      caCertificates?: string;
      /**
       * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
       */
      caCrl?: string;
      /**
       * Optional: If specified, only support the specified cipher list.
       */
      cipherSuites?: string[];
      /**
       * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
       */
      credentialName?: string;
      /**
       * Same as CredentialName but for multiple certificates.
       *
       * @minItems 1
       * @maxItems 2
       */
      credentialNames?: [string] | [string, string];
      /**
       * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
       */
      httpsRedirect?: boolean;
      /**
       * Optional: Maximum TLS protocol version.
       *
       * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
       */
      maxProtocolVersion?:
        | "TLS_AUTO"
        | "TLSV1_0"
        | "TLSV1_1"
        | "TLSV1_2"
        | "TLSV1_3";
      /**
       * Optional: Minimum TLS protocol version.
       *
       * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
       */
      minProtocolVersion?:
        | "TLS_AUTO"
        | "TLSV1_0"
        | "TLSV1_1"
        | "TLSV1_2"
        | "TLSV1_3";
      /**
       * Optional: Indicates whether connections to this port should be secured using TLS.
       *
       * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
       */
      mode?:
        | "PASSTHROUGH"
        | "SIMPLE"
        | "MUTUAL"
        | "AUTO_PASSTHROUGH"
        | "ISTIO_MUTUAL"
        | "OPTIONAL_MUTUAL";
      /**
       * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
       */
      privateKey?: string;
      /**
       * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
       */
      serverCertificate?: string;
      /**
       * A list of alternate names to verify the subject identity in the certificate presented by the client.
       */
      subjectAltNames?: string[];
      /**
       * Only one of `server_certificate`, `private_key` or `credential_name` or `credential_names` or `tls_certificates` should be specified.
       *
       * @minItems 1
       * @maxItems 2
       */
      tlsCertificates?:
        | [
            {
              caCertificates?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              privateKey?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              serverCertificate?: string;
            },
          ]
        | [
            {
              caCertificates?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              privateKey?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              serverCertificate?: string;
            },
            {
              caCertificates?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              privateKey?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              serverCertificate?: string;
            },
          ];
      /**
       * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
       */
      verifyCertificateHash?: string[];
      /**
       * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
       */
      verifyCertificateSpki?: string[];
    };
  }[];
}

export interface GatewayOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: GatewaySpec;
}

export function gateway(opts: GatewayOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "Gateway",
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
 * Configuration affecting service registry. See more details at: https://istio.io/docs/reference/config/networking/service-entry.html
 */
export interface ServiceEntrySpec {
  /**
   * The virtual IP addresses associated with the service.
   *
   * @maxItems 256
   */
  addresses?: string[];
  /**
   * One or more endpoints associated with the service.
   *
   * @maxItems 4096
   */
  endpoints?: {
    /**
     * Address associated with the network endpoint without the port.
     */
    address?: string;
    /**
     * One or more labels associated with the endpoint.
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * The locality associated with the endpoint.
     */
    locality?: string;
    /**
     * Network enables Istio to group endpoints resident in the same L3 domain/network.
     */
    network?: string;
    /**
     * Set of ports associated with the endpoint.
     */
    ports?: {
      [k: string]: number;
    };
    /**
     * The service account associated with the workload if a sidecar is present in the workload.
     */
    serviceAccount?: string;
    /**
     * The load balancing weight associated with the endpoint.
     */
    weight?: number;
  }[];
  /**
   * A list of namespaces to which this service is exported.
   */
  exportTo?: string[];
  /**
   * The hosts associated with the ServiceEntry.
   *
   * @minItems 1
   * @maxItems 256
   */
  hosts: [string, ...string[]];
  /**
   * Specify whether the service should be considered external to the mesh or part of the mesh.
   *
   * Valid Options: MESH_EXTERNAL, MESH_INTERNAL
   */
  location?: "MESH_EXTERNAL" | "MESH_INTERNAL";
  /**
   * The ports associated with the external service.
   *
   * @maxItems 256
   */
  ports?: {
    /**
     * Label assigned to the port.
     */
    name: string;
    /**
     * A valid non-negative integer port number.
     */
    number: number;
    /**
     * The protocol exposed on the port.
     */
    protocol?: string;
    /**
     * The port number on the endpoint where the traffic will be received.
     */
    targetPort?: number;
  }[];
  /**
   * Service resolution mode for the hosts.
   *
   * Valid Options: NONE, STATIC, DNS, DNS_ROUND_ROBIN, DYNAMIC_DNS
   */
  resolution?: "NONE" | "STATIC" | "DNS" | "DNS_ROUND_ROBIN" | "DYNAMIC_DNS";
  /**
   * If specified, the proxy will verify that the server certificate's subject alternate name matches one of the specified values.
   */
  subjectAltNames?: string[];
  /**
   * Applicable only for MESH_INTERNAL services.
   */
  workloadSelector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
     */
    labels?: {
      [k: string]: string;
    };
  };
}

export interface ServiceEntryOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: ServiceEntrySpec;
}

export function serviceEntry(opts: ServiceEntryOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "ServiceEntry",
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
 * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
 */
export interface SidecarSpec {
  /**
   * Egress specifies the configuration of the sidecar for processing outbound traffic from the attached workload instance to other services in the mesh.
   */
  egress?: {
    /**
     * The IP(IPv4 or IPv6) or the Unix domain socket to which the listener should be bound to.
     */
    bind?: string;
    /**
     * When the bind address is an IP, the captureMode option dictates how traffic to the listener is expected to be captured (or not).
     *
     * Valid Options: DEFAULT, IPTABLES, NONE
     */
    captureMode?: "DEFAULT" | "IPTABLES" | "NONE";
    /**
     * One or more service hosts exposed by the listener in `namespace/dnsName` format.
     */
    hosts: string[];
    /**
     * The port associated with the listener.
     */
    port?: {
      /**
       * Label assigned to the port.
       */
      name?: string;
      /**
       * A valid non-negative integer port number.
       */
      number?: number;
      /**
       * The protocol exposed on the port.
       */
      protocol?: string;
      targetPort?: number;
    };
  }[];
  /**
   * Settings controlling the volume of connections Envoy will accept from the network.
   */
  inboundConnectionPool?: {
    /**
     * HTTP connection pool settings.
     */
    http?: {
      /**
       * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
       *
       * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
       */
      h2UpgradePolicy?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
      /**
       * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
       */
      http1MaxPendingRequests?: number;
      /**
       * Maximum number of active requests to a destination.
       */
      http2MaxRequests?: number;
      /**
       * The idle timeout for upstream connection pool connections.
       */
      idleTimeout?: string;
      /**
       * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
       */
      maxConcurrentStreams?: number;
      /**
       * Maximum number of requests per connection to a backend.
       */
      maxRequestsPerConnection?: number;
      /**
       * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
       */
      maxRetries?: number;
      /**
       * If set to true, client protocol will be preserved while initiating connection to backend.
       */
      useClientProtocol?: boolean;
    };
    /**
     * Settings common to both HTTP and TCP upstream connections.
     */
    tcp?: {
      /**
       * TCP connection timeout.
       */
      connectTimeout?: string;
      /**
       * The idle timeout for TCP connections.
       */
      idleTimeout?: string;
      /**
       * The maximum duration of a connection.
       */
      maxConnectionDuration?: string;
      /**
       * Maximum number of HTTP1 /TCP connections to a destination host.
       */
      maxConnections?: number;
      /**
       * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
       */
      tcpKeepalive?: {
        /**
         * The time duration between keep-alive probes.
         */
        interval?: string;
        /**
         * Maximum number of keepalive probes to send without response before deciding the connection is dead.
         */
        probes?: number;
        /**
         * The time duration a connection needs to be idle before keep-alive probes start being sent.
         */
        time?: string;
      };
    };
  };
  /**
   * Ingress specifies the configuration of the sidecar for processing inbound traffic to the attached workload instance.
   */
  ingress?: {
    /**
     * The IP(IPv4 or IPv6) to which the listener should be bound.
     */
    bind?: string;
    /**
     * The captureMode option dictates how traffic to the listener is expected to be captured (or not).
     *
     * Valid Options: DEFAULT, IPTABLES, NONE
     */
    captureMode?: "DEFAULT" | "IPTABLES" | "NONE";
    /**
     * Settings controlling the volume of connections Envoy will accept from the network.
     */
    connectionPool?: {
      /**
       * HTTP connection pool settings.
       */
      http?: {
        /**
         * Specify if http1.1 connection should be upgraded to http2 for the associated destination.
         *
         * Valid Options: DEFAULT, DO_NOT_UPGRADE, UPGRADE
         */
        h2UpgradePolicy?: "DEFAULT" | "DO_NOT_UPGRADE" | "UPGRADE";
        /**
         * Maximum number of requests that will be queued while waiting for a ready connection pool connection.
         */
        http1MaxPendingRequests?: number;
        /**
         * Maximum number of active requests to a destination.
         */
        http2MaxRequests?: number;
        /**
         * The idle timeout for upstream connection pool connections.
         */
        idleTimeout?: string;
        /**
         * The maximum number of concurrent streams allowed for a peer on one HTTP/2 connection.
         */
        maxConcurrentStreams?: number;
        /**
         * Maximum number of requests per connection to a backend.
         */
        maxRequestsPerConnection?: number;
        /**
         * Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.
         */
        maxRetries?: number;
        /**
         * If set to true, client protocol will be preserved while initiating connection to backend.
         */
        useClientProtocol?: boolean;
      };
      /**
       * Settings common to both HTTP and TCP upstream connections.
       */
      tcp?: {
        /**
         * TCP connection timeout.
         */
        connectTimeout?: string;
        /**
         * The idle timeout for TCP connections.
         */
        idleTimeout?: string;
        /**
         * The maximum duration of a connection.
         */
        maxConnectionDuration?: string;
        /**
         * Maximum number of HTTP1 /TCP connections to a destination host.
         */
        maxConnections?: number;
        /**
         * If set then set SO_KEEPALIVE on the socket to enable TCP Keepalives.
         */
        tcpKeepalive?: {
          /**
           * The time duration between keep-alive probes.
           */
          interval?: string;
          /**
           * Maximum number of keepalive probes to send without response before deciding the connection is dead.
           */
          probes?: number;
          /**
           * The time duration a connection needs to be idle before keep-alive probes start being sent.
           */
          time?: string;
        };
      };
    };
    /**
     * The IP endpoint or Unix domain socket to which traffic should be forwarded to.
     */
    defaultEndpoint?: string;
    /**
     * The port associated with the listener.
     */
    port: {
      /**
       * Label assigned to the port.
       */
      name?: string;
      /**
       * A valid non-negative integer port number.
       */
      number?: number;
      /**
       * The protocol exposed on the port.
       */
      protocol?: string;
      targetPort?: number;
    };
    /**
     * Set of TLS related options that will enable TLS termination on the sidecar for requests originating from outside the mesh.
     */
    tls?: {
      /**
       * For mutual TLS, the name of the secret or the configmap that holds CA certificates.
       */
      caCertCredentialName?: string;
      /**
       * REQUIRED if mode is `MUTUAL` or `OPTIONAL_MUTUAL`.
       */
      caCertificates?: string;
      /**
       * OPTIONAL: The path to the file containing the certificate revocation list (CRL) to use in verifying a presented client side certificate.
       */
      caCrl?: string;
      /**
       * Optional: If specified, only support the specified cipher list.
       */
      cipherSuites?: string[];
      /**
       * For gateways running on Kubernetes, the name of the secret that holds the TLS certs including the CA certificates.
       */
      credentialName?: string;
      /**
       * Same as CredentialName but for multiple certificates.
       *
       * @minItems 1
       * @maxItems 2
       */
      credentialNames?: [string] | [string, string];
      /**
       * If set to true, the load balancer will send a 301 redirect for all http connections, asking the clients to use HTTPS.
       */
      httpsRedirect?: boolean;
      /**
       * Optional: Maximum TLS protocol version.
       *
       * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
       */
      maxProtocolVersion?:
        | "TLS_AUTO"
        | "TLSV1_0"
        | "TLSV1_1"
        | "TLSV1_2"
        | "TLSV1_3";
      /**
       * Optional: Minimum TLS protocol version.
       *
       * Valid Options: TLS_AUTO, TLSV1_0, TLSV1_1, TLSV1_2, TLSV1_3
       */
      minProtocolVersion?:
        | "TLS_AUTO"
        | "TLSV1_0"
        | "TLSV1_1"
        | "TLSV1_2"
        | "TLSV1_3";
      /**
       * Optional: Indicates whether connections to this port should be secured using TLS.
       *
       * Valid Options: PASSTHROUGH, SIMPLE, MUTUAL, AUTO_PASSTHROUGH, ISTIO_MUTUAL, OPTIONAL_MUTUAL
       */
      mode?:
        | "PASSTHROUGH"
        | "SIMPLE"
        | "MUTUAL"
        | "AUTO_PASSTHROUGH"
        | "ISTIO_MUTUAL"
        | "OPTIONAL_MUTUAL";
      /**
       * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
       */
      privateKey?: string;
      /**
       * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
       */
      serverCertificate?: string;
      /**
       * A list of alternate names to verify the subject identity in the certificate presented by the client.
       */
      subjectAltNames?: string[];
      /**
       * Only one of `server_certificate`, `private_key` or `credential_name` or `credential_names` or `tls_certificates` should be specified.
       *
       * @minItems 1
       * @maxItems 2
       */
      tlsCertificates?:
        | [
            {
              caCertificates?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              privateKey?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              serverCertificate?: string;
            },
          ]
        | [
            {
              caCertificates?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              privateKey?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              serverCertificate?: string;
            },
            {
              caCertificates?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              privateKey?: string;
              /**
               * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
               */
              serverCertificate?: string;
            },
          ];
      /**
       * An optional list of hex-encoded SHA-256 hashes of the authorized client certificates.
       */
      verifyCertificateHash?: string[];
      /**
       * An optional list of base64-encoded SHA-256 hashes of the SPKIs of authorized client certificates.
       */
      verifyCertificateSpki?: string[];
    };
  }[];
  /**
   * Set the default behavior of the sidecar for handling outbound traffic from the application.
   */
  outboundTrafficPolicy?: {
    egressProxy?: {
      /**
       * The name of a service from the service registry.
       */
      host: string;
      /**
       * Specifies the port on the host that is being addressed.
       */
      port?: {
        number?: number;
      };
      /**
       * The name of a subset within the service.
       */
      subset?: string;
    };
    /**
     *
     *
     * Valid Options: REGISTRY_ONLY, ALLOW_ANY
     */
    mode?: "REGISTRY_ONLY" | "ALLOW_ANY";
  };
  /**
   * Criteria used to select the specific set of pods/VMs on which this `Sidecar` configuration should be applied.
   */
  workloadSelector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which the configuration should be applied.
     */
    labels?: {
      [k: string]: string;
    };
  };
}

export interface SidecarOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: SidecarSpec;
}

export function sidecar(opts: SidecarOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "Sidecar",
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
 * Configuration affecting label/content routing, sni routing, etc. See more details at: https://istio.io/docs/reference/config/networking/virtual-service.html
 */
export interface VirtualServiceSpec {
  /**
   * A list of namespaces to which this virtual service is exported.
   */
  exportTo?: string[];
  /**
   * The names of gateways and sidecars that should apply these routes.
   */
  gateways?: string[];
  /**
   * The destination hosts to which traffic is being sent.
   */
  hosts?: string[];
  /**
   * An ordered list of route rules for HTTP traffic.
   */
  http?: {
    /**
     * Cross-Origin Resource Sharing policy (CORS).
     */
    corsPolicy?: {
      /**
       * Indicates whether the caller is allowed to send the actual request (not the preflight) using credentials.
       */
      allowCredentials?: boolean;
      /**
       * List of HTTP headers that can be used when requesting the resource.
       */
      allowHeaders?: string[];
      /**
       * List of HTTP methods allowed to access the resource.
       */
      allowMethods?: string[];
      allowOrigin?: string[];
      /**
       * String patterns that match allowed origins.
       */
      allowOrigins?: {
        [k: string]: unknown;
      }[];
      /**
       * A list of HTTP headers that the browsers are allowed to access.
       */
      exposeHeaders?: string[];
      /**
       * Specifies how long the results of a preflight request can be cached.
       */
      maxAge?: string;
      /**
       * Indicates whether preflight requests not matching the configured allowed origin shouldn't be forwarded to the upstream.
       *
       * Valid Options: FORWARD, IGNORE
       */
      unmatchedPreflights?: "UNSPECIFIED" | "FORWARD" | "IGNORE";
    };
    /**
     * Delegate is used to specify the particular VirtualService which can be used to define delegate HTTPRoute.
     */
    delegate?: {
      /**
       * Name specifies the name of the delegate VirtualService.
       */
      name?: string;
      /**
       * Namespace specifies the namespace where the delegate VirtualService resides.
       */
      namespace?: string;
    };
    /**
     * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
     */
    directResponse?: {
      /**
       * Specifies the content of the response body.
       */
      body?: {
        [k: string]: unknown;
      };
      /**
       * Specifies the HTTP response status to be returned.
       */
      status: number;
    };
    /**
     * Fault injection policy to apply on HTTP traffic at the client side.
     */
    fault?: {
      /**
       * Abort Http request attempts and return error codes back to downstream service, giving the impression that the upstream service is faulty.
       */
      abort?: {
        [k: string]: unknown;
      };
      /**
       * Delay requests before forwarding, emulating various failures such as network issues, overloaded upstream service, etc.
       */
      delay?: {
        [k: string]: unknown;
      };
    };
    headers?: {
      request?: {
        add?: {
          [k: string]: string;
        };
        remove?: string[];
        set?: {
          [k: string]: string;
        };
      };
      response?: {
        add?: {
          [k: string]: string;
        };
        remove?: string[];
        set?: {
          [k: string]: string;
        };
      };
    };
    /**
     * Match conditions to be satisfied for the rule to be activated.
     */
    match?: {
      /**
       * HTTP Authority values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
       */
      authority?: {
        [k: string]: unknown;
      };
      /**
       * Names of gateways where the rule should be applied.
       */
      gateways?: string[];
      /**
       * The header keys must be lowercase and use hyphen as the separator, e.g.
       */
      headers?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      /**
       * Flag to specify whether the URI matching should be case-insensitive.
       */
      ignoreUriCase?: boolean;
      /**
       * HTTP Method values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
       */
      method?: {
        [k: string]: unknown;
      };
      /**
       * The name assigned to a match.
       */
      name?: string;
      /**
       * Specifies the ports on the host that is being addressed.
       */
      port?: number;
      /**
       * Query parameters for matching.
       */
      queryParams?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
      /**
       * URI Scheme values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
       */
      scheme?: {
        [k: string]: unknown;
      };
      /**
       * One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.
       */
      sourceLabels?: {
        [k: string]: string;
      };
      /**
       * Source namespace constraining the applicability of a rule to workloads in that namespace.
       */
      sourceNamespace?: string;
      /**
       * The human readable prefix to use when emitting statistics for this route.
       */
      statPrefix?: string;
      /**
       * URI to match values are case-sensitive and formatted as follows: - `exact: "value"` for exact string match - `prefix: "value"` for prefix-based match - `regex: "value"` for [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
       */
      uri?: {
        [k: string]: unknown;
      };
      /**
       * withoutHeader has the same syntax with the header, but has opposite meaning.
       */
      withoutHeaders?: {
        [k: string]: {
          [k: string]: unknown;
        };
      };
    }[];
    /**
     * Mirror HTTP traffic to a another destination in addition to forwarding the requests to the intended destination.
     */
    mirror?: {
      /**
       * The name of a service from the service registry.
       */
      host: string;
      /**
       * Specifies the port on the host that is being addressed.
       */
      port?: {
        number?: number;
      };
      /**
       * The name of a subset within the service.
       */
      subset?: string;
    };
    mirror_percent?: number;
    mirrorPercent?: number;
    /**
     * Percentage of the traffic to be mirrored by the `mirror` field.
     */
    mirrorPercentage?: {
      value?: number;
    };
    /**
     * Specifies the destinations to mirror HTTP traffic in addition to the original destination.
     */
    mirrors?: {
      /**
       * Destination specifies the target of the mirror operation.
       */
      destination: {
        /**
         * The name of a service from the service registry.
         */
        host: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        port?: {
          number?: number;
        };
        /**
         * The name of a subset within the service.
         */
        subset?: string;
      };
      /**
       * Percentage of the traffic to be mirrored by the `destination` field.
       */
      percentage?: {
        value?: number;
      };
    }[];
    /**
     * The name assigned to the route for debugging purposes.
     */
    name?: string;
    /**
     * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
     */
    redirect?: {
      [k: string]: unknown;
    };
    /**
     * Retry policy for HTTP requests.
     */
    retries?: {
      /**
       * Number of retries to be allowed for a given request.
       */
      attempts?: number;
      /**
       * Specifies the minimum duration between retry attempts.
       */
      backoff?: string;
      /**
       * Timeout per attempt for a given request, including the initial call and any retries.
       */
      perTryTimeout?: string;
      /**
       * Flag to specify whether the retries should ignore previously tried hosts during retry.
       */
      retryIgnorePreviousHosts?: boolean;
      /**
       * Specifies the conditions under which retry takes place.
       */
      retryOn?: string;
      /**
       * Flag to specify whether the retries should retry to other localities.
       */
      retryRemoteLocalities?: boolean;
    };
    /**
     * Rewrite HTTP URIs and Authority headers.
     */
    rewrite?: {
      /**
       * rewrite the Authority/Host header with this value.
       */
      authority?: string;
      /**
       * rewrite the path (or the prefix) portion of the URI with this value.
       */
      uri?: string;
      /**
       * rewrite the path portion of the URI with the specified regex.
       */
      uriRegexRewrite?: {
        /**
         * [RE2 style regex-based match](https://github.com/google/re2/wiki/Syntax).
         */
        match?: string;
        /**
         * The string that should replace into matching portions of original URI.
         */
        rewrite?: string;
      };
    };
    /**
     * A HTTP rule can either return a direct_response, redirect or forward (default) traffic.
     */
    route?: {
      /**
       * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
       */
      destination: {
        /**
         * The name of a service from the service registry.
         */
        host: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        port?: {
          number?: number;
        };
        /**
         * The name of a subset within the service.
         */
        subset?: string;
      };
      headers?: {
        request?: {
          add?: {
            [k: string]: string;
          };
          remove?: string[];
          set?: {
            [k: string]: string;
          };
        };
        response?: {
          add?: {
            [k: string]: string;
          };
          remove?: string[];
          set?: {
            [k: string]: string;
          };
        };
      };
      /**
       * Weight specifies the relative proportion of traffic to be forwarded to the destination.
       */
      weight?: number;
    }[];
    /**
     * Timeout for HTTP requests, default is disabled.
     */
    timeout?: string;
  }[];
  /**
   * An ordered list of route rules for opaque TCP traffic.
   */
  tcp?: {
    /**
     * Match conditions to be satisfied for the rule to be activated.
     */
    match?: {
      /**
       * IPv4 or IPv6 ip addresses of destination with optional subnet.
       */
      destinationSubnets?: string[];
      /**
       * Names of gateways where the rule should be applied.
       */
      gateways?: string[];
      /**
       * Specifies the port on the host that is being addressed.
       */
      port?: number;
      /**
       * One or more labels that constrain the applicability of a rule to workloads with the given labels.
       */
      sourceLabels?: {
        [k: string]: string;
      };
      /**
       * Source namespace constraining the applicability of a rule to workloads in that namespace.
       */
      sourceNamespace?: string;
      sourceSubnet?: string;
    }[];
    /**
     * The destination to which the connection should be forwarded to.
     */
    route?: {
      /**
       * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
       */
      destination: {
        /**
         * The name of a service from the service registry.
         */
        host: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        port?: {
          number?: number;
        };
        /**
         * The name of a subset within the service.
         */
        subset?: string;
      };
      /**
       * Weight specifies the relative proportion of traffic to be forwarded to the destination.
       */
      weight?: number;
    }[];
  }[];
  /**
   * An ordered list of route rule for non-terminated TLS & HTTPS traffic.
   */
  tls?: {
    /**
     * Match conditions to be satisfied for the rule to be activated.
     */
    match: {
      /**
       * IPv4 or IPv6 ip addresses of destination with optional subnet.
       */
      destinationSubnets?: string[];
      /**
       * Names of gateways where the rule should be applied.
       */
      gateways?: string[];
      /**
       * Specifies the port on the host that is being addressed.
       */
      port?: number;
      /**
       * SNI (server name indicator) to match on.
       */
      sniHosts: string[];
      /**
       * One or more labels that constrain the applicability of a rule to workloads with the given labels.
       */
      sourceLabels?: {
        [k: string]: string;
      };
      /**
       * Source namespace constraining the applicability of a rule to workloads in that namespace.
       */
      sourceNamespace?: string;
    }[];
    /**
     * The destination to which the connection should be forwarded to.
     */
    route?: {
      /**
       * Destination uniquely identifies the instances of a service to which the request/connection should be forwarded to.
       */
      destination: {
        /**
         * The name of a service from the service registry.
         */
        host: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        port?: {
          number?: number;
        };
        /**
         * The name of a subset within the service.
         */
        subset?: string;
      };
      /**
       * Weight specifies the relative proportion of traffic to be forwarded to the destination.
       */
      weight?: number;
    }[];
  }[];
}

export interface VirtualServiceOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: VirtualServiceSpec;
}

export function virtualService(opts: VirtualServiceOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "VirtualService",
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
 * Configuration affecting VMs onboarded into the mesh. See more details at: https://istio.io/docs/reference/config/networking/workload-entry.html
 */
export interface WorkloadEntrySpec {
  /**
   * Address associated with the network endpoint without the port.
   */
  address?: string;
  /**
   * One or more labels associated with the endpoint.
   */
  labels?: {
    [k: string]: string;
  };
  /**
   * The locality associated with the endpoint.
   */
  locality?: string;
  /**
   * Network enables Istio to group endpoints resident in the same L3 domain/network.
   */
  network?: string;
  /**
   * Set of ports associated with the endpoint.
   */
  ports?: {
    [k: string]: number;
  };
  /**
   * The service account associated with the workload if a sidecar is present in the workload.
   */
  serviceAccount?: string;
  /**
   * The load balancing weight associated with the endpoint.
   */
  weight?: number;
}

export interface WorkloadEntryOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: WorkloadEntrySpec;
}

export function workloadEntry(opts: WorkloadEntryOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "WorkloadEntry",
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
 * Describes a collection of workload instances. See more details at: https://istio.io/docs/reference/config/networking/workload-group.html
 */
export interface WorkloadGroupSpec {
  /**
   * Metadata that will be used for all corresponding `WorkloadEntries`.
   */
  metadata?: {
    annotations?: {
      [k: string]: string;
    };
    labels?: {
      [k: string]: string;
    };
  };
  /**
   * `ReadinessProbe` describes the configuration the user must provide for healthchecking on their workload.
   */
  probe?: {
    [k: string]: unknown;
  };
  /**
   * Template to be used for the generation of `WorkloadEntry` resources that belong to this `WorkloadGroup`.
   */
  template: {
    /**
     * Address associated with the network endpoint without the port.
     */
    address?: string;
    /**
     * One or more labels associated with the endpoint.
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * The locality associated with the endpoint.
     */
    locality?: string;
    /**
     * Network enables Istio to group endpoints resident in the same L3 domain/network.
     */
    network?: string;
    /**
     * Set of ports associated with the endpoint.
     */
    ports?: {
      [k: string]: number;
    };
    /**
     * The service account associated with the workload if a sidecar is present in the workload.
     */
    serviceAccount?: string;
    /**
     * The load balancing weight associated with the endpoint.
     */
    weight?: number;
  };
}

export interface WorkloadGroupOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: WorkloadGroupSpec;
}

export function workloadGroup(opts: WorkloadGroupOpts): ResourceManifest {
  return resource({
    apiVersion: "networking.istio.io/v1",
    kind: "WorkloadGroup",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
