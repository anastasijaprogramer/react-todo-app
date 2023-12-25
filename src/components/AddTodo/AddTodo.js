import React, { useState, useRef } from 'react';
import styles from "./addTodo.module.scss";
import btnStyles from '../../styles/btn.module.scss'

const AddTodo = ({ onAddTodo }) =>
{
    const [isOverLimit, setIsOverLimit] = useState(null);

    const inputRef = useRef(null);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const inputValue = inputRef.current.value.trim();

        //if input value does not exceed limit and is not empty
        if (!isOverLimit && inputValue) {
            onAddTodo(inputValue);
            inputRef.current.value = '';
        }
        // exceeding 20 characters
        if (isOverLimit) {
            inputRef.current.focus();
        }

    }

    const handleInputValidation = (inputValue) =>
    {
        inputValue.length <= 20 ? setIsOverLimit(false) : setIsOverLimit(true);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef}
                className={`${styles.addTodoInput} ${isOverLimit ? styles.error : ""}`}
                placeholder='add todo'
                onChange={e => handleInputValidation(e.target.value)}
            />
            {isOverLimit && <span className={styles.errorField}>Text must not exceed 20 characters</span>}
            <button type="submit" className={`${btnStyles.btn} ${btnStyles.btnSubmit}`}  >
                Add
            </button>
        </form >
    );
}

export default AddTodo;
