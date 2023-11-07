import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import TodoListPage from "./pages/TodoListPage";
import './App.css';


function App()
{
  return (
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
  )

}


export default App;
