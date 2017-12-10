/**
 * HomePageBody saga for asynchronous flow.
 */
import { createSelector } from 'reselect';
import {
  HOME_PAGE_BODY,
} from './constants';

const selectHomePageBody = (state) => state.get(HOME_PAGE_BODY);

const makeSelectResourceName = () => createSelector(
  selectHomePageBody,
  (homePageBodyState) => homePageBodyState.get('resourceName')
);

const makeSelectBackEndAPIResponse = () => createSelector(
  selectHomePageBody,
  (homePageBodyState) => homePageBodyState.get('backEndAPIResponse')
);
const makeSelectUserInfoResponse = () => createSelector(
  selectHomePageBody,
  (homePageBodyState) => homePageBodyState.get('userInfoResponse')
);

export {
  makeSelectResourceName,
  makeSelectBackEndAPIResponse,
  makeSelectUserInfoResponse,
};
