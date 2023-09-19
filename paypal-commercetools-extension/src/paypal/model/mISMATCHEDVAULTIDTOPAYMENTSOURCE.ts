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

export class MISMATCHEDVAULTIDTOPAYMENTSOURCE {
  'issue'?: MISMATCHEDVAULTIDTOPAYMENTSOURCE.IssueEnum;
  'description'?: MISMATCHEDVAULTIDTOPAYMENTSOURCE.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'MISMATCHEDVAULTIDTOPAYMENTSOURCE.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'MISMATCHEDVAULTIDTOPAYMENTSOURCE.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return MISMATCHEDVAULTIDTOPAYMENTSOURCE.attributeTypeMap;
  }
}

export namespace MISMATCHEDVAULTIDTOPAYMENTSOURCE {
  export enum IssueEnum {
    MismatchedVaultIdToPaymentSource = <any>(
      'MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE'
    ),
  }
  export enum DescriptionEnum {
    TheVaultIdDoesNotMatchThePaymentSourceProvidedPleaseVerifyThatTheVaultIdTokenUsedRefersToTheMatchingPaymentSourceAndTryAgainForExampleAPayPalTokenCannotBePassedInTheVaultIdFieldInThePaymentSourceCardObject = <
      any
    >'The vault_id does not match the payment_source provided. Please verify that the vault_id token used refers to the matching payment_source and try again. For example, a PayPal token cannot be passed in the vault_id field in the payment_source.card object.',
  }
}
