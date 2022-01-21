import React, { Fragment, useState, useRef } from 'react';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export function App() {
    const [todos, setTodos] = useState([
        {id: uuidv4(), nombre: 'Hacer la compra'}, 
        {id: uuidv4(), nombre: 'Hacer la cena'}, 
        {id: uuidv4(), nombre: 'Hacer la limpieza'},
        {id: uuidv4(), nombre: 'Hacer la cama'},
    ]);

    const inputRef = useRef();

    const handleClickTodoAdd = () => {
        const task = inputRef.current.value;
        if (task === '') return;

        setTodos( prevTodos => { 
            return [...prevTodos, {id: uuidv4(), nombre: task}]
        });
        inputRef.current.value = '';
    };

    return (
        <Fragment>
            <h2>Lista</h2>
            <TodoList todos={todos} />
            <input ref={inputRef} type="text" placeholder='nombre tarea'/>
            <button onClick = {handleClickTodoAdd}>
                Agregar Tarea
            </button>
        </Fragment>
    );
}
