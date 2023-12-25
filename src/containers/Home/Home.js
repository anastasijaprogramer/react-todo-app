import React, { useContext } from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import { TodosContext } from "../../contexts/TodosContext";
import useRandomImage from '../../hooks/useRandomImage';

import styles from "./home.module.scss";

const Home = () =>
{
    const { getTodos, setTodos} = useContext(TodosContext);
    const {imageUrl, isLoading, error, getRandomImage} = useRandomImage();

    const key = 'todos';
    
    //get value from local storage
    const todos = getTodos(key);

    // handle add todo
    const handleAdd = (newTodo) =>
    {
        if (todos.length >= 10) {
            alert('The maximum number of todos is reached')
            return;
        }

        setTodos([...todos, { id: Date.now(), text: newTodo, isCompleted: false }], key);

        getRandomImage();

    }

    // handle delete todo
    const handleDelete = (id) =>
    {
        setTodos(todos.filter(todo => todo.id !== id), key);
    }

    // handle update todo
    const handleUpdate = (id, newText) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo), key);
    }

    // handle complete todo
    const handleComplete = (id, isCompleted) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: isCompleted } : todo), key);
    }

    return (
        <>
            <h1>Home</h1>
            <AddTodo onAddTodo={handleAdd} />
            {!isLoading && !error && <img className={styles.img} src={imageUrl.message} alt='img'/>}
            {isLoading && <span>Loading...</span>}
            {error && <span>Error occured while fetching an image</span>}

            <TodoList todos={todos}
                onDeleteTodo={handleDelete}
                onUpdateTodo={handleUpdate}
                onCompleteTodo={handleComplete} />
        </>
    );
}

export default Home;
