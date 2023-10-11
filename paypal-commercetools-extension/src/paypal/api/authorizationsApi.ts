import http from 'http';
import localVarRequest from 'request';

/* tslint:disable:no-unused-locals */
import { Authorization2 } from '../model-payments-payment/authorization2';
import { Capture2 } from '../model-payments-payment/capture2';
import { CaptureRequest } from '../model-payments-payment/captureRequest';
import { ReauthorizeRequest } from '../model-payments-payment/reauthorizeRequest';

import {
  Authentication,
  Interceptor,
  OAuth,
  ObjectSerializer,
  VoidAuth,
} from '../model-payments-payment/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api-m.sandbox.paypal.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AuthorizationsApiApiKeys {}

export class AuthorizationsApi {
  protected _basePath = defaultBasePath;
  protected _defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    default: <Authentication>new VoidAuth(),
    Oauth2: new OAuth(),
  };

  protected interceptors: Interceptor[] = [];

  constructor(basePath?: string);
  constructor(
    basePathOrUsername: string,
    password?: string,
    basePath?: string
  ) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  set defaultHeaders(defaultHeaders: any) {
    this._defaultHeaders = defaultHeaders;
  }

  get defaultHeaders() {
    return this._defaultHeaders;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: AuthorizationsApiApiKeys, value: string) {
    (this.authentications as any)[AuthorizationsApiApiKeys[key]].apiKey = value;
  }

  set accessToken(token: string) {
    this.authentications.Oauth2.accessToken = token;
  }

  public addInterceptor(interceptor: Interceptor) {
    this.interceptors.push(interceptor);
  }

  /**
   * Captures an authorized payment, by ID.
   * @summary Capture authorized payment
   * @param authorizationId The PayPal-generated ID for the authorized payment to void.
   * @param payPalRequestId The server stores keys for 45 days.
   * @param contentType The media type. Required for operations with a request body. The value is &#x60;application/&lt;format&gt;&#x60;, where &#x60;format&#x60; is &#x60;json&#x60;.
   * @param prefer The preferred server response upon successful completion of the request. Value is:&lt;ul&gt;&lt;li&gt;&lt;code&gt;return&#x3D;minimal&lt;/code&gt;. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;status&lt;/code&gt; and HATEOAS links.&lt;/li&gt;&lt;li&gt;&lt;code&gt;return&#x3D;representation&lt;/code&gt;. The server returns a complete resource representation, including the current state of the resource.&lt;/li&gt;&lt;/ul&gt;
   * @param captureRequest
   */
  public async authorizationsCapture(
    authorizationId: string,
    payPalRequestId: string,
    contentType: string,
    prefer?: string,
    captureRequest?: CaptureRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Capture2 }> {
    const localVarPath =
      this.basePath +
      '/v2/payments/authorizations/{authorization_id}/capture'.replace(
        '{' + 'authorization_id' + '}',
        encodeURIComponent(String(authorizationId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorizationId' is not null or undefined
    if (authorizationId === null || authorizationId === undefined) {
      throw new Error(
        'Required parameter authorizationId was null or undefined when calling authorizationsCapture.'
      );
    }

    // verify required parameter 'payPalRequestId' is not null or undefined
    if (payPalRequestId === null || payPalRequestId === undefined) {
      throw new Error(
        'Required parameter payPalRequestId was null or undefined when calling authorizationsCapture.'
      );
    }

    // verify required parameter 'contentType' is not null or undefined
    if (contentType === null || contentType === undefined) {
      throw new Error(
        'Required parameter contentType was null or undefined when calling authorizationsCapture.'
      );
    }

    localVarHeaderParams['PayPal-Request-Id'] = ObjectSerializer.serialize(
      payPalRequestId,
      'string'
    );
    localVarHeaderParams['Prefer'] = ObjectSerializer.serialize(
      prefer,
      'string'
    );
    localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(
      contentType,
      'string'
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(captureRequest, 'CaptureRequest'),
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.Oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.Oauth2.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: Capture2 }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (
                response.statusCode &&
                response.statusCode >= 200 &&
                response.statusCode <= 299
              ) {
                body = ObjectSerializer.deserialize(body, 'Capture2');
                resolve({ response: response, body: body });
              } else {
                reject(new HttpError(response, body, response.statusCode));
              }
            }
          });
        }
      );
    });
  }
  /**
   * Shows details for an authorized payment, by ID.
   * @summary Show details for authorized payment
   * @param authorizationId The PayPal-generated ID for the authorized payment to void.
   * @param contentType The media type. Required for operations with a request body. The value is &#x60;application/&lt;format&gt;&#x60;, where &#x60;format&#x60; is &#x60;json&#x60;.
   */
  public async authorizationsGet(
    authorizationId: string,
    contentType: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Authorization2 }> {
    const localVarPath =
      this.basePath +
      '/v2/payments/authorizations/{authorization_id}'.replace(
        '{' + 'authorization_id' + '}',
        encodeURIComponent(String(authorizationId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorizationId' is not null or undefined
    if (authorizationId === null || authorizationId === undefined) {
      throw new Error(
        'Required parameter authorizationId was null or undefined when calling authorizationsGet.'
      );
    }

    // verify required parameter 'contentType' is not null or undefined
    if (contentType === null || contentType === undefined) {
      throw new Error(
        'Required parameter contentType was null or undefined when calling authorizationsGet.'
      );
    }

    localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(
      contentType,
      'string'
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.Oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.Oauth2.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Authorization2;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, 'Authorization2');
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   * Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment once for up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.<blockquote><strong>Note:</strong> This request is currently not supported for Partner use cases.</blockquote>
   * @summary Reauthorize authorized payment
   * @param authorizationId The PayPal-generated ID for the authorized payment to void.
   * @param payPalRequestId The server stores keys for 45 days.
   * @param contentType The media type. Required for operations with a request body. The value is &#x60;application/&lt;format&gt;&#x60;, where &#x60;format&#x60; is &#x60;json&#x60;.
   * @param prefer The preferred server response upon successful completion of the request. Value is:&lt;ul&gt;&lt;li&gt;&lt;code&gt;return&#x3D;minimal&lt;/code&gt;. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;status&lt;/code&gt; and HATEOAS links.&lt;/li&gt;&lt;li&gt;&lt;code&gt;return&#x3D;representation&lt;/code&gt;. The server returns a complete resource representation, including the current state of the resource.&lt;/li&gt;&lt;/ul&gt;
   * @param reauthorizeRequest
   */
  public async authorizationsReauthorize(
    authorizationId: string,
    payPalRequestId: string,
    contentType: string,
    prefer?: string,
    reauthorizeRequest?: ReauthorizeRequest,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Authorization2 }> {
    const localVarPath =
      this.basePath +
      '/v2/payments/authorizations/{authorization_id}/reauthorize'.replace(
        '{' + 'authorization_id' + '}',
        encodeURIComponent(String(authorizationId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorizationId' is not null or undefined
    if (authorizationId === null || authorizationId === undefined) {
      throw new Error(
        'Required parameter authorizationId was null or undefined when calling authorizationsReauthorize.'
      );
    }

    // verify required parameter 'payPalRequestId' is not null or undefined
    if (payPalRequestId === null || payPalRequestId === undefined) {
      throw new Error(
        'Required parameter payPalRequestId was null or undefined when calling authorizationsReauthorize.'
      );
    }

    // verify required parameter 'contentType' is not null or undefined
    if (contentType === null || contentType === undefined) {
      throw new Error(
        'Required parameter contentType was null or undefined when calling authorizationsReauthorize.'
      );
    }

    localVarHeaderParams['PayPal-Request-Id'] = ObjectSerializer.serialize(
      payPalRequestId,
      'string'
    );
    localVarHeaderParams['Prefer'] = ObjectSerializer.serialize(
      prefer,
      'string'
    );
    localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(
      contentType,
      'string'
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(
        reauthorizeRequest,
        'ReauthorizeRequest'
      ),
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.Oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.Oauth2.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Authorization2;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, 'Authorization2');
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
  /**
   * Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.
   * @summary Void authorized payment
   * @param authorizationId The PayPal-generated ID for the authorized payment to void.
   * @param contentType The media type. Required for operations with a request body. The value is &#x60;application/&lt;format&gt;&#x60;, where &#x60;format&#x60; is &#x60;json&#x60;.
   * @param payPalAuthAssertion An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).&lt;blockquote&gt;&lt;strong&gt;Note:&lt;/strong&gt;For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.&lt;/blockquote&gt;
   * @param prefer The preferred server response upon successful completion of the request. Value is:&lt;ul&gt;&lt;li&gt;&lt;code&gt;return&#x3D;minimal&lt;/code&gt;. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;status&lt;/code&gt; and HATEOAS links.&lt;/li&gt;&lt;li&gt;&lt;code&gt;return&#x3D;representation&lt;/code&gt;. The server returns a complete resource representation, including the current state of the resource.&lt;/li&gt;&lt;/ul&gt;
   */
  public async authorizationsVoid(
    authorizationId: string,
    contentType: string,
    payPalAuthAssertion?: string,
    prefer?: string,
    options: { headers: { [name: string]: string } } = { headers: {} }
  ): Promise<{ response: http.IncomingMessage; body: Authorization2 }> {
    const localVarPath =
      this.basePath +
      '/v2/payments/authorizations/{authorization_id}/void'.replace(
        '{' + 'authorization_id' + '}',
        encodeURIComponent(String(authorizationId))
      );
    let localVarQueryParameters: any = {};
    let localVarHeaderParams: any = (<any>Object).assign(
      {},
      this._defaultHeaders
    );
    const produces = ['application/json'];
    // give precedence to 'application/json'
    if (produces.indexOf('application/json') >= 0) {
      localVarHeaderParams.Accept = 'application/json';
    } else {
      localVarHeaderParams.Accept = produces.join(',');
    }
    let localVarFormParams: any = {};

    // verify required parameter 'authorizationId' is not null or undefined
    if (authorizationId === null || authorizationId === undefined) {
      throw new Error(
        'Required parameter authorizationId was null or undefined when calling authorizationsVoid.'
      );
    }

    // verify required parameter 'contentType' is not null or undefined
    if (contentType === null || contentType === undefined) {
      throw new Error(
        'Required parameter contentType was null or undefined when calling authorizationsVoid.'
      );
    }

    localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(
      contentType,
      'string'
    );
    localVarHeaderParams['PayPal-Auth-Assertion'] = ObjectSerializer.serialize(
      payPalAuthAssertion,
      'string'
    );
    localVarHeaderParams['Prefer'] = ObjectSerializer.serialize(
      prefer,
      'string'
    );
    (<any>Object).assign(localVarHeaderParams, options.headers);

    let localVarUseFormData = false;

    let localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    let authenticationPromise = Promise.resolve();
    if (this.authentications.Oauth2.accessToken) {
      authenticationPromise = authenticationPromise.then(() =>
        this.authentications.Oauth2.applyToRequest(localVarRequestOptions)
      );
    }
    authenticationPromise = authenticationPromise.then(() =>
      this.authentications.default.applyToRequest(localVarRequestOptions)
    );

    let interceptorPromise = authenticationPromise;
    for (const interceptor of this.interceptors) {
      interceptorPromise = interceptorPromise.then(() =>
        interceptor(localVarRequestOptions)
      );
    }

    return interceptorPromise.then(() => {
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          (<any>localVarRequestOptions).formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{
        response: http.IncomingMessage;
        body: Authorization2;
      }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (
              response.statusCode &&
              response.statusCode >= 200 &&
              response.statusCode <= 299
            ) {
              body = ObjectSerializer.deserialize(body, 'Authorization2');
              resolve({ response: response, body: body });
            } else {
              reject(new HttpError(response, body, response.statusCode));
            }
          }
        });
      });
    });
  }
}
