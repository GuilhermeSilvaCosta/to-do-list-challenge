import { Task } from '@types'

export function tasksRequest() {
  return {
    type: '@tasks/LIST_REQUEST',
  };
}

export function tasksSuccess(tasks: Task[]) {
  return {
    type: '@tasks/LIST_SUCCESS',
    payload: { tasks },
  };
}
  