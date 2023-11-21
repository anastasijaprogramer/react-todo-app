import React from 'react';
import { TodosProvider } from './contexts/TodosContext';
import Router from "./router/Router";
import './App.scss';

function App()
{

  return (
    <TodosProvider >
      <Router></Router>
    </TodosProvider>
  )

}


export default App;
