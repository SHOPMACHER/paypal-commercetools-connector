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

export class INVALIDSECURITYCODELENGTH {
  'issue'?: INVALIDSECURITYCODELENGTH.IssueEnum;
  'description'?: INVALIDSECURITYCODELENGTH.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'INVALIDSECURITYCODELENGTH.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'INVALIDSECURITYCODELENGTH.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return INVALIDSECURITYCODELENGTH.attributeTypeMap;
  }
}

export namespace INVALIDSECURITYCODELENGTH {
  export enum IssueEnum {
    InvalidSecurityCodeLength = <any>'INVALID_SECURITY_CODE_LENGTH',
  }
  export enum DescriptionEnum {
    TheSecurityCodeLengthIsInvalidForTheSpecifiedCardBrand = <any>(
      'The security_code length is invalid for the specified card brand.'
    ),
  }
}