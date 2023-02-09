/**
 * Forklift API
 * Migration toolkit for virtualization (Forklift) API definitions.
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact: kubev2v-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';

import type { V1beta1PlanSpec } from './V1beta1PlanSpec';
import { V1beta1PlanSpecFromJSON, V1beta1PlanSpecToJSON } from './V1beta1PlanSpec';
import type { V1beta1PlanStatus } from './V1beta1PlanStatus';
import { V1beta1PlanStatusFromJSON, V1beta1PlanStatusToJSON } from './V1beta1PlanStatus';

/**
 *
 * @export
 * @interface V1beta1Plan
 */
export interface V1beta1Plan {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {any}
   * @memberof V1beta1Plan
   */
  apiVersion?: any | null;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {any}
   * @memberof V1beta1Plan
   */
  kind?: any | null;
  /**
   *
   * @type {any}
   * @memberof V1beta1Plan
   */
  metadata?: any | null;
  /**
   *
   * @type {V1beta1PlanSpec}
   * @memberof V1beta1Plan
   */
  spec?: V1beta1PlanSpec;
  /**
   *
   * @type {V1beta1PlanStatus}
   * @memberof V1beta1Plan
   */
  status?: V1beta1PlanStatus;
}

/**
 * Check if a given object implements the V1beta1Plan interface.
 */
export function instanceOfV1beta1Plan(value: object): boolean {
  const isInstance = true;

  return isInstance;
}

export function V1beta1PlanFromJSON(json: any): V1beta1Plan {
  return V1beta1PlanFromJSONTyped(json, false);
}

export function V1beta1PlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1Plan {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    spec: !exists(json, 'spec') ? undefined : V1beta1PlanSpecFromJSON(json['spec']),
    status: !exists(json, 'status') ? undefined : V1beta1PlanStatusFromJSON(json['status']),
  };
}

export function V1beta1PlanToJSON(value?: V1beta1Plan | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: value.metadata,
    spec: V1beta1PlanSpecToJSON(value.spec),
    status: V1beta1PlanStatusToJSON(value.status),
  };
}
