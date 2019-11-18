import { combineReducers } from "redux";
import editor from "./editor/reducer";
import filter from "./filters/reducer";
import list from "./list/reducer";

export default combineReducers({
	editor,
	filter,
	list
});
