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

export class MISSINGREQUIREDPARAMETER {
  'issue'?: MISSINGREQUIREDPARAMETER.IssueEnum;
  'description'?: MISSINGREQUIREDPARAMETER.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'MISSINGREQUIREDPARAMETER.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'MISSINGREQUIREDPARAMETER.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return MISSINGREQUIREDPARAMETER.attributeTypeMap;
  }
}

export namespace MISSINGREQUIREDPARAMETER {
  export enum IssueEnum {
    MissingRequiredParameter = <any>'MISSING_REQUIRED_PARAMETER',
  }
  export enum DescriptionEnum {
    ARequiredParameterIsMissing = <any>'A required parameter is missing.',
  }
}