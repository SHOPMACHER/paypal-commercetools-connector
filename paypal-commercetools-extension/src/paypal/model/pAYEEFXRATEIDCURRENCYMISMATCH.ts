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

export class PAYEEFXRATEIDCURRENCYMISMATCH {
  'issue'?: PAYEEFXRATEIDCURRENCYMISMATCH.IssueEnum;
  'description'?: PAYEEFXRATEIDCURRENCYMISMATCH.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'PAYEEFXRATEIDCURRENCYMISMATCH.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'PAYEEFXRATEIDCURRENCYMISMATCH.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return PAYEEFXRATEIDCURRENCYMISMATCH.attributeTypeMap;
  }
}

export namespace PAYEEFXRATEIDCURRENCYMISMATCH {
  export enum IssueEnum {
    PayeeFxRateIdCurrencyMismatch = <any>'PAYEE_FX_RATE_ID_CURRENCY_MISMATCH',
  }
  export enum DescriptionEnum {
    TheSpecifiedFxRateIdIsForACurrencyThatDoesNotMatchWithTheCurrencyOfThisRequestPleaseSpecifyADifferentFxRateIdAndTryTheRequestAgainAlternatelyRemoveTheFxRateIdToProcessTheRequestUsingTheDefaultExchangeRate = <
      any
    >'The specified FX Rate ID is for a currency that does not match with the currency of this request. Please specify a different FX Rate ID and try the request again. Alternately, remove the FX Rate ID to process the request using the default exchange rate.',
  }
}
