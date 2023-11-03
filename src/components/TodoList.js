import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ toDos }) =>
{

    return (
        <ul className='result-list'>
            {toDos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}



        </ul>
    );
}

export default TodoList;
