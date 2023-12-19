function useLocalStorage()
{
    // Function to get a value from local storage
    const getLocalStorage = (key) =>
    {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : [];
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return [];
        }

    };

    // Function to set a value in local storage
    const setLocalStorage = (key, value) =>
    {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }


    };

    return [getLocalStorage, setLocalStorage];
}

export default useLocalStorage;
