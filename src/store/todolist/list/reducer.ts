import { Reducer } from "redux";
import { TaskListActionTypes, TaskListAction } from "./actions";
import { ITaskListStoreState } from "../../todolist/list/interfaces";

const initialState: ITaskListStoreState = {
	tasks: null
};

const reducer: Reducer<ITaskListStoreState, TaskListAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case TaskListActionTypes.GET_TASKS:
			return {
				...state,
				tasks: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
