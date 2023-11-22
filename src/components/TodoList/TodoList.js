import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import "./todoList.scss";

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo, onCompleteTodo }) =>
{
    // a=true; b=false; which translate to 1-0=1 from boolean values
    // if the result is positive 'b' comes before 'a'

    return (
        <ul className='result-list'>
            {todos
                .sort((a, b) => a.isCompleted - b.isCompleted)
                .map(todo => (
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
