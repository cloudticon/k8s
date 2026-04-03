/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import {
  resourceClusterScope,
  type ClusterScopedResourceManifest,
} from "../resource";

export interface StorageClassOpts {
  name: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export function storageClass(
  opts: StorageClassOpts,
): ClusterScopedResourceManifest {
  return resourceClusterScope({
    apiVersion: "storage.k8s.io/v1",
    kind: "StorageClass",
    metadata: {
      name: opts.name,
      labels: opts.labels,
      annotations: opts.annotations,
    },
  });
}
