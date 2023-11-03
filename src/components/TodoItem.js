import React, { useState } from 'react';

const TodoItem = ({ todo }) =>
{
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = () =>
    {
        console.log(todo.id);
        setIsChecked(!isChecked);
    }

    return (
        <li className='list-item'>
            <input type="checkbox" onClick={handleChecked} />
            <label className={isChecked ? "checked label" : 'label'}>
                {todo.text}
            </label>
            <button type="button" className="btn btn--edit">
                Edit
            </button>
            <button type="button" className="btn btn--delete">
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
