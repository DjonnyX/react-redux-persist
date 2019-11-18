import { Action } from "redux";
import { TodoListActionTypes } from "../TodoListActionTypes";
import { ITaskItemModel } from "../../../../../models/task";

export default interface ITodoListCreateTask extends Action<TodoListActionTypes.CREATE_TASK> {
	payload: ITaskItemModel;
}
