import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) =>
{
    const [getTodos, setTodos] = useLocalStorage('todos', []);

    return (
        <TodosContext.Provider value={{ getTodos, setTodos }}>
            {children}
        </TodosContext.Provider>
    )
}