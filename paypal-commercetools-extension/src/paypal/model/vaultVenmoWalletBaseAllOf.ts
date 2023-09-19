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

export class VaultVenmoWalletBaseAllOf {
  /**
   * The description displayed to Venmo consumer on the approval flow for Venmo, as well as on the Venmo payment token management experience on Venmo.com.
   */
  'description'?: string;
  /**
   * Expected business/pricing model for the billing agreement.
   */
  'usagePattern'?: VaultVenmoWalletBaseAllOf.UsagePatternEnum;
  /**
   * The usage type associated with the Venmo payment token.
   */
  'usageType'?: VaultVenmoWalletBaseAllOf.UsageTypeEnum;
  /**
   * The customer type associated with the Venmo payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.
   */
  'customerType'?: VaultVenmoWalletBaseAllOf.CustomerTypeEnum =
    VaultVenmoWalletBaseAllOf.CustomerTypeEnum.Consumer;
  /**
   * Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same Venmo account.
   */
  'permitMultiplePaymentTokens'?: boolean = false;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'usagePattern',
      baseName: 'usage_pattern',
      type: 'VaultVenmoWalletBaseAllOf.UsagePatternEnum',
    },
    {
      name: 'usageType',
      baseName: 'usage_type',
      type: 'VaultVenmoWalletBaseAllOf.UsageTypeEnum',
    },
    {
      name: 'customerType',
      baseName: 'customer_type',
      type: 'VaultVenmoWalletBaseAllOf.CustomerTypeEnum',
    },
    {
      name: 'permitMultiplePaymentTokens',
      baseName: 'permit_multiple_payment_tokens',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return VaultVenmoWalletBaseAllOf.attributeTypeMap;
  }
}

export namespace VaultVenmoWalletBaseAllOf {
  export enum UsagePatternEnum {
    Immediate = <any>'IMMEDIATE',
    Deferred = <any>'DEFERRED',
    RecurringPrepaid = <any>'RECURRING_PREPAID',
    RecurringPostpaid = <any>'RECURRING_POSTPAID',
    ThresholdPrepaid = <any>'THRESHOLD_PREPAID',
    ThresholdPostpaid = <any>'THRESHOLD_POSTPAID',
  }
  export enum UsageTypeEnum {
    Merchant = <any>'MERCHANT',
    Platform = <any>'PLATFORM',
  }
  export enum CustomerTypeEnum {
    Consumer = <any>'CONSUMER',
    Business = <any>'BUSINESS',
  }
}
