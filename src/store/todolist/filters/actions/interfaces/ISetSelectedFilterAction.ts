import { Action } from "redux";
import FilterActionTypes from "../FilterActionTypes";

export default interface ISetSelectedFilterAction
	extends Action<FilterActionTypes.SET_SELECTED_FILTER> {
	payload: number;
}
