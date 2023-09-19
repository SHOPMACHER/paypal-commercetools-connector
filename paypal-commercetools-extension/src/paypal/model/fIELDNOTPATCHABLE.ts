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

export class FIELDNOTPATCHABLE {
  'issue'?: FIELDNOTPATCHABLE.IssueEnum;
  'description'?: FIELDNOTPATCHABLE.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'FIELDNOTPATCHABLE.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'FIELDNOTPATCHABLE.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return FIELDNOTPATCHABLE.attributeTypeMap;
  }
}

export namespace FIELDNOTPATCHABLE {
  export enum IssueEnum {
    FieldNotPatchable = <any>'FIELD_NOT_PATCHABLE',
  }
  export enum DescriptionEnum {
    FieldCannotBePatched = <any>'Field cannot be patched.',
  }
}
