import { ExchangeRate } from './exchangeRate';
import { Money } from './money';
import { PlatformFee } from './platformFee';

/**
 * The detailed breakdown of the capture activity. This is not available for transactions that are in pending state.
 */
export class SellerReceivableBreakdown {
  'grossAmount': Money;
  'paypalFee'?: Money;
  'paypalFeeInReceivableCurrency'?: Money;
  'netAmount'?: Money;
  'receivableAmount'?: Money;
  'exchangeRate'?: ExchangeRate;
  /**
   * An array of platform or partner fees, commissions, or brokerage fees that associated with the captured payment.
   */
  'platformFees'?: Array<PlatformFee>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'grossAmount',
      baseName: 'gross_amount',
      type: 'Money',
    },
    {
      name: 'paypalFee',
      baseName: 'paypal_fee',
      type: 'Money',
    },
    {
      name: 'paypalFeeInReceivableCurrency',
      baseName: 'paypal_fee_in_receivable_currency',
      type: 'Money',
    },
    {
      name: 'netAmount',
      baseName: 'net_amount',
      type: 'Money',
    },
    {
      name: 'receivableAmount',
      baseName: 'receivable_amount',
      type: 'Money',
    },
    {
      name: 'exchangeRate',
      baseName: 'exchange_rate',
      type: 'ExchangeRate',
    },
    {
      name: 'platformFees',
      baseName: 'platform_fees',
      type: 'Array<PlatformFee>',
    },
  ];

  static getAttributeTypeMap() {
    return SellerReceivableBreakdown.attributeTypeMap;
  }
}
