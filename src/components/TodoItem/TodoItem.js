import React, { useState, useEffect } from 'react';
import "./todoItem.scss";

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, onCompleteTodo }) =>
{
    const [isChecked, setIsChecked] = useState(todo.isCompleted);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedToDo, setUpdatedToDo] = useState(todo.text);

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
        onUpdateTodo(todo.id, updatedToDo);
        setIsEditing(!isEditing);
    }

    return (
        <li className='list-item'>

            <input type="checkbox" onChange={handleChecked} checked={isChecked} />
            {isEditing ?
                (<input value={updatedToDo}
                    onChange={(e) => setUpdatedToDo(e.target.value)}
                    className={isChecked ? "checked label" : 'label'}
                    maxLength="20" />)
                :
                (<label className={isChecked ? "checked label" : 'label'}>{updatedToDo}</label>)
            }

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
