import { createSelector } from "reselect";
import { IStoreState } from "src/store/root";
import { FilterPriorityTypes } from "../filters";

const getSelectedFilter = (state: IStoreState) =>
	state.todo.filter.selectedFilter;
const getTasks = (state: IStoreState) => state.todo.list.tasks;

export const getVisibleTasks = createSelector(
	[getSelectedFilter, getTasks],
	(filter, tasks) => {
		switch (filter) {
			case FilterPriorityTypes.ALL:
				return tasks;
			case FilterPriorityTypes.SIMPLE:
			case FilterPriorityTypes.MOST_IMPORTANT:
			case FilterPriorityTypes.IMPORTANT:
				return tasks.filter(task => task.priority === filter);
		}
	}
);
