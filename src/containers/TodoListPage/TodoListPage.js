import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';


const TodoListPage = () =>
{
    const { getTodos } = useContext(TodosContext);
    const todos = getTodos();

    return (
        <div>
            <h1>Todo List</h1>
            <ul className="result-list">
                {todos.map((todo) =>
                {
                    return (
                        <li className='list-item'
                            key={todo.id}>
                            <label className={todo.isCompleted ? "checked label" : 'label'}>{todo.text}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoListPage;
