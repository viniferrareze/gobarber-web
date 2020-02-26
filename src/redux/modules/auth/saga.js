import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSucess } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({ payload }) {
   const { email, password } = payload;

   const response = yield call(api.post, 'session', {
      email,
      password,
   });

   const { token, user } = response.data;

   if (!user.provider) {
      return;
   }

   yield put(signInSucess(token, user));

   history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
