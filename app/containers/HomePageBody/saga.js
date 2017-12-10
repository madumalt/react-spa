/**
 * HomPageBody Saga for asynchronous flows.
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { requestJSON, isErrorResponse } from 'utils/request';
import { getDummyAPIEndPoint, getProxyUserInfoEndpoint, getAppSessionId } from 'utils/appUtils';
import {
  setBackEndAPIResponse,
  setUserInfoResponse,
} from './actions';
import {
  INVOKE_BACK_END_API,
  INVOKE_USERINFO_API,
} from './constants';

function* callBackEndAPI(action) {
  const dummyAPIEndPoint = getDummyAPIEndPoint(action.resourceName);
  try {
    // Call the proxy login endpoint via utils/request.
    const jsonResponse = yield call(
      requestJSON,
      dummyAPIEndPoint,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Spa-Session-Id': getAppSessionId()
        }
      },
      true
    );
    const isError = !(jsonResponse && (200 <= jsonResponse.status <300));
    yield put(setBackEndAPIResponse(isError, jsonResponse));
  } catch (error) {
    yield put(setBackEndAPIResponse(true, {errorMessage: error.message}))
  }
}

function* callUserInfoAPI() {
  const userInfoEndpoint = getProxyUserInfoEndpoint();
  try {
    // Call the proxy login endpoint via utils/request.
    const jsonResponse = yield call(
      requestJSON,
      userInfoEndpoint,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Spa-Session-Id': getAppSessionId()
        }
      },
      true
    );
    const isError = !(jsonResponse && jsonResponse.status && (200 <= jsonResponse.status <300));
    yield put(setUserInfoResponse(isError, jsonResponse));
  } catch (error) {
    yield put(setUserInfoResponse(true, {errorMessage: error.message}))
  }
}

export default function* HomePageBodySaga() {
  yield takeLatest(INVOKE_BACK_END_API, callBackEndAPI);
  yield takeLatest(INVOKE_USERINFO_API, callUserInfoAPI)
}
