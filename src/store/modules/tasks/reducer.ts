import { produce } from 'immer';
import { Task, TasksState } from '@types'

type TasksAction = {
  type: string;
  payload: { tasks: Task[], task: Task }
}

const INITIAL_STATE: TasksState = {
  list: [],
  loading: false,
};

export default function tasks(state: TasksState = INITIAL_STATE, action: TasksAction) {
  return produce(state, draft => {
    switch (action.type) {
      case '@tasks/LIST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@tasks/LIST_SUCCESS': {
        draft.list = action.payload.tasks;
        draft.loading = false;
        break;
      }
      case '@task/SAVE_SUCCESS': {
        draft.list = [...draft.list, action.payload.task];
        break;
      }
      case '@task/UPDATE_SUCCESS': {
        draft.list = draft.list
          .map(task => (task.id === action.payload.task.id ? action.payload.task : task));
        break;
      }
      case '@task/DONE_UNDONE_TASK_SUCCESS': {
        draft.list = draft.list
          .map(task => (task.id === action.payload.task.id ? action.payload.task : task));
        break;
      }
      case '@task/DELETE_SUCCESS': {
        draft.list = draft.list
          .filter(task => (task.id !== action.payload.task.id));
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.list = [];
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
