import React from 'react'
import { useForm } from './useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }
    

    return (
        <>
        <h4> Agregar tarea </h4>
        <hr/>

        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                name='description'
                className='form-control'
                placeholder='¿Tarea?'
                autoComplete='off'
                value={description}
                onChange={ handleInputChange }
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1 w-100'
            >
                Agregar
            </button>
        </form>
        </>
    )
    }