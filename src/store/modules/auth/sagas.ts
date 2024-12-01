import { Alert } from 'react-native';
import { all, put, takeLatest } from 'redux-saga/effects';

import { signFailure, signInSuccess } from './actions';
import { replace } from '~/routes';

export function* signIn({ payload }: any) {
  try {
    const { email, password } = payload;

    if (email != 'admin@admin.com' || password != 'admin') 
      throw new Error('Falha na autenticação');

    yield put(signInSuccess());
    replace('TaskList');
    
  } catch (e) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados');
    yield put(signFailure())
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);