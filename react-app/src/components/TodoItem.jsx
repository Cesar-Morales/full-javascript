import React from 'react';

export function TodoItem( {todo} ) {
    const {nombre, id} = todo;
    return (
        <li>
            {nombre} ({id})
        </li>
)};
