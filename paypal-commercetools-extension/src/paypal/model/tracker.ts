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

import { LinkDescription } from './linkDescription';
import { TrackerItem } from './trackerItem';

/**
 * The tracking response on creation of tracker.
 */
export class Tracker {
  /**
   * The tracker id.
   */
  'id'?: string;
  /**
   * An array of details of items in the shipment.
   */
  'items'?: Array<TrackerItem>;
  /**
   * An array of request-related HATEOAS links.
   */
  'links'?: Array<LinkDescription>;
  /**
   * The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>
   */
  'createTime'?: string;
  /**
   * The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>
   */
  'updateTime'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'items',
      baseName: 'items',
      type: 'Array<TrackerItem>',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'Array<LinkDescription>',
    },
    {
      name: 'createTime',
      baseName: 'create_time',
      type: 'string',
    },
    {
      name: 'updateTime',
      baseName: 'update_time',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return Tracker.attributeTypeMap;
  }
}