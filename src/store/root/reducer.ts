import { combineReducers } from "redux";
import todoListReducer from "../todolist";

const reducer = combineReducers({
	todo: todoListReducer
});

export default reducer;
