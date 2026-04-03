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

export interface K3SClusterSpec {
  infisical: {
    env: string;
    projectId: string;
  };
}

export interface K3sClusterOpts {
  name: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: K3SClusterSpec;
}

export function k3sCluster(
  opts: K3sClusterOpts,
): ClusterScopedResourceManifest {
  return resourceClusterScope({
    apiVersion: "cluster.cloudticon.com/v1",
    kind: "K3sCluster",
    metadata: {
      name: opts.name,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * K3sNodeSpec defines the desired state of K3sNode.
 */
export interface K3SNodeSpec {
  serverType: string;
  type: string;
}

export interface K3sNodeOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: K3SNodeSpec;
}

export function k3sNode(opts: K3sNodeOpts): ResourceManifest {
  return resource({
    apiVersion: "cluster.cloudticon.com/v1",
    kind: "K3sNode",
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
 * VirtualMachineSpec defines the desired state of VirtualMachine.
 */
export interface VirtualMachineSpec {
  loadBalanacerId?: number;
  networkId?: number;
  sshKeyId?: number;
  type: string;
}

export interface VirtualMachineOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: VirtualMachineSpec;
}

export function virtualMachine(opts: VirtualMachineOpts): ResourceManifest {
  return resource({
    apiVersion: "cluster.cloudticon.com/v1",
    kind: "VirtualMachine",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
