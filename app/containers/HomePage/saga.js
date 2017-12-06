/**
 *
 */
import { call, put } from 'redux-saga/effects';

import { requestJSON } from 'utils/request';
import { getProxyLoginEndPoint, getProxyUsersEndpoint, getProxyLogoutEndPoint } from 'utils/appUtils';
import {
  authenticatedUserFound,
  noAuthenticatedUserFound,
  setLoginRequestUrl,
  setLogoutRequestUrl,
} from './actions';

function* callProxyUserEndPoint() {
  const userEndpoint = getProxyUsersEndpoint();

  try {
    // Call the proxy login endpoint via utils/request.
    const response = yield call(
      requestJSON,
      userEndpoint,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    yield put(authenticatedUserFound(response.sub));
    yield put(setLogoutRequestUrl(getProxyLogoutEndPoint()));
  } catch (err) {
    yield put(noAuthenticatedUserFound(err));
    yield put(setLoginRequestUrl(getProxyLoginEndPoint()));
  }
}

function* HomeSaga() {
  yield callProxyUserEndPoint();
}

export default HomeSaga;

