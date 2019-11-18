import { IStoreState } from "src/store/root";
import { FilterPriorityTypes } from "src/store/todolist/filters";
import { ITaskCollectionModel } from "src/models";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TodoList } from "src/components";
import { getVisibleTasks } from "src/store/todolist/list/selectors";

const mapStateToProps = (state: IStoreState) => {
	return {
		tasks: getVisibleTasks(state)
	};
};

/*const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		onClick: (id: string) => {
			dispatch(selectTask(id));
		}
	};
};
*/
const VisibleTodoList = connect(mapStateToProps, /*mapDispatchToProps*/)(TodoList);
export default VisibleTodoList;
