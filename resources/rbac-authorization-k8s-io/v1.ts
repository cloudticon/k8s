/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource } from "../../";

export const clusterRoleBinding = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "ClusterRoleBinding",
  {
    scope: "Cluster",
    spec: {},
  },
);

export const clusterRole = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "ClusterRole",
  {
    scope: "Cluster",
    spec: {},
  },
);

export const roleBinding = /* @__PURE__ */ resource(
  "rbac.authorization.k8s.io/v1",
  "RoleBinding",
  {
    scope: "Namespaced",
    spec: {},
  },
);

export const role = /* @__PURE__ */ resource("rbac.authorization.k8s.io/v1", "Role", {
  scope: "Namespaced",
  spec: {},
});
