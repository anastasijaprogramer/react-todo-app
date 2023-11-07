import React, { useState } from 'react';

const TodoListPage = () =>
{
    const [todos, setTodos] = useState(() =>
    {
        try {
            const savedTodos = localStorage.getItem('todos');
            const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
            return parsedTodos.slice(0, 10); // Ensures only the first 10 items are set
        } catch (error) {
            console.error("Failed to load todos: ", error);
            return [];
        }
    });

    return (
        <div>
            <h1>Todo List</h1>
            <ul className="result-list">
                {todos.map((todo) =>
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
