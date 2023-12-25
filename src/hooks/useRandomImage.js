import {useState, useEffect, useCallback} from 'react';

const useRandomImage = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiUrl = "https://dog.ceo/api/breeds/image/random";

    const getRandomImage =  useCallback(async () => {
        setisLoading(true)
       try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setImageUrl(data);
            console.log(data)
       } catch (error) {
            console.log(error)
            setError(true)
       }
       finally{
        console.log('finished fetching image')
            setisLoading(false)
       }
    }, [apiUrl])

    return {imageUrl, isLoading, error, getRandomImage}
 
}

export default useRandomImage;
