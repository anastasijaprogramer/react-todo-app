import React, { useContext } from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import { TodosContext } from "../../contexts/TodosContext";
import useRandomImage from '../../hooks/useRandomImage';


const Home = () =>
{
    const { getTodos, setTodos} = useContext(TodosContext);
    const [imageUrl, isLoading, error, getRandomImage] = useRandomImage();

    const key = 'todos';
    
    //get value from local storage
    const todos = getTodos(key);

    // handle add todo
    const handleAdd = async (newTodo) =>
    {
        if (todos.length >= 10) {
            alert('The maximum number of todos is reached')
            return;
        }
        
        try {
            await getRandomImage(); //wait for image to be loaded

            if(!error && !isLoading){
                console.log(isLoading, error, imageUrl)
                setTodos([...todos, { id: Date.now(), text: newTodo, isCompleted: false, image: imageUrl}], key);
            }
            
        } catch (error) {
            console.error("Error fetching image: ", error);
        }
     
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
            <TodoList todos={todos}
                onDeleteTodo={handleDelete}
                onUpdateTodo={handleUpdate}
                onCompleteTodo={handleComplete} 
                />
        </>
    );
}

export default Home;
