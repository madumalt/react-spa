/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import {
  HOME,
} from './constants';

const selectHome = (state) => state.get(HOME);

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const makeSelecetLoginRequestUrl = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loginRequestUrl')
);

export {
  makeSelectUser,
  makeSelectLoading,
  makeSelecetLoginRequestUrl,
};
