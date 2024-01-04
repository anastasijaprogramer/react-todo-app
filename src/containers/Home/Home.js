import React, { useContext, useEffect, useState} from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import { TodosContext } from "../../contexts/TodosContext";
import useRandomImage from '../../hooks/useRandomImage';

const Home = () =>
{
    const { getTodos, setTodos} = useContext(TodosContext);
    const { imageUrl, isLoading, error, fetchData} = useRandomImage();
    const [id, setId] = useState(null);
    const key = 'todos';

    //get value from local storage
    const todos = getTodos(key);

    useEffect(() => {
        if (todos.length > 0) {
            setTodos(todos.map((todo) =>
              todo.id === id ?  { ...todo, isLoading: isLoading } : todo), key
          );
        }
      }, [isLoading, id]);


    // handle add todo
    const handleAdd =  async (newTodoTxt) => {
        
        if (todos.length >= 10) {
            alert('The maximum number of todos is reached')
            return;
        }
        
        const newId = Date.now();
        setId(newId);
        
        
        // Fetch the random image
        fetchData();
        
        // Add the new todo to the list
        setTodos([
            ...todos,
            {
            id: newId,
            text: newTodoTxt,
            isCompleted: false,
            image: { imageUrl: imageUrl, error: error },
            isLoading: true
            }
        ], key);
        
    }

  
    // handle delete todo
    const handleDelete = (id) =>
    {
        setTodos(todos.filter(todo => todo.id !== id), key);
    }

    // handle update todo
    const handleUpdate = (id, newText) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText} : todo), key);
    }

    // handle complete todo
    const handleComplete = (id, isCompleted) =>
    {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: isCompleted } : todo), key);
    }


    return (
        <>
            <h1>Home</h1>
            <AddTodo onAddTodo={handleAdd}
                    />
            <TodoList 
                todos={todos}
                onDeleteTodo={handleDelete}
                onUpdateTodo={handleUpdate}
                onCompleteTodo={handleComplete} 
                 />
                
        </>
    );
}

export default Home;
