/**
 * App selectors
 */

import { createSelector } from 'reselect';

import {
  APP,
  APP_SESSION_ID,
} from './constants';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectAppSessionId = () => createSelector(
  (state) => state.get(APP),
  (appState) => appState.get(APP_SESSION_ID)
);

export {
  makeSelectLocation,
  makeSelectAppSessionId,
};
