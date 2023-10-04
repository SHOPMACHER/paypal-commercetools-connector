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

export class PAYPALTRANSACTIONIDEXPIRED {
  'issue'?: PAYPALTRANSACTIONIDEXPIRED.IssueEnum;
  'description'?: PAYPALTRANSACTIONIDEXPIRED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'PAYPALTRANSACTIONIDEXPIRED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'PAYPALTRANSACTIONIDEXPIRED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return PAYPALTRANSACTIONIDEXPIRED.attributeTypeMap;
  }
}

export namespace PAYPALTRANSACTIONIDEXPIRED {
  export enum IssueEnum {
    PaypalTransactionIdExpired = <any>'PAYPAL_TRANSACTION_ID_EXPIRED',
  }
  export enum DescriptionEnum {
    SpecifiedPaypalTransactionIdHasExpiredPayPalTransactionIdExpires4YearsAfterTheDateOfTheInitialTransaction = <
      any
    >'Specified `paypal_transaction_id` has expired. PayPal transaction ID expires 4 years after the date of the initial transaction.',
  }
}