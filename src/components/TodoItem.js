import React, { useState, useEffect } from 'react';

const TodoItem = ({ todo, onDeleteTodo, onUpdateToDo, onCompleteToDo }) =>
{
    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedToDo, setUpdatedToDo] = useState(todo.text);

    useEffect(() =>
    {
        onCompleteToDo(todo.id, isChecked);
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
        onUpdateToDo(todo.id, updatedToDo);
        setIsEditing(!isEditing);
    }

    return (
        <li className='list-item'>
            <input type="checkbox" onClick={handleChecked} />
            {isEditing ?
                (<input value={updatedToDo}
                    onChange={(e) => setUpdatedToDo(e.target.value)}
                    className={isChecked ? "checked label" : 'label'} />)
                :
                (<label className={isChecked ? "checked label" : 'label'}>{updatedToDo}</label>)
            }
            <button onClick={handleUpdate}
                type="button" className="btn btn--edit" >
                {isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={handleDelete}
                type="button" className="btn btn--delete">
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
