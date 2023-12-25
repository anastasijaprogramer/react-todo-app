import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';
import todoListStyles from '../../components/TodoList/todoList.module.scss';
import todoItemStyles from '../../components/TodoItem/TodoItem.module.scss';

const TodoListPage = () =>
{
    const { getTodos } = useContext(TodosContext);
    const key = 'todos';

    //get value from local storage
    const todos = getTodos(key);

    return (
        <div>
            <h1>Todo List</h1>
            <ul className={todoListStyles.resultList}>
                {todos.map((todo) =>
                {
                    return (
                        <li className={todoItemStyles.listItem}
                            key={todo.id}>
                            <label className={`${todoItemStyles.label} ${todo.isCompleted ? todoItemStyles.checked : ''}`}>{todo.text}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoListPage;
