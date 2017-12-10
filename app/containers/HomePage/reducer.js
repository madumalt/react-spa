/*
 * HomePage Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  AUTH_USER_FOUND,
  NO_AUTH_USER_FOUND,
  SET_LOGIN_REQUEST_URL,
  SET_LOGOUT_REQUEST_URL,
  TOGGLE_HOME_MENU,
  TOGGLE_LOGOUT_MENU,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  loading: false,
  user: {
    authenticated: false,
    name: '',
  },
  loginRequestUrl: '',
  logoutRequestUrl: '',
  showHomeMenu: false,
  showLogoutMenu: false,
});

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NO_AUTH_USER_FOUND:
      return state
        .set('loading', false)
        .set('user', getUserInitState());
    case SET_LOGIN_REQUEST_URL:
      return state.set('loginRequestUrl', action.loginRequestUrl);
    case SET_LOGOUT_REQUEST_URL:
      return state.set('logoutRequestUrl', action.logoutRequestUrl);
    case AUTH_USER_FOUND:
      return state
        .set('loading', false)
        .set('user', { authenticated: true, name: action.user });
    case TOGGLE_HOME_MENU:
      return state.set('showHomeMenu', !state.get('showHomeMenu'));
    case TOGGLE_LOGOUT_MENU:
      return state.set('showLogoutMenu', !state.get('showLogoutMenu'));
    default:
      return state;
  }
};

const getUserInitState = () => ({ authenticated: false, name: '' });

export default homePageReducer;
