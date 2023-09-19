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

export class PAYEEFXRATEIDEXPIRED {
  'issue'?: PAYEEFXRATEIDEXPIRED.IssueEnum;
  'description'?: PAYEEFXRATEIDEXPIRED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'PAYEEFXRATEIDEXPIRED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'PAYEEFXRATEIDEXPIRED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return PAYEEFXRATEIDEXPIRED.attributeTypeMap;
  }
}

export namespace PAYEEFXRATEIDEXPIRED {
  export enum IssueEnum {
    PayeeFxRateIdExpired = <any>'PAYEE_FX_RATE_ID_EXPIRED',
  }
  export enum DescriptionEnum {
    TheSpecifiedFxRateIdHasExpiredPleaseSpecifyADifferentFxRateIdAndTryTheRequestAgainAlternatelyRemoveTheFxRateIdToProcessTheRequestUsingTheDefaultExchangeRate = <
      any
    >'The specified FX Rate ID has expired. Please specify a different FX Rate Id and try the request again. Alternately, remove the FX Rate ID to process the request using the default exchange rate.',
  }
}
