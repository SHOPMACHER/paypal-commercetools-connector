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

export class ORDERALREADYCAPTURED1 {
  'issue'?: ORDERALREADYCAPTURED1.IssueEnum;
  'description'?: ORDERALREADYCAPTURED1.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'ORDERALREADYCAPTURED1.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'ORDERALREADYCAPTURED1.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return ORDERALREADYCAPTURED1.attributeTypeMap;
  }
}

export namespace ORDERALREADYCAPTURED1 {
  export enum IssueEnum {
    OrderAlreadyCaptured = <any>'ORDER_ALREADY_CAPTURED',
  }
  export enum DescriptionEnum {
    OrderAlreadyCapturedIfIntentCaptureOnlyOneCapturePerOrderIsAllowed = <any>(
      "Order already captured.If 'intent=CAPTURE' only one capture per order is allowed."
    ),
  }
}