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

export class POSTALCODEREQUIRED {
  'issue'?: POSTALCODEREQUIRED.IssueEnum;
  'description'?: POSTALCODEREQUIRED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'POSTALCODEREQUIRED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'POSTALCODEREQUIRED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return POSTALCODEREQUIRED.attributeTypeMap;
  }
}

export namespace POSTALCODEREQUIRED {
  export enum IssueEnum {
    PostalCodeRequired = <any>'POSTAL_CODE_REQUIRED',
  }
  export enum DescriptionEnum {
    TheSpecifiedCountryRequiresAPostalCode = <any>(
      'The specified country requires a postal code.'
    ),
  }
}
