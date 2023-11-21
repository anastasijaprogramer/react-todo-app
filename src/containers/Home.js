import React, { useState, useEffect, createContext, useContext } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { TodosContext } from "../contexts/TodosContext"


const Home = () =>
{
    //const todos = useContext(TodosContext);
    const { todos, setTodos } = useContext(TodosContext);

    // save todos to local storage on change
    useEffect(() =>
    {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    // handle add todo
    const handleAdd = (newTodo) =>
    {
        if (todos.length >= 10) {
            alert('The maximum number of todos is reached')
            return;
        }


        setTodos([...todos, { id: Date.now(), text: newTodo, isCompleted: false }])
    }

    // handle delete todo
    const handleDelete = (id) =>
    {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // handle update todo
    const handleUpdate = (id, newText) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
    }

    // handle update todo
    const handleComplete = (id, isCompleted) =>
    {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, isCompleted: isCompleted } : todo);

        // a=true; b=false; which translate to 1-0=1 from boolean values
        // if the result is positive 'b' comes before 'a'
        const sortedTodos = updatedTodos.sort((a, b) => a.isCompleted - b.isCompleted);
        setTodos(sortedTodos);
    }

    return (
        <>
            <h1>Home</h1>
            <AddTodo onAddTodo={handleAdd} />

            <TodoList todos={todos}
                onDeleteTodo={handleDelete}
                onUpdateTodo={handleUpdate}
                onCompleteTodo={handleComplete} />
        </>
    );
}

export default Home;
