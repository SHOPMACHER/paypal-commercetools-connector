/**
 * Orders
 * An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders.
 *
 * The version of the OpenAPI document: 2.13
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthorizationStatusDetails } from './authorizationStatusDetails';

/**
 * The status fields for an authorized payment.
 */
export class AuthorizationStatus {
  /**
   * The status for the authorized payment.
   */
  'status'?: AuthorizationStatus.StatusEnum;
  'statusDetails'?: AuthorizationStatusDetails;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'status',
      baseName: 'status',
      type: 'AuthorizationStatus.StatusEnum',
    },
    {
      name: 'statusDetails',
      baseName: 'status_details',
      type: 'AuthorizationStatusDetails',
    },
  ];

  static getAttributeTypeMap() {
    return AuthorizationStatus.attributeTypeMap;
  }
}

export namespace AuthorizationStatus {
  export enum StatusEnum {
    Created = <any>'CREATED',
    Captured = <any>'CAPTURED',
    Denied = <any>'DENIED',
    PartiallyCaptured = <any>'PARTIALLY_CAPTURED',
    Voided = <any>'VOIDED',
    Pending = <any>'PENDING',
  }
}