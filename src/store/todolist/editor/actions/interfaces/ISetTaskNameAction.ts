import TodoListEditorActionTypes from "../TaskEditorActionTypes";
import { Action } from "redux";

export default interface ISetTaskNameAction
	extends Action<TodoListEditorActionTypes.SET_TASK_NAME> {
	payload: string;
}
