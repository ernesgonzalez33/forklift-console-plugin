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
import type { V1beta1ProviderSpec } from './V1beta1ProviderSpec';
import {
    V1beta1ProviderSpecFromJSON,
    V1beta1ProviderSpecFromJSONTyped,
    V1beta1ProviderSpecToJSON,
} from './V1beta1ProviderSpec';
import type { V1beta1ProviderStatus } from './V1beta1ProviderStatus';
import {
    V1beta1ProviderStatusFromJSON,
    V1beta1ProviderStatusFromJSONTyped,
    V1beta1ProviderStatusToJSON,
} from './V1beta1ProviderStatus';

/**
 * 
 * @export
 * @interface V1beta1Provider
 */
export interface V1beta1Provider {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {any}
     * @memberof V1beta1Provider
     */
    apiVersion?: any | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {any}
     * @memberof V1beta1Provider
     */
    kind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof V1beta1Provider
     */
    metadata?: any | null;
    /**
     * 
     * @type {V1beta1ProviderSpec}
     * @memberof V1beta1Provider
     */
    spec?: V1beta1ProviderSpec;
    /**
     * 
     * @type {V1beta1ProviderStatus}
     * @memberof V1beta1Provider
     */
    status?: V1beta1ProviderStatus;
}

/**
 * Check if a given object implements the V1beta1Provider interface.
 */
export function instanceOfV1beta1Provider(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1ProviderFromJSON(json: any): V1beta1Provider {
    return V1beta1ProviderFromJSONTyped(json, false);
}

export function V1beta1ProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1Provider {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'spec': !exists(json, 'spec') ? undefined : V1beta1ProviderSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1beta1ProviderStatusFromJSON(json['status']),
    };
}

export function V1beta1ProviderToJSON(value?: V1beta1Provider | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': value.metadata,
        'spec': V1beta1ProviderSpecToJSON(value.spec),
        'status': V1beta1ProviderStatusToJSON(value.status),
    };
}

