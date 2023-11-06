import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ toDos, onDeleteTodo, onUpdateToDo, onCompleteToDo }) =>
{

    return (
        <ul className='result-list'>
            {toDos.map(todo => (
                <TodoItem key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onUpdateToDo={onUpdateToDo}
                    onCompleteToDo={onCompleteToDo} />
            ))}
        </ul>
    );
}

export default TodoList;
