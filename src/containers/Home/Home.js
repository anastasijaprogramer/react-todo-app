import React, { useContext } from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import { TodosContext } from "../../contexts/TodosContext";
import "./home.scss";

const Home = () =>
{
    const { getTodos, setTodos } = useContext(TodosContext);
    const todos = getTodos();

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

    // handle complete todo
    const handleComplete = (id, isCompleted) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: isCompleted } : todo));
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
