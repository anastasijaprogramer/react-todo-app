import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from "./todoList.module.scss";

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo, onCompleteTodo }) =>
{

    return (
        <ul className={styles.resultList}>
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
