import React, { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const Home = () =>
{
    //get todos list
    const [todos, setTodos] = useState(() =>
    {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    //save todos to local storage on change
    useEffect(() =>
    {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    //handle add todo
    const addTodo = (newTodo) =>
    {
        setTodos([...todos, { id: Date.now(), text: newTodo, isCompleted: false }]);
    }

    //handle delete todo
    const deleteTodo = (id) =>
    {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    //handle update todo
    const updateTodo = (id, newText) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
    }

    //handle update todo
    const completeTodo = (id, isCompleted) =>
    {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, isCompleted: isCompleted } : todo);

        //a=true; b=false; which translate to 1-0=1 from boolean values
        //if the result is positive 'b' comes before 'a'
        const sortedTodos = updatedTodos.sort((a, b) => a.isCompleted - b.isCompleted);
        setTodos(sortedTodos);
    }

    return (
        <>
            <AddTodo onAddTodo={addTodo} />

            <TodoList todos={todos}
                onDeleteTodo={deleteTodo}
                onUpdateTodo={updateTodo}
                onCompleteTodo={completeTodo} />
        </>
    );
}

export default Home;
