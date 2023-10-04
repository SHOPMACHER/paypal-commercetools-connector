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

export class INVALIDARRAYMAXITEMS {
  'issue'?: INVALIDARRAYMAXITEMS.IssueEnum;
  'description'?: INVALIDARRAYMAXITEMS.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'INVALIDARRAYMAXITEMS.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'INVALIDARRAYMAXITEMS.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return INVALIDARRAYMAXITEMS.attributeTypeMap;
  }
}

export namespace INVALIDARRAYMAXITEMS {
  export enum IssueEnum {
    InvalidArrayMaxItems = <any>'INVALID_ARRAY_MAX_ITEMS',
  }
  export enum DescriptionEnum {
    TheNumberOfItemsInAnArrayParameterIsTooLarge = <any>(
      'The number of items in an array parameter is too large.'
    ),
  }
}