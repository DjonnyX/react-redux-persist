import TaskListActionTypes from "./TaskListActionTypes";
import TaskListAction from "./types/TaskListAction";

export const getTasks = () => ({
	type: TaskListActionTypes.GET_TASKS
});

export * from "./interfaces";
export { TaskListActionTypes, TaskListAction };
