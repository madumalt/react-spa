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
} from './constants';

const authenticatedUserFound = (user) => ({
  type: AUTH_USER_FOUND,
  user,
});

const noAuthenticatedUser = () => ({
  type: NO_AUTH_USER_FOUND,
});

const setLoginRequestUrl = (loginRequestUrl) => ({
  type: SET_LOGIN_REQUEST_URL,
  loginRequestUrl,
});


export {
  authenticatedUserFound,
  noAuthenticatedUser,
  setLoginRequestUrl,
};
