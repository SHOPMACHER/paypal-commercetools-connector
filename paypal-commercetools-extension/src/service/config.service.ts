import { createApiRoot } from '../client/create.client';
import { AccessTokenObject, PayPalSettings } from '../types/index.types';
import { logger } from '../utils/logger.utils';
import { GRAPHQL_CUSTOMOBJECT_CONTAINER_NAME, GRAPHQL_WEBHOOKURL_KEY_NAME } from "../constants";

export const getSettings = async () => {
  try {
    const apiRoot = createApiRoot();
    const customObject = (
      await apiRoot
        .customObjects()
        .withContainerAndKey({
          container: 'paypal-commercetools-connector',
          key: 'settings',
        })
        .get()
        .execute()
    ).body;
    return customObject.value as PayPalSettings;
  } catch (e) {
    logger.error('Failed to load settings from custom object', e);
    return undefined;
  }
};

export const getWebhookUrl = async () => {
  try {
    const apiRoot = createApiRoot();
    return (
      await apiRoot
        .customObjects()
        .withContainerAndKey({
          container: GRAPHQL_CUSTOMOBJECT_CONTAINER_NAME,
          key: GRAPHQL_WEBHOOKURL_KEY_NAME,
        })
        .get()
        .execute()
    ).body.value;
  } catch (e) {
    logger.error('Failed to load webhook url', e);
    return '';
  }
};

export const getCachedAccessToken = async () => {
  try {
    const apiRoot = createApiRoot();
    return (
      await apiRoot
        .customObjects()
        .withContainerAndKey({
          container: 'paypal-commercetools-connector',
          key: 'accessToken',
        })
        .get()
        .execute()
    ).body;
  } catch (e) {
    logger.warn('Failed to load cached access token', e);
    return undefined;
  }
};

export const cacheAccessToken = async (
  token: AccessTokenObject,
  version: number
) => {
  const apiRoot = createApiRoot();
  return apiRoot
    .customObjects()
    .post({
      body: {
        container: 'paypal-commercetools-connector',
        key: 'accessToken',
        value: token,
        version: version,
      },
    })
    .execute();
};

export const deleteAccessToken = async () => {
  const apiRoot = createApiRoot();
  return apiRoot
    .customObjects()
    .withContainerAndKey({
      container: 'paypal-commercetools-connector',
      key: 'accessToken',
    })
    .delete()
    .execute();
};
