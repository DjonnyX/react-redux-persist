import { Reducer } from "redux";
import { TaskEditorAction } from "./actions";
import { ITaskEditorStoreState } from "./interfaces";
import { TaskEditorActionTypes } from "./actions";

const initialState: ITaskEditorStoreState = {
	task: null
};

const reducer: Reducer<ITaskEditorStoreState, TaskEditorAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case TaskEditorActionTypes.SET_TASK_NAME:
			return {
				...state,
				task: {
					...state.task,
					name: action.payload
				}
			};
		case TaskEditorActionTypes.SET_TASK_DESCRIPTION:
			return {
				...state,
				task: {
					...state.task,
					description: action.payload
				}
			};
		default:
			return state;
	}
};

export default reducer;
