import { useState } from 'react';

let validationTimeout;

function useValidator()
{
    const [error, setError] = useState([]);

    // Set validation
    const setValidation = (value, rules) =>
    {
        // validation is loading 
        setError(false);
        clearTimeout(validationTimeout);

        validationTimeout = setTimeout(() =>
        {
            const fieldErrors = rules.map(rule => rule(value)).filter(error => error)

            setError(fieldErrors);

        }, 1000);

    };

    // Get validation errors
    const getValidation = () => error;

    return [getValidation, setValidation];
}

export default useValidator;
