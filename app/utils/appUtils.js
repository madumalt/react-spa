/**
 * Utility functions required for the application.
 */

import {
  APP_SESSION_ID_KEY,
} from './constants';

const genRan4CharCode = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); // eslint-disable-line no-bitwise

const generateAppSessionId = () => (
  `${genRan4CharCode()}${genRan4CharCode()}-${genRan4CharCode()}-${genRan4CharCode()}-${genRan4CharCode()}-${genRan4CharCode()}${genRan4CharCode()}${genRan4CharCode()}`
).toUpperCase();

const getAppSessionId = () => {
  if (!sessionStorage.getItem(APP_SESSION_ID_KEY)) {
    sessionStorage.setItem(APP_SESSION_ID_KEY, generateAppSessionId());
  }
  return sessionStorage.getItem(APP_SESSION_ID_KEY);
};

const getProxyLoginEndPoint = () => {
  // Set and Get application session Id from the browser sessionStorage.
  // This need to be a a unique for a browser session.
  // Therefore the sessionStorage is the best choice in storing appSessionId
  const spaName = 'mobileshop'; // TODO think of a better approach for sapName keep.
  return `https://localhost:8443/oauth2-proxy/login?spa-name=${spaName}&session-id=${getAppSessionId()}`;
};

const getProxyLogoutEndPoint = () => `https://localhost:8443/oauth2-proxy/logout?session-id=${getAppSessionId()}`;

const getProxyUsersEndpoint = () => `https://localhost:8443/oauth2-proxy/users?session-id=${getAppSessionId()}`;

const getDummyAPIEndPoint = (resourceName) =>
  `https://localhost:8443/oauth2-proxy/api/oauth2-proxy/dummy/secured-resource?resource-name=${resourceName}`;

const getProxyUserInfoEndpoint = () => `https://localhost:8443/oauth2-proxy/userinfo?session-id=${getAppSessionId()}`;

export {
  getAppSessionId,
  getProxyLoginEndPoint,
  getProxyLogoutEndPoint,
  getProxyUsersEndpoint,
  getDummyAPIEndPoint,
  getProxyUserInfoEndpoint,
};
