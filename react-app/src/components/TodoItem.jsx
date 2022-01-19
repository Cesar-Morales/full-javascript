import React from 'react';

export function TodoItem( {todo} ) {
    const {nombre} = todo;
    return (
        <li>
            {nombre}
        </li>
)};
