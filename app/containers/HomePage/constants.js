/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Action Constants
export const AUTH_USER_FOUND = 'authUserFound';
export const NO_AUTH_USER_FOUND = 'noAuthUserFound';
export const SET_LOGIN_REQUEST_URL = 'setLoginRequestUrl';

// Other Constants
export const HOME = 'home';
