import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodosProvider } from './contexts/TodosContext';
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Home from "./containers/Home/Home";
import TodoListPage from "./containers/TodoListPage/TodoListPage";
import style from './App.module.scss';

function App()
{

  return (
    <TodosProvider >
      <Router>
        <div className={style.app}>
          <NavigationMenu />
          <div className={style.appWrapper}>
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
