import { TodoListActionTypes } from './TodoListActionTypes';
import { ITodoListCreateTask } from './interfaces';
import { TodoListCreatorAction } from './types';
// import { taskService } from '@services/index';

/*export const createTask = (): ITodoListCreateTask => {
  const task = taskService.create();
  return { type: TodoListActionTypes.CREATE_TASK, payload: task };
};*/

export * from './types';
export * from './interfaces';
export * from './TodoListActionTypes';