/**
 *
 */
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';

import { authenticatedUserFound, noAuthenticatedUser, setLoginRequestUrl } from 'containers/HomePage/actions';
import { makeSelectAppSessionId } from 'containers/App/selectors';
import { requestJSON, requestRedirect } from 'utils/request';
import {
  NO_AUTH_USER_FOUND,
} from './constants'

function* callProxyUserEndPoint() {
  // Select appSessionId from the App store.
  const appSessionId = yield select(makeSelectAppSessionId());
  const requestURL = `https://localhost:8443/oauth2-proxy/users?session-id=${appSessionId}`;

  try {
    // Call the proxy login endpoint via utils/request.
    const response = yield call(
      requestJSON,
      requestURL,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    yield put(authenticatedUserFound(response.sub))
  } catch (err) {
    yield put(noAuthenticatedUser(err));
    const requestURL = yield call(getProxyLoginEndPoint);
    yield put(setLoginRequestUrl(requestURL));
  }
}

function* getProxyLoginEndPoint() {
  // Select appSessionId from the App's store.
  const spaName = 'mobileshop';
  const appSessionId = yield select(makeSelectAppSessionId());
  const requestURL = `https://localhost:8443/oauth2-proxy/login?spa-name=${spaName}&session-id=${appSessionId}`;
  return requestURL;
}

export default function* HomeSaga() {
  yield callProxyUserEndPoint();
}
