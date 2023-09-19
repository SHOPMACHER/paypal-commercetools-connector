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

import { OrdersTrackCreate403IssuesInner } from './ordersTrackCreate403IssuesInner';

export class OrdersTrackersPatch403 {
  'issues'?: Array<OrdersTrackCreate403IssuesInner>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issues',
      baseName: 'issues',
      type: 'Array<OrdersTrackCreate403IssuesInner>',
    },
  ];

  static getAttributeTypeMap() {
    return OrdersTrackersPatch403.attributeTypeMap;
  }
}
