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

export class NOTENABLEDTOVAULTPAYMENTSOURCE {
  'issue'?: NOTENABLEDTOVAULTPAYMENTSOURCE.IssueEnum;
  'description'?: NOTENABLEDTOVAULTPAYMENTSOURCE.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'NOTENABLEDTOVAULTPAYMENTSOURCE.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'NOTENABLEDTOVAULTPAYMENTSOURCE.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return NOTENABLEDTOVAULTPAYMENTSOURCE.attributeTypeMap;
  }
}

export namespace NOTENABLEDTOVAULTPAYMENTSOURCE {
  export enum IssueEnum {
    NotEnabledToVaultPaymentSource = <any>'NOT_ENABLED_TO_VAULT_PAYMENT_SOURCE',
  }
  export enum DescriptionEnum {
    TheApiCallerOrTheMerchantOnWhoseBehalfTheApiCallIsInitiatedIsNotAllowedToVaultTheGivenSourcePleaseContactPayPalCustomerSupportForAssistance = <
      any
    >'The API caller or the merchant on whose behalf the API call is initiated is not allowed to vault the given source. Please contact PayPal customer support for assistance.',
  }
}
