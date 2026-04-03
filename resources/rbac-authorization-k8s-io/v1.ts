/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource } from "../../";

export const clusterRoleBinding = resource(
  "rbac.authorization.k8s.io/v1",
  "ClusterRoleBinding",
  {
    scope: "Cluster",
    spec: {},
  },
);

export const clusterRole = resource(
  "rbac.authorization.k8s.io/v1",
  "ClusterRole",
  {
    scope: "Cluster",
    spec: {},
  },
);

export const roleBinding = resource(
  "rbac.authorization.k8s.io/v1",
  "RoleBinding",
  {
    scope: "Namespaced",
    spec: {},
  },
);

export const role = resource("rbac.authorization.k8s.io/v1", "Role", {
  scope: "Namespaced",
  spec: {},
});
