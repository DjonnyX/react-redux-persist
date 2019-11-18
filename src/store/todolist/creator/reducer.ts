import { Reducer } from "redux";
import { TodoListActionTypes, TodoListCreatorAction } from "./actions";
import { ITaskCreatorStoreState } from "./interfaces";

const initialState: ITaskCreatorStoreState = {
	task: null
};

const reducer: Reducer<ITaskCreatorStoreState, TodoListCreatorAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case TodoListActionTypes.CREATE_TASK:
			return {
				...state,
				task: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
