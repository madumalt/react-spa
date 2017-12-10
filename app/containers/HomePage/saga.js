/**
 * HomPage Saga for asynchronous flows.
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
    const jsonResponse = yield call(
      requestJSON,
      userEndpoint,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    // Actions must be plain objects. Need to Use custom middleware for async actions.
    if (Boolean(jsonResponse)) {
      const userName = jsonResponse.sub;
      yield put(authenticatedUserFound(userName));
      yield put(setLogoutRequestUrl(getProxyLogoutEndPoint()));
    } else {
      yield put(noAuthenticatedUserFound());
      yield put(setLoginRequestUrl(getProxyLoginEndPoint()));
    }
  } catch (err) {
    yield put(noAuthenticatedUserFound());
    yield put(setLoginRequestUrl(getProxyLoginEndPoint()));
  }
}

export default function* HomePageSaga() {
  yield callProxyUserEndPoint();
}
