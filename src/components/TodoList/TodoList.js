import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import "./todoList.scss";

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo, onCompleteTodo }) =>
{
    return (
        <ul className='result-list'>
            {todos.map(todo => (
                <TodoItem key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onUpdateTodo={onUpdateTodo}
                    onCompleteTodo={onCompleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;
