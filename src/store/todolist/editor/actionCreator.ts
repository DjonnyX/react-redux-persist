import {TaskEditorActionTypes, ISetTaskDescriptionAction, ISetTaskNameAction} from "./actions";

export const setTaskName = (name: string): ISetTaskNameAction => ({
	type: TaskEditorActionTypes.SET_TASK_NAME,
	payload: name
});

export const setTaskDescription = (
	description: string
): ISetTaskDescriptionAction => ({
	type: TaskEditorActionTypes.SET_TASK_DESCRIPTION,
	payload: description
});

export const saveTask = () => {};

export const cancelEditingTask = () => {};

