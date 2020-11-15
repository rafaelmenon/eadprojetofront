import { all, takeLatest, call, put } from 'redux-saga/effects';
import { decode } from 'jsonwebtoken';

import api from '../../../services/api';

import { signInSuccess, signFailure, signOut } from './actions';

function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, '/sessions', { email, password });

    if (response && response.data && response.data.token) {
      try {
        const validateToken = yield call(api.post, '/validateToken', {
          token: response.data.token,
        });

        const user = {
          id: validateToken.data.id,
          name: validateToken.data.name,
          email: validateToken.data.email,
          admin: validateToken.data.admin,
          active: validateToken.data.active,
          phone: validateToken.data.phone,
          city: validateToken.data.city
        };
        
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        yield put(signInSuccess(response.data.token, user));
      } catch (error) {
        yield put(signFailure());
      }
    }
  } catch (error) {
    yield put(signFailure());
  }
}

function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    const { exp: tokenExpiration } = decode(token);
    if (tokenExpiration <= Math.floor(Date.now() / 1000))
      return yield put(signOut());

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);