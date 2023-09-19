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

/**
 * Indicates the type of the stored payment_source payment.
 */
export enum StoredPaymentSourcePaymentType {
  OneTime = <any>'ONE_TIME',
  Recurring = <any>'RECURRING',
  Unscheduled = <any>'UNSCHEDULED',
}
