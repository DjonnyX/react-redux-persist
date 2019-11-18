import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { TodoEditor, TodoList } from "./components";

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
                        <TodoList />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}