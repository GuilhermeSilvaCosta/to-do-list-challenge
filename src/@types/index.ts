export enum TaskStatusEnum {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export type User = {
  id: string;
  email: string;
  name: string;
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatusEnum;
  createdAt: string;
  updatedAt?: string;
  comments?: Comment[];
}

export type Comment = {
  text: string;
  createdAt: string;
}

export type RootStackParamList = {
  CreateTask: undefined;
  Login: undefined;
  TaskList: undefined;
  TaskDetails: undefined;
};

export type AuthState = {
  readonly loading: boolean;
  readonly signed: boolean;
}

export type TasksState = {
  readonly list: Task[];
  readonly loading: boolean;
}

export type TaskState = {
  readonly data: Task;
  readonly loading: boolean
}

export type RootState = {
  auth: AuthState;
  tasks: TasksState;
  task: TaskState;
}