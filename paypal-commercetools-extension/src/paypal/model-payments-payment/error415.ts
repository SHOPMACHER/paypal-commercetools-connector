import { ErrorDetails } from './errorDetails';

/**
 * Error response for 415
 */
export class Error415 {
  'name'?: Error415.NameEnum;
  'message'?: Error415.MessageEnum;
  'issues'?: Array<ErrorDetails>;
  /**
   * The PayPal internal ID. Used for correlation purposes.
   */
  'debugId'?: string;
  /**
   * The information link, or URI, that shows detailed information about this error for the developer.
   */
  'informationLink'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'name',
      baseName: 'name',
      type: 'Error415.NameEnum',
    },
    {
      name: 'message',
      baseName: 'message',
      type: 'Error415.MessageEnum',
    },
    {
      name: 'issues',
      baseName: 'issues',
      type: 'Array<ErrorDetails>',
    },
    {
      name: 'debugId',
      baseName: 'debug_id',
      type: 'string',
    },
    {
      name: 'informationLink',
      baseName: 'information_link',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return Error415.attributeTypeMap;
  }
}

export namespace Error415 {
  export enum NameEnum {
    UnsupportedMediaType = <any>'UNSUPPORTED_MEDIA_TYPE',
  }
  export enum MessageEnum {
    TheServerDoesNotSupportTheRequestPayloadsMediaType = <any>(
      "The server does not support the request payload's media type."
    ),
  }
}
