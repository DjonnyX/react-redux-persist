import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITaskItemModel } from "../../../../models";
import TaskListActionTypes from "./TaskListActionTypes";
import TaskListAction from "./types/TaskListAction";

export const getTasks = () => ({
	type: TaskListActionTypes.GET_TASKS
});

export * from "./interfaces";
export { TaskListActionTypes, TaskListAction };

/*export const createTask = () => {
  const gettingPeopleAction: IGettingPeopleAction = {
    type: TodoActionTypes.GET_TASKS,
  };
};*/

/*const getPeopleActionCreator: ActionCreator<
  ThunkAction<
    Promise<IGetTasksAction>,
    ITaskModel[],
    null,
    IGetTasksAction
  >
> = () => {
  return async (dispatch: Dispatch) => {
    const gettingPeopleAction: IGettingPeopleAction = {
      type: TodoActionTypes.GET_TASKS,
    };
    dispatch(gettingPeopleAction);
    const people = await getPeopleFromApi();
    const gotPeopleAction: IGotPeopleAction = {
      people,
      type: 'GotPeople',
    };
    return dispatch(gotPeopleAction);
  };
};*/
