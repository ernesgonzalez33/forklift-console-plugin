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
/**
 * Hook status.
 * @export
 * @interface V1beta1HookStatus
 */
export interface V1beta1HookStatus {
  /**
   * List of conditions.
   * @type {any}
   * @memberof V1beta1HookStatus
   */
  conditions?: any | null;
  /**
   * The most recent generation observed by the controller.
   * @type {any}
   * @memberof V1beta1HookStatus
   */
  observedGeneration?: any | null;
}

/**
 * Check if a given object implements the V1beta1HookStatus interface.
 */
export function instanceOfV1beta1HookStatus(value: object): boolean {
  const isInstance = true;

  return isInstance;
}

export function V1beta1HookStatusFromJSON(json: any): V1beta1HookStatus {
  return V1beta1HookStatusFromJSONTyped(json, false);
}

export function V1beta1HookStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V1beta1HookStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conditions: !exists(json, 'conditions') ? undefined : json['conditions'],
    observedGeneration: !exists(json, 'observedGeneration')
      ? undefined
      : json['observedGeneration'],
  };
}

export function V1beta1HookStatusToJSON(value?: V1beta1HookStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conditions: value.conditions,
    observedGeneration: value.observedGeneration,
  };
}
