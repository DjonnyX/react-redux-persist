import TodoListEditorActionTypes from "../TaskEditorActionTypes";
import { Action } from "redux";

export default interface ISetTaskDescriptionAction
	extends Action<TodoListEditorActionTypes.SET_TASK_DESCRIPTION> {
	payload: string;
}
