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

import { Bancontact } from './bancontact';
import { Blik } from './blik';
import { CardResponse } from './cardResponse';
import { Eps } from './eps';
import { Giropay } from './giropay';
import { Ideal } from './ideal';
import { Mybank } from './mybank';
import { P24 } from './p24';
import { PaypalWalletResponse } from './paypalWalletResponse';
import { Sofort } from './sofort';
import { Trustly } from './trustly';
import { VenmoWalletResponse } from './venmoWalletResponse';

/**
 * The payment source used to fund the payment.
 */
export class PaymentSourceResponse {
  'card'?: CardResponse;
  'paypal'?: PaypalWalletResponse;
  'bancontact'?: Bancontact;
  'blik'?: Blik;
  'eps'?: Eps;
  'giropay'?: Giropay;
  'ideal'?: Ideal;
  'mybank'?: Mybank;
  'p24'?: P24;
  'sofort'?: Sofort;
  'trustly'?: Trustly;
  'venmo'?: VenmoWalletResponse;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'card',
      baseName: 'card',
      type: 'CardResponse',
    },
    {
      name: 'paypal',
      baseName: 'paypal',
      type: 'PaypalWalletResponse',
    },
    {
      name: 'bancontact',
      baseName: 'bancontact',
      type: 'Bancontact',
    },
    {
      name: 'blik',
      baseName: 'blik',
      type: 'Blik',
    },
    {
      name: 'eps',
      baseName: 'eps',
      type: 'Eps',
    },
    {
      name: 'giropay',
      baseName: 'giropay',
      type: 'Giropay',
    },
    {
      name: 'ideal',
      baseName: 'ideal',
      type: 'Ideal',
    },
    {
      name: 'mybank',
      baseName: 'mybank',
      type: 'Mybank',
    },
    {
      name: 'p24',
      baseName: 'p24',
      type: 'P24',
    },
    {
      name: 'sofort',
      baseName: 'sofort',
      type: 'Sofort',
    },
    {
      name: 'trustly',
      baseName: 'trustly',
      type: 'Trustly',
    },
    {
      name: 'venmo',
      baseName: 'venmo',
      type: 'VenmoWalletResponse',
    },
  ];

  static getAttributeTypeMap() {
    return PaymentSourceResponse.attributeTypeMap;
  }
}