export {
  resource,
  resourceClusterScope,
  type ResourceMetadata,
  type ResourceManifest,
  type ClusterScopedResourceManifest,
} from "./resource";

export {
  deployment,
  statefulSet,
  daemonSet,
  type DeploymentOpts,
  type StatefulSetOpts,
  type DaemonSetOpts,
  type ContainerPort,
  type EnvVar,
  type ResourceRequirements,
  type VolumeMount,
  type Volume,
} from "./apps/v1";

export {
  service,
  configMap,
  secret,
  namespace,
  type ServiceOpts,
  type ServicePort,
  type ConfigMapOpts,
  type SecretOpts,
  type NamespaceOpts,
} from "./core/v1";

export {
  ingress,
  type IngressOpts,
  type IngressTLS,
  type IngressPath,
  type IngressRule,
} from "./networking/v1";
