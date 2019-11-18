import * as React from "react";
import { ITaskItemModel } from "src/models";

interface ITodoListProps {
	tasks: ITaskItemModel[];
}

export default class TodoList extends React.Component<ITodoListProps, {}> {
	render() {
		const { tasks } = this.props;

		return <div>{tasks.map(task => {
            
        })}</div>;
	}
}
