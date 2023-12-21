import { useState } from 'react';

function useLocalStorage(key, initialValue)
{
    // Initialize the state
    const [storedValue, setStoredValue] = useState(() =>
    {
        try {
            const item = window.localStorage.getItem(key);
            // Parse stored json or, if none, return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error, return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // A wrapper function to update both state and local storage
    const setLocalStorage = (value) =>
    {
        try {
            // Allow value to be a function so we have the same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setLocalStorage];
}

export default useLocalStorage;
