import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) =>
{
    const [todos, setTodos] = useLocalStorage('todos', []);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    )
}