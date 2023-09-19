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

export class PAYPALREQUESTIDREQUIRED {
  'issue'?: PAYPALREQUESTIDREQUIRED.IssueEnum;
  'description'?: PAYPALREQUESTIDREQUIRED.DescriptionEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'issue',
      baseName: 'issue',
      type: 'PAYPALREQUESTIDREQUIRED.IssueEnum',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'PAYPALREQUESTIDREQUIRED.DescriptionEnum',
    },
  ];

  static getAttributeTypeMap() {
    return PAYPALREQUESTIDREQUIRED.attributeTypeMap;
  }
}

export namespace PAYPALREQUESTIDREQUIRED {
  export enum IssueEnum {
    PaypalRequestIdRequired = <any>'PAYPAL_REQUEST_ID_REQUIRED',
  }
  export enum DescriptionEnum {
    APayPalRequestIdIsRequiredIfYouAreTryingToProcessPaymentForAnOrderPleaseSpecifyAPayPalRequestIdOrCreateTheOrderWithoutAPaymentSourceSpecified = <
      any
    >"A PayPal-Request-Id is required if you are trying to process payment for an Order. Please specify a PayPal-Request-Id or Create the Order without a 'payment_source' specified.",
  }
}
