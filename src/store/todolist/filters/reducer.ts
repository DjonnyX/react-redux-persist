import { Reducer } from "redux";
import {
	FilterActionTypes,
	FilterAction,
	IFilterStoreState,
	FilterPriorityTypes
} from "../../todolist/filters";

const initialState: IFilterStoreState = {
	selectedFilter: FilterPriorityTypes.ALL
};

const reducer: Reducer<IFilterStoreState, FilterAction> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case FilterActionTypes.SET_SELECTED_FILTER:
			return {
				...state,
				selectedFilter: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
