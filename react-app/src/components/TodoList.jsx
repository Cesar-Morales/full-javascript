import React, {Fragment} from "react";
import { TodoItem } from "./TodoItem";

export function TodoList( {todos} ) {
    return (
        <Fragment>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </Fragment>
    );
}
