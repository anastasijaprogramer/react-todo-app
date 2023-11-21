import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./containers/Home";
import TodoListPage from "./containers/TodoListPage";
import { TodosProvider } from './contexts/TodosContext';
import './App.css';


function App()
{

  return (
    <TodosProvider >
      <Router>
        <div className="app">
          <ul className="route-list">
            <li className='route'>
              <Link to="/">Home</Link>
            </li>
            <li className='route'>
              <Link to="/todos">Todo List</Link>
            </li>
          </ul>
          <div className="app-wrapper">

            <Routes>
              <Route index element={<Home />} />
              <Route path="/todos" element={<TodoListPage />} />
            </Routes>

          </div>
        </div>
      </Router>
    </TodosProvider>

  )

}


export default App;
