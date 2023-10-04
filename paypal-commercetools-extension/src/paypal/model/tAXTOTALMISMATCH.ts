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

export class TAXTOTALMISMATCH {
  'issue'?: TAXTOTALMISMATCH.IssueEnum;
  'description'?: TAXTOTALMISMATCH.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'TAXTOTALMISMATCH.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'TAXTOTALMISMATCH.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return TAXTOTALMISMATCH.attributeTypeMap;
  }
}

export namespace TAXTOTALMISMATCH {
  export enum IssueEnum {
    TaxTotalMismatch = <any>'TAX_TOTAL_MISMATCH',
  }
  export enum DescriptionEnum {
    ShouldEqualSumOfTaxQuantityAcrossAllItemsForAGivenPurchaseUnit = <any>(
      'Should equal sum of (tax * quantity) across all items for a given purchase_unit.'
    ),
  }
}