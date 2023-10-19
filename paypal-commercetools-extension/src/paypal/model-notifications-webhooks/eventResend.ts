/**
 * Webhooks Management
 * The PayPal REST APIs use <a href=\"/docs/api/notifications/webhooks/\"/>webhooks</a> for event notification. Webhooks are HTTP callbacks that receive notification messages for events. After you configure a webhook listener for your app, you can <a href=\"#webhooks_create\">create a webhook</a>, which subscribes the webhook listener for your app to events. The <code>notifications</code> namespace contains resource collections for webhooks.
 *
 * The version of the OpenAPI document: 1.11
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Resends a webhook event notification, by ID.
 */
export class EventResend {
  /**
   * An array of webhook account IDs.
   */
  'webhookIds'?: Array<string>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'webhookIds',
      baseName: 'webhook_ids',
      type: 'Array<string>',
    },
  ];

  static getAttributeTypeMap() {
    return EventResend.attributeTypeMap;
  }
}
