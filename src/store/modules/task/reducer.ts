import { produce } from 'immer';
import { Task, TaskState } from '@types';

type TaskAction = {
  type: string;
  payload: { task: Task }
}

const INITIAL_STATE: TaskState = {
  data: {} as Task,
  loading: false,
};

export default function task(state: TaskState = INITIAL_STATE, action: TaskAction) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/SAVE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@task/SELECT': {
        draft.data = action.payload.task
        break;
      }
      case '@task/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@task/UPDATE_SUCCESS': {
        draft.loading = false;
        draft.data = {} as Task;
        break;
      }
      default:
    }
  })
}

