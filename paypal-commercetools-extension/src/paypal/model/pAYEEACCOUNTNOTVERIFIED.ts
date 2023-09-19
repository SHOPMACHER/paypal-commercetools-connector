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

export class PAYEEACCOUNTNOTVERIFIED {
  'issue'?: PAYEEACCOUNTNOTVERIFIED.IssueEnum;
  'description'?: PAYEEACCOUNTNOTVERIFIED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'PAYEEACCOUNTNOTVERIFIED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'PAYEEACCOUNTNOTVERIFIED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return PAYEEACCOUNTNOTVERIFIED.attributeTypeMap;
  }
}

export namespace PAYEEACCOUNTNOTVERIFIED {
  export enum IssueEnum {
    PayeeAccountNotVerified = <any>'PAYEE_ACCOUNT_NOT_VERIFIED',
  }
  export enum DescriptionEnum {
    PayeeHasNotVerifiedTheirAccountWithPayPalTheSelectedPaymentMethodRequiresTheRecipientToHaveAVerifiedPayPalAccountBeforeTransactionsCanBeProcessedOnTheirBehalf = <
      any
    >'Payee has not verified their account with PayPal. The selected payment method requires the recipient to have a verified PayPal account before transactions can be processed on their behalf.',
  }
}
