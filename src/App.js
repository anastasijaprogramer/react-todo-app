import './App.css';
import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App()
{
  //initalize array of todos
  const [toDos, setToDos] = useState([]);

  //handle add todo
  const addToDo = (newTodo) =>
  {
    setToDos([...toDos, { id: Date.now(), text: newTodo, isCompleted: false }]);
  }

  //handle delete todo
  const deleteToDo = (id) =>
  {
    setToDos(toDos.filter(todo => todo.id !== id));
  }

  //handle update todo
  const updateToDo = (id, newText) =>
  {
    setToDos(toDos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  }

  //handle update todo
  const completeToDo = (id, isCompleted) =>
  {
    const updatedToDos = toDos.map(todo => todo.id === id ? { ...todo, isCompleted: isCompleted } : todo);

    //a=true; b=false; which translate to 1-0=1 from boolean values
    //if the result is positive 'b' comes before 'a'
    const sortedToDos = updatedToDos.sort((a, b) => a.isCompleted - b.isCompleted);
    setToDos(sortedToDos);
  }

  return (
    <div className="app">
      <div className='app-wrapper'>
        <AddTodo onAddToDo={addToDo} />

        <TodoList toDos={toDos}
          onDeleteTodo={deleteToDo}
          onUpdateToDo={updateToDo}
          onCompleteToDo={completeToDo} />

      </div>

    </div>
  );
}


export default App;
