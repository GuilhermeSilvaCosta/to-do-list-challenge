import { Task, TaskStatusEnum } from "~/@types";

export function saveTaskRequest(title: string, description: string) {
  return {
    type: '@task/SAVE_REQUEST',
    payload: { title, description },
  };
}

export function saveTaskSuccess(task: Task) {
  return {
    type: '@task/SAVE_SUCCESS',
    payload: { task },
  };
}

export function selectTask(task: Task) {
  return {
    type: '@task/SELECT',
    payload: { task },
  };
}

export function updateTaskRequest(status: TaskStatusEnum, comment: string) {
  return {
    type: '@task/UPDATE_REQUEST',
    payload: { status, comment },
  };
}

export function updateTaskSuccess(task: Task) {
  return {
    type: '@task/UPDATE_SUCCESS',
    payload: { task },
  };
}