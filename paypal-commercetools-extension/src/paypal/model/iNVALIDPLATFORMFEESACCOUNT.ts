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

export class INVALIDPLATFORMFEESACCOUNT {
  'issue'?: INVALIDPLATFORMFEESACCOUNT.IssueEnum;
  'description'?: INVALIDPLATFORMFEESACCOUNT.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'INVALIDPLATFORMFEESACCOUNT.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'INVALIDPLATFORMFEESACCOUNT.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return INVALIDPLATFORMFEESACCOUNT.attributeTypeMap;
  }
}

export namespace INVALIDPLATFORMFEESACCOUNT {
  export enum IssueEnum {
    InvalidPlatformFeesAccount = <any>'INVALID_PLATFORM_FEES_ACCOUNT',
  }
  export enum DescriptionEnum {
    TheSpecifiedPlatformFeesPayeeAccountIsEitherInvalidOrAccountSetupIsIncompletePleaseWorkWithYourPayPalAccountManagerToEnableThisOptionForYourAccount = <
      any
    >'The specified platform_fees payee account is either invalid or account setup is incomplete.Please work with your PayPal Account Manager to enable this option for your account.',
  }
}