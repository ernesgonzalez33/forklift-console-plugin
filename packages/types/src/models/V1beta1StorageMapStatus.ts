/**
 * Forklift API
 * Migration toolkit for virtualization (Forklift) API definitions.
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact Email: kubev2v-dev@redhat.com
 * License: Apache-2.0
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { V1beta1StorageMapStatusConditions } from './V1beta1StorageMapStatusConditions';
import { V1beta1StorageMapStatusReferences } from './V1beta1StorageMapStatusReferences';

/**
 * MapStatus defines the observed state of Maps.
 *
 * @export
 */
export interface V1beta1StorageMapStatus {
  /** conditions
   * Condition
   *
   * @required {false}
   */
  conditions?: V1beta1StorageMapStatusConditions[];
  /** observedGeneration
   * The most recent generation observed by the controller.
   *
   * @required {false}
   * @format {int64}
   * @originalType {integer}
   */
  observedGeneration?: number;
  /** references
   * Source reference. Either the ID or Name must be specified.
   *
   * @required {false}
   */
  references?: V1beta1StorageMapStatusReferences[];
}