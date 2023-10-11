export class INVALIDRESOURCEID {
  'issue'?: INVALIDRESOURCEID.IssueEnum;
  'description'?: INVALIDRESOURCEID.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'INVALIDRESOURCEID.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'INVALIDRESOURCEID.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return INVALIDRESOURCEID.attributeTypeMap;
  }
}

export namespace INVALIDRESOURCEID {
  export enum IssueEnum {
    InvalidResourceId = <any>'INVALID_RESOURCE_ID',
  }
  export enum DescriptionEnum {
    SpecifiedResourceIdDoesNotExistPleaseCheckTheResourceIdAndTryAgain = <any>(
      'Specified resource ID does not exist. Please check the resource ID and try again.'
    ),
  }
}
