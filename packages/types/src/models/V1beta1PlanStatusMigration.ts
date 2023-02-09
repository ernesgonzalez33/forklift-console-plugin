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
 * Migration
 * @export
 * @interface V1beta1PlanStatusMigration
 */
export interface V1beta1PlanStatusMigration {
  /**
   * Completed timestamp.
   * @type {any}
   * @memberof V1beta1PlanStatusMigration
   */
  completed?: any | null;
  /**
   * History
   * @type {any}
   * @memberof V1beta1PlanStatusMigration
   */
  history?: any | null;
  /**
   * Started timestamp.
   * @type {any}
   * @memberof V1beta1PlanStatusMigration
   */
  started?: any | null;
  /**
   * VM status
   * @type {any}
   * @memberof V1beta1PlanStatusMigration
   */
  vms?: any | null;
}

/**
 * Check if a given object implements the V1beta1PlanStatusMigration interface.
 */
export function instanceOfV1beta1PlanStatusMigration(value: object): boolean {
  const isInstance = true;

  return isInstance;
}

export function V1beta1PlanStatusMigrationFromJSON(json: any): V1beta1PlanStatusMigration {
  return V1beta1PlanStatusMigrationFromJSONTyped(json, false);
}

export function V1beta1PlanStatusMigrationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): V1beta1PlanStatusMigration {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    completed: !exists(json, 'completed') ? undefined : json['completed'],
    history: !exists(json, 'history') ? undefined : json['history'],
    started: !exists(json, 'started') ? undefined : json['started'],
    vms: !exists(json, 'vms') ? undefined : json['vms'],
  };
}

export function V1beta1PlanStatusMigrationToJSON(value?: V1beta1PlanStatusMigration | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    completed: value.completed,
    history: value.history,
    started: value.started,
    vms: value.vms,
  };
}
