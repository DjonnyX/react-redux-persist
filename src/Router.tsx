import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { TodoEditor } from "./components";
import VisibleTodoList from "./containers/TodoEditor";

export default function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/">TodoList</Link>
					</li>
					<li>
						<Link to="/editor">TodoEditor</Link>
					</li>
				</ul>

				<Switch>
					<Route path="/editor">
						<TodoEditor />
					</Route>
					<Route path="/">
						<VisibleTodoList />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
