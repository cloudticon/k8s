/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * Extend the functionality provided by the Istio proxy through WebAssembly filters. See more details at: https://istio.io/docs/reference/config/proxy_extensions/wasm-plugin.html
 */
export interface WasmPluginSpec {
  /**
   * Specifies the failure behavior for the plugin due to fatal errors.
   *
   * Valid Options: FAIL_CLOSE, FAIL_OPEN, FAIL_RELOAD
   */
  failStrategy?: "FAIL_CLOSE" | "FAIL_OPEN" | "FAIL_RELOAD";
  /**
   * The pull behaviour to be applied when fetching Wasm module by either OCI image or `http/https`.
   *
   * Valid Options: IfNotPresent, Always
   */
  imagePullPolicy?: "UNSPECIFIED_POLICY" | "IfNotPresent" | "Always";
  /**
   * Credentials to use for OCI image pulling.
   */
  imagePullSecret?: string;
  /**
   * Specifies the criteria to determine which traffic is passed to WasmPlugin.
   */
  match?: {
    /**
     * Criteria for selecting traffic by their direction.
     *
     * Valid Options: CLIENT, SERVER, CLIENT_AND_SERVER
     */
    mode?: "UNDEFINED" | "CLIENT" | "SERVER" | "CLIENT_AND_SERVER";
    /**
     * Criteria for selecting traffic by their destination port.
     */
    ports?: {
      number: number;
    }[];
  }[];
  /**
   * Determines where in the filter chain this `WasmPlugin` is to be injected.
   *
   * Valid Options: AUTHN, AUTHZ, STATS
   */
  phase?: "UNSPECIFIED_PHASE" | "AUTHN" | "AUTHZ" | "STATS";
  /**
   * The configuration that will be passed on to the plugin.
   */
  pluginConfig?: {};
  /**
   * The plugin name to be used in the Envoy configuration (used to be called `rootID`).
   */
  pluginName?: string;
  /**
   * Determines ordering of `WasmPlugins` in the same `phase`.
   */
  priority?: number;
  /**
   * Criteria used to select the specific set of pods/VMs on which this plugin configuration should be applied.
   */
  selector?: {
    /**
     * One or more labels that indicate a specific set of pods/VMs on which a policy should be applied.
     */
    matchLabels?: {
      [k: string]: string;
    };
  };
  /**
   * SHA256 checksum that will be used to verify Wasm module or OCI container.
   */
  sha256?: string;
  targetRef?: {
    /**
     * group is the group of the target resource.
     */
    group?: string;
    /**
     * kind is kind of the target resource.
     */
    kind: string;
    /**
     * name is the name of the target resource.
     */
    name: string;
    /**
     * namespace is the namespace of the referent.
     */
    namespace?: string;
  };
  /**
   * Optional.
   *
   * @maxItems 16
   */
  targetRefs?:
    | []
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ]
    | [
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
        {
          /**
           * group is the group of the target resource.
           */
          group?: string;
          /**
           * kind is kind of the target resource.
           */
          kind: string;
          /**
           * name is the name of the target resource.
           */
          name: string;
          /**
           * namespace is the namespace of the referent.
           */
          namespace?: string;
        },
      ];
  /**
   * Specifies the type of Wasm Extension to be used.
   *
   * Valid Options: HTTP, NETWORK
   */
  type?: "UNSPECIFIED_PLUGIN_TYPE" | "HTTP" | "NETWORK";
  /**
   * URL of a Wasm module or OCI container.
   */
  url: string;
  verificationKey?: string;
  /**
   * Configuration for a Wasm VM.
   */
  vmConfig?: {
    /**
     * Specifies environment variables to be injected to this VM.
     *
     * @maxItems 256
     */
    env?: {
      /**
       * Name of the environment variable.
       */
      name: string;
      /**
       * Value for the environment variable.
       */
      value?: string;
      /**
       * Source for the environment variable's value.
       *
       * Valid Options: INLINE, HOST
       */
      valueFrom?: "INLINE" | "HOST";
    }[];
  };
}

export interface WasmPluginOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: WasmPluginSpec;
}

export function wasmPlugin(opts: WasmPluginOpts): ResourceManifest {
  return resource({
    apiVersion: "extensions.istio.io/v1alpha1",
    kind: "WasmPlugin",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
