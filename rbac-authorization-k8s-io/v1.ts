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

export interface ClusterRoleBindingOpts {
  name: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export function clusterRoleBinding(
  opts: ClusterRoleBindingOpts,
): ClusterScopedResourceManifest {
  return resourceClusterScope({
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRoleBinding",
    metadata: {
      name: opts.name,
      labels: opts.labels,
      annotations: opts.annotations,
    },
  });
}

export interface ClusterRoleOpts {
  name: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export function clusterRole(
  opts: ClusterRoleOpts,
): ClusterScopedResourceManifest {
  return resourceClusterScope({
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRole",
    metadata: {
      name: opts.name,
      labels: opts.labels,
      annotations: opts.annotations,
    },
  });
}

export interface RoleBindingOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export function roleBinding(opts: RoleBindingOpts): ResourceManifest {
  return resource({
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "RoleBinding",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
  });
}

export interface RoleOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export function role(opts: RoleOpts): ResourceManifest {
  return resource({
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "Role",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
  });
}
