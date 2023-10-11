export class INVALIDSTRINGMAXLENGTH {
  'issue'?: INVALIDSTRINGMAXLENGTH.IssueEnum;
  'description'?: INVALIDSTRINGMAXLENGTH.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'INVALIDSTRINGMAXLENGTH.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'INVALIDSTRINGMAXLENGTH.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return INVALIDSTRINGMAXLENGTH.attributeTypeMap;
  }
}

export namespace INVALIDSTRINGMAXLENGTH {
  export enum IssueEnum {
    InvalidStringMaxLength = <any>'INVALID_STRING_MAX_LENGTH',
  }
  export enum DescriptionEnum {
    TheValueOfAFieldIsTooLong = <any>'The value of a field is too long.',
  }
}
