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

export class AUTHCAPTURENOTENABLED {
  'issue'?: AUTHCAPTURENOTENABLED.IssueEnum;
  'description'?: AUTHCAPTURENOTENABLED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'AUTHCAPTURENOTENABLED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'AUTHCAPTURENOTENABLED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return AUTHCAPTURENOTENABLED.attributeTypeMap;
  }
}

export namespace AUTHCAPTURENOTENABLED {
  export enum IssueEnum {
    AuthCaptureNotEnabled = <any>'AUTH_CAPTURE_NOT_ENABLED',
  }
  export enum DescriptionEnum {
    AuthorizationAndCaptureFeatureIsNotEnabledForTheMerchantMakeSureThatTheRecipientOfTheFundsIsAVerifiedBusinessAccount = <
      any
    >'Authorization and Capture feature is not enabled for the merchant. Make sure that the recipient of the funds is a verified business account.',
  }
}