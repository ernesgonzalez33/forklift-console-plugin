/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * ProviderStatus defines the observed state of Provider
 * @export
 * @interface V1beta1ProviderStatus
 */
export interface V1beta1ProviderStatus {
    /**
     * List of conditions.
     * @type {any}
     * @memberof V1beta1ProviderStatus
     */
    conditions?: any | null;
    /**
     * The most recent generation observed by the controller.
     * @type {any}
     * @memberof V1beta1ProviderStatus
     */
    observedGeneration?: any | null;
    /**
     * Current life cycle phase of the provider.
     * @type {any}
     * @memberof V1beta1ProviderStatus
     */
    phase?: any | null;
}

/**
 * Check if a given object implements the V1beta1ProviderStatus interface.
 */
export function instanceOfV1beta1ProviderStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1ProviderStatusFromJSON(json: any): V1beta1ProviderStatus {
    return V1beta1ProviderStatusFromJSONTyped(json, false);
}

export function V1beta1ProviderStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1ProviderStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : json['conditions'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
    };
}

export function V1beta1ProviderStatusToJSON(value?: V1beta1ProviderStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions,
        'observedGeneration': value.observedGeneration,
        'phase': value.phase,
    };
}

