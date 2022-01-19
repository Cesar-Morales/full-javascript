import React, {Fragment} from "react";
import { TodoItem } from "./TodoItem";

export function TodoList( {todos} ) {
    return (
        <Fragment>
            <ul>
                {todos.map(todo => (
                    <TodoItem todo={todo} />
                ))}
            </ul>
        </Fragment>
    );
}
