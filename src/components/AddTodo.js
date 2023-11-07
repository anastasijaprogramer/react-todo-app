import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) =>
{
    const [newTodo, setnewTodo] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        //prevent blank spaces
        if (!newTodo.trim()) return;

        //send new todo 
        onAddTodo(newTodo);
        setnewTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                maxLength="20"
                className='add-todo-input'
                placeholder='add todo'
                value={newTodo}
                // set newTodo to updated input value
                onChange={(e) => setnewTodo(e.target.value)}
            />
            <button type="submit" className='btn btn--submit'>
                Add
            </button>
        </form>
    );
}

export default AddTodo;
