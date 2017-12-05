/**
 *
 */
import { call, put } from 'redux-saga/effects';

import { authenticatedUserFound, noAuthenticatedUser, setLoginRequestUrl } from 'containers/HomePage/actions';
import { requestJSON } from 'utils/request';
import { getProxyLoginEndPoint, getProxyUsersEndpoint } from 'utils/appUtils';

function* callProxyUserEndPoint() {
  const requestUrl = getProxyUsersEndpoint();

  try {
    // Call the proxy login endpoint via utils/request.
    const response = yield call(
      requestJSON,
      requestUrl,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    yield put(authenticatedUserFound(response.sub));
  } catch (err) {
    yield put(noAuthenticatedUser(err));
    yield put(setLoginRequestUrl(getProxyLoginEndPoint()));
  }
}

function* HomeSaga() {
  yield callProxyUserEndPoint();
}

export default HomeSaga;

