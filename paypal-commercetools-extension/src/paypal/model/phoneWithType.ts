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

import { Phone } from './phone';
import { PhoneType } from './phoneType';

/**
 * The phone information.
 */
export class PhoneWithType {
  'phoneType'?: PhoneType;
  'phoneNumber': Phone;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'phoneType',
      baseName: 'phone_type',
      type: 'PhoneType',
    },
    {
      name: 'phoneNumber',
      baseName: 'phone_number',
      type: 'Phone',
    },
  ];

  static getAttributeTypeMap() {
    return PhoneWithType.attributeTypeMap;
  }
}

export namespace PhoneWithType {}