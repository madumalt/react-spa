/*
 * HomePageBody Actions
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
  CHANGE_RESOURCE_NAME,
  INVOKE_BACK_END_API,
  INVOKE_USERINFO_API,
  SET_BACK_END_API_RESPONSE,
  SET_USERINFO_RESPONSE,
} from './constants';

const changeResourceName = (resourceName) => ({
  type: CHANGE_RESOURCE_NAME,
  resourceName,
});

const invokeBackEndAPI = (resourceName) => ({
  type: INVOKE_BACK_END_API,
  resourceName,
});

const invokeUserInfoAPI = () => ({
  type: INVOKE_USERINFO_API,
});

const setBackEndAPIResponse = (isError, apiResponse) => ({
  type: SET_BACK_END_API_RESPONSE,
  response: {
    error: isError,
    json: apiResponse,
  },
});

const setUserInfoResponse = (isError, apiResponse) => ({
  type: SET_USERINFO_RESPONSE,
  response: {
    error: isError,
    json: apiResponse,
  },
});

export {
  changeResourceName,
  invokeBackEndAPI,
  invokeUserInfoAPI,
  setBackEndAPIResponse,
  setUserInfoResponse,
};
