import { ITaskListStoreState } from "../../todolist/list";
import { IFilterStoreState } from "../../todolist/filters";
import { ITaskEditorStoreState } from "../../todolist/editor";

export interface ITodoListStoreState {
	filter: IFilterStoreState;
	list: ITaskListStoreState;
	editor: ITaskEditorStoreState;
}
