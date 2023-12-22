import { useState } from 'react';

function useLocalStorage(key, initialValue)
{
    // Initialize the state
    const [storedValue, setStoredValue] = useState(() =>
    {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setLocalStorage = (value) =>
    {
        try {
            //save state
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    const getLocalStorage = () => storedValue;

    return [getLocalStorage, setLocalStorage];
}

export default useLocalStorage;
