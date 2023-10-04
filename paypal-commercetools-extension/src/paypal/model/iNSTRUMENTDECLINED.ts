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

export class INSTRUMENTDECLINED {
  'issue'?: INSTRUMENTDECLINED.IssueEnum;
  'description'?: INSTRUMENTDECLINED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'INSTRUMENTDECLINED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'INSTRUMENTDECLINED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return INSTRUMENTDECLINED.attributeTypeMap;
  }
}

export namespace INSTRUMENTDECLINED {
  export enum IssueEnum {
    InstrumentDeclined = <any>'INSTRUMENT_DECLINED',
  }
  export enum DescriptionEnum {
    TheInstrumentPresentedWasEitherDeclinedByTheProcessorOrBankOrItCantBeUsedForThisPayment = <
      any
    >"The instrument presented  was either declined by the processor or bank, or it can't be used for this payment.",
  }
}