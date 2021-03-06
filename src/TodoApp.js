import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css';


//Cuando se llama al init retorna el initial state
const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos]);

    const handleDelete = (todoId) => {

        //Crear la accion para borrar
        const deleteAction = {
            type: 'delete',
            payload: todoId
            
        }
        //Dispatch
        dispatch(deleteAction)
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    };

    const handleAddTodo = (newTodo) => {
       
        dispatch ({
            type: 'add',
            payload: newTodo
        })
    }


    return (
        <div>
            <h1> Tareas App ({todos.length}) </h1>
            <hr/>

           <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos} 
                        handleToggle={handleToggle} 
                        handleDelete={handleDelete}
                    />
                </div>    

                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />

                </div>         
            </div> 
        </div>
    )
}
