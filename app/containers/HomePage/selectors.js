/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import {
  HOME_PAGE,
} from './constants';

const selectHome = (state) => state.get(HOME_PAGE);

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelectLoginRequestUrl = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loginRequestUrl')
);

const makeSelectLogoutRequestUrl = () => createSelector(
  selectHome,
  (homeState) => homeState.get('logoutRequestUrl')
);

const makeSelectShowHomeMenu = () => createSelector(
  selectHome,
  (homeState) => homeState.get('showHomeMenu')
);

const makeSelectShowLogoutMenu = () => createSelector(
  selectHome,
  (homeState) => homeState.get('showLogoutMenu')
);

export {
  makeSelectUser,
  makeSelectLoading,
  makeSelectLoginRequestUrl,
  makeSelectLogoutRequestUrl,
  makeSelectShowHomeMenu,
  makeSelectShowLogoutMenu,
};
