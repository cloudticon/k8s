export { z, type ZType, type TypeDef } from "./schema";
export { toOpenAPI } from "./openapi";
export {
  resource,
  type ResourceFn,
  type GVK,
  type ResourceScope,
  type ResourceOpts,
  type ResourceArgs,
  type ResourceManifest,
} from "./resource";
export {
  operator,
  Result,
  type OperatorBuilder,
  type OperatorConfig,
  type Permission,
  type ResultValue,
} from "./operator";

// Kubernetes core resources
export * from "./resources/core/v1";
export * from "./resources/apps/v1";
export * from "./resources/batch/v1";
export * from "./resources/autoscaling/v2";
export * from "./resources/networking-k8s-io/v1";
export * from "./resources/policy/v1";
export * from "./resources/rbac-authorization-k8s-io/v1";
export * from "./resources/storage-k8s-io/v1";

// Istio resources (v1 preferred; unique names from older API versions)
export * from "./resources/networking-istio-io/v1";
export { envoyFilter } from "./resources/networking-istio-io/v1alpha3";
export { proxyConfig } from "./resources/networking-istio-io/v1beta1";
export * from "./resources/security-istio-io/v1";
export * from "./resources/telemetry-istio-io/v1";
export * from "./resources/extensions-istio-io/v1alpha1";

// Cloudticon resources
export * from "./resources/apps-cloudticon-com/v1alpha1";
export * from "./resources/cms-cloudticon-com/v1";
export * from "./resources/cluster-cloudticon-com/v1";
