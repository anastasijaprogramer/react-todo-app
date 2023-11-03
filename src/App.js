import './App.css';
import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App(props)
{
  //initalize array of todos
  const [toDos, settoDos] = useState([]);

  //handle add todo
  const addToDo = (newTodo) =>
  {
    settoDos([...toDos, { id: Date.now(), text: newTodo }]);
  }

  return (
    <div className="app">
      <div className='app-wrapper'>
        <AddTodo onAddToDo={addToDo} />

        <TodoList toDos={toDos} />

      </div>

    </div>
  );
}


export default App;
