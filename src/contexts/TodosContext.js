import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) =>
{
    const [todos, setTodos] = useState(() =>
    {
        try {
            const savedTodos = localStorage.getItem('todos');
            const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
            return parsedTodos.slice(0, 10);
        } catch (error) {
            console.error("Failed to load todos: ", error);
            return [];
        }
    });

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    )
}