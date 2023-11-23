import React, { useState, useEffect, useRef } from 'react';
import "./todoItem.scss";

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, onCompleteTodo }) =>
{
    const [isChecked, setIsChecked] = useState(todo.isCompleted);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedToDo, setUpdatedToDo] = useState(todo.text);
    const [isOverLimit, setIsOverLimit] = useState(null);


    useEffect(() =>
    {
        onCompleteTodo(todo.id, isChecked);
    }, [isChecked]);

    const handleChecked = () =>
    {
        setIsChecked(prev => !prev);
    }

    const handleDelete = () =>
    {
        onDeleteTodo(todo.id);
    }

    const handleUpdate = () =>
    {
        //if input value is not empty, update
        if (!isOverLimit && updatedToDo.trim()) {
            setIsEditing(!isEditing);
            onUpdateTodo(todo.id, updatedToDo);
        }

    }

    const handleInputValidation = (inputValue) =>
    {
        setUpdatedToDo(inputValue);
        inputValue.length <= 20 ? setIsOverLimit(false) : setIsOverLimit(true);
    }

    return (
        <li className='list-item'>

            <input type="checkbox" onChange={handleChecked} checked={isChecked} />

            {isEditing ?
                (<input
                    value={updatedToDo}
                    onChange={(e) => handleInputValidation(e.target.value)}
                    className={`${isChecked ? "checked label" : 'label'}
                                ${isOverLimit ? "error" : ''}`}
                />)
                :
                (<label className={isChecked ? "checked label" : 'label'}>{updatedToDo}</label>)
            }
            {isOverLimit && <span className='error-field'>Text must not exceed 20 characters</span>}


            <div className='button-wrapper'>
                <button onClick={handleUpdate}
                    type="button" className="btn btn--edit" >
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button onClick={handleDelete}
                    type="button" className="btn btn--delete">
                    Delete
                </button>
            </div>
        </li >
    );
}

export default TodoItem;
