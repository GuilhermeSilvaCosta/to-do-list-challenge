import { all, put, select, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { tasksSuccess } from './actions'

import { tasksMock } from '../../../../mock/task';

export function* listTasks() {
    try {
      const { list } = yield select(state => state.tasks)
      if (list.length == 0) {
        yield put(tasksSuccess(tasksMock));
        return;
      }

      yield put(tasksSuccess(list));
    } catch (e) {
      Alert.alert('Erro!', 'Erro ao recuperar tarefas!');
    }
  }

export default all([
    takeLatest('@tasks/LIST_REQUEST', listTasks)
]);
