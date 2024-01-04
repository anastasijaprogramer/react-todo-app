import { useState } from 'react';

function useLocalStorage() {
    const [storedValue, setStoredValue] = useState([]);

    const getLocalStorage = (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return [];
        }
    };

    const setLocalStorage = (value, key) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
           // console.log('store', value)
        } catch (error) {
            console.error(`Error writing localStorage key "${key}":`, error);
        }
    };

    return [getLocalStorage, setLocalStorage];
}

export default useLocalStorage;
