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

import type { V1beta1NetworkMapSpecProvider } from './V1beta1NetworkMapSpecProvider';
import {
  V1beta1NetworkMapSpecProviderFromJSON,
  V1beta1NetworkMapSpecProviderToJSON,
} from './V1beta1NetworkMapSpecProvider';

/**
 * Storage map spec.
 * @export
 * @interface V1beta1StorageMapSpec
 */
export interface V1beta1StorageMapSpec {
  /**
   * Map.
   * @type {any}
   * @memberof V1beta1StorageMapSpec
   */
  map: any | null;
  /**
   *
   * @type {V1beta1NetworkMapSpecProvider}
   * @memberof V1beta1StorageMapSpec
   */
  provider: V1beta1NetworkMapSpecProvider;
}

/**
 * Check if a given object implements the V1beta1StorageMapSpec interface.
 */
export function instanceOfV1beta1StorageMapSpec(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'map' in value;
  isInstance = isInstance && 'provider' in value;

  return isInstance;
}

export function V1beta1StorageMapSpecFromJSON(json: any): V1beta1StorageMapSpec {
  return V1beta1StorageMapSpecFromJSONTyped(json, false);
}

export function V1beta1StorageMapSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V1beta1StorageMapSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    map: json['map'],
    provider: V1beta1NetworkMapSpecProviderFromJSON(json['provider']),
  };
}

export function V1beta1StorageMapSpecToJSON(value?: V1beta1StorageMapSpec | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    map: value.map,
    provider: V1beta1NetworkMapSpecProviderToJSON(value.provider),
  };
}
