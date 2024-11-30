import { Alert } from 'react-native';
import { all, put, select, takeLatest } from 'redux-saga/effects';

import { saveTaskSuccess, updateTaskSuccess } from './actions';
import { Comment, Task, TaskStatusEnum } from '~/@types';
import { navigate } from '~/routes';

export function* saveTask({ payload }: any) {
  try {
    const { title, description } = payload;
    const data: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: TaskStatusEnum.PENDING,
      createdAt: (new Date()).toISOString()
    }

    yield put(saveTaskSuccess(data));
    navigate('TaskList');
  } catch(e) {
    Alert.alert('Erro!', 'Erro ao criar a tarefa!');
  }
}

export function* updateTask({ payload }: any) {
  try {
    const { data: oldValue } = yield select(state => state.task);
    const { status, comment } = payload;

    const newComment: Comment = {
      text: comment,
      createdAt: (new Date()).toISOString()
    }
    const data: Task = {
      ...oldValue,
      status,
      comments: comment ? [
        ...(oldValue.comments || []),
        newComment
      ] : oldValue.comments
    }

    yield put(updateTaskSuccess(data));
    navigate('TaskList');
  } catch(e) {
    Alert.alert('Erro!', 'Erro ao atualizar a tarefa!');
  }
}

export function* detailTask() {
  navigate('TaskDetails')
}

export default all([
  takeLatest('@task/SAVE_REQUEST', saveTask),
  takeLatest('@task/UPDATE_REQUEST', updateTask),
  takeLatest('@task/SELECT', detailTask)
]);