import { combineReducers } from 'redux';

import auth from './auth/reducer';
import task from './task/reducer';
import tasks from './tasks/reducer';

export default combineReducers({
    auth,
    task,
    tasks
});