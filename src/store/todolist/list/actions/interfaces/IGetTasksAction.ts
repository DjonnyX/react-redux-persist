import { Action } from "redux";
import TaskListActionTypes from "../TaskListActionTypes";
import { ITaskItemModel } from "../../../../../models/task";

export default interface IGetTasksAction
	extends Action<TaskListActionTypes.GET_TASKS> {
	payload: ITaskItemModel[];
}
