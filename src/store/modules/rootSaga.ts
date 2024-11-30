import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import task from './task/sagas';
import tasks from './tasks/sagas';

export default function* rootSaga(): any {
    return yield all([auth, task, tasks]);
}