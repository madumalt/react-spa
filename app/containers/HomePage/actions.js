/*
 * Home Page Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  AUTH_USER_FOUND,
  NO_AUTH_USER_FOUND,
  SET_LOGIN_REQUEST_URL,
  SET_LOGOUT_REQUEST_URL,
  TOGGLE_HOME_MENU,
  TOGGLE_LOGOUT_MENU,
} from './constants';

const authenticatedUserFound = (user) => ({
  type: AUTH_USER_FOUND,
  user,
});

const noAuthenticatedUserFound = () => ({
  type: NO_AUTH_USER_FOUND,
});

const setLoginRequestUrl = (loginRequestUrl) => ({
  type: SET_LOGIN_REQUEST_URL,
  loginRequestUrl,
});

const setLogoutRequestUrl = (logoutRequestUrl) => ({
  type: SET_LOGOUT_REQUEST_URL,
  logoutRequestUrl,
});

const toggleHomeMenu = () => ({
  type: TOGGLE_HOME_MENU,
});

const toggleLogoutMenu = () => ({
  type: TOGGLE_LOGOUT_MENU,
});


export {
  authenticatedUserFound,
  noAuthenticatedUserFound,
  setLoginRequestUrl,
  setLogoutRequestUrl,
  toggleHomeMenu,
  toggleLogoutMenu,
};
