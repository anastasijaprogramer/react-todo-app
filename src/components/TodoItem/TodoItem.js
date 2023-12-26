import React, { useState, useEffect } from 'react';
import useValidator from '../../hooks/useValidator';
import styles from './TodoItem.module.scss';
import btnStyles from '../../styles/btn.module.scss';
import fallbackImage from '../../assets/images/fallback-image.jpg';
import useRandomImage from '../../hooks/useRandomImage';

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, onCompleteTodo }) =>
{
    const [isChecked, setIsChecked] = useState(todo.isCompleted);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedToDo, setUpdatedToDo] = useState(todo.text);
    const [getValidation, setValidation] = useValidator();
    const [imageUrl, isLoading, error, getRandomImage] = useRandomImage();
    const validationError = getValidation();

     useEffect(() => {
        getRandomImage();
     }, []); 

    // useEffect(() => {
    //     if (!isLoading && imageUrl) {
    //         // Update the todo item with the new image URL
    //         onUpdateTodo(todo.id, { ...todo, image: { imageUrl, isLoading: false, error: null } });
    //     }
    // }, [isLoading,  error, ]);

    useEffect(() =>
    {
        onCompleteTodo(todo.id, isChecked);
    }, [todo.id, isChecked]);


    const handleChecked = () =>
    {
        setIsChecked(prev => !prev);
    }

    const handleDelete = () =>
    {
        onDeleteTodo(todo.id);
    }

    const handleUpdate = () =>
    {
        //checks if user clicked while error is loading and then check for error 
        if (validationError.length === 0) {
            setIsEditing(!isEditing);
            onUpdateTodo(todo.id, updatedToDo);
        }
    }

    const validationRules = [
        value => value.trim() === "" ? "Text must not be empty" : null,
        value => value.length > 20 ? "Text must not exceed 20 characters" : null
    ];

    const handleInputValidation = (inputValue) =>
    {
        setUpdatedToDo(inputValue);
        setValidation(inputValue, validationRules);
    }
 
    return (
        <li className={styles.listItem}>

            <input type="checkbox" onChange={handleChecked} checked={isChecked} />
            
            {imageUrl && <img className={styles.image} src={imageUrl} 
            alt="Todo" onError={(e) => e.target.src = fallbackImage} />}
            {isLoading && <span>Loading image...</span>}
            {error && <span>Error loading image</span>} 

             {/* {todo.image && <img className={styles.image} src={todo.image.imageUrl} 
            alt="Todo" onError={(e) => e.target.src = fallbackImage} />}
            {isLoading && <span>Loading image...</span>}
            {error && <span>Error loading image</span>}  */}

            {isEditing ?
                (<input
                    value={updatedToDo}
                    onChange={(e) => handleInputValidation(e.target.value)}
                    className={`${isChecked ? styles.checked : ''}
                                ${validationError.length ? styles.error : ''}
                                ${isEditing ? styles.editing : ""} 
                                ${styles.label}`}
                />)
                :
                (<label className={`${styles.label} ${isChecked ? styles.checked : ''}`}>
                    {updatedToDo}
                </label>)
            }
            {validationError && <span className={styles.errorField}>{validationError}</span>}


            <div className={styles.buttonWrapper}>
                <button onClick={handleUpdate}
                    type="button" className={btnStyles.btn} >
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button onClick={handleDelete}
                    type="button" className={btnStyles.btn}>
                    Delete
                </button>
            </div>
        </li >
    );
}

export default TodoItem;
