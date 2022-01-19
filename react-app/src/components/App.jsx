import React, { Fragment, useState } from 'react';
import { TodoList } from './TodoList';

export function App() {
    const [todos, setTodos] = useState([
        {nombre: 'Hacer la compra'}, 
        {nombre: 'Hacer la cena'}, 
        {nombre: 'Hacer la limpieza'},
        {nombre: 'Hacer la cama'},
    ]);
    const [data, setData] = useState('');
    
    function getData(val) {
        setData(val.target.value);
    }

    return (
        <Fragment>
            <h2>Lista</h2>
            <TodoList todos={todos} />
            <input type="text" placeholder='nombre tarea' onChange={getData}/>
            <button onClick = {() => setTodos([...todos, {nombre: data}])}>
                Agregar Tarea
            </button>
        </Fragment>
    );
}
