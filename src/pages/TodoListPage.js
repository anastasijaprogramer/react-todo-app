import React from 'react';

const TodoListPage = () =>
{
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    return (
        <div>
            <h1>Todo List</h1>
            <ul className="result-list">
                {savedTodos.map((todo) =>
                {
                    return (
                        <li className='list-item'
                            key={todo.id}>
                            <label className='label'>{todo.text}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoListPage;
