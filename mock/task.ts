import { Task, TaskStatusEnum } from '../src/@types'

const task1: Task = {
    id: '1',
    title: 'Task one',
    description: 'The firs task',
    status: TaskStatusEnum.PENDING,
    createdAt: (new Date()).toISOString()
}

const task2: Task = {
    id: '2',
    title: 'Task two',
    description: 'The second task',
    status: TaskStatusEnum.IN_PROGRESS,
    createdAt: (new Date()).toISOString()
}

const task3: Task = {
    id: '3',
    title: 'Task three',
    description: 'The third task',
    status: TaskStatusEnum.COMPLETED,
    createdAt: (new Date()).toISOString()
}

export const tasksMock = [task1, task2, task3];