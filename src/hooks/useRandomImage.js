import {useState, useEffect, useCallback} from 'react';
import fallbackImage from '../assets/images/fallback-image.jpg';



const useRandomImage = () => {
    const [imageUrl, setImageUrl] = useState(fallbackImage);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = "https://dog.ceo/api/breeds/image/random";
    

    const getRandomImage =  useCallback(async () => {
       try {
            let response =  await fetch(apiUrl);
            let data = await response.json();

               setImageUrl(data);
           
       } catch (error) {
            console.log(error);
            setError(true);
            setImageUrl(fallbackImage); 
       }
       finally{
          setisLoading(false)
       }
    }, [imageUrl])

   
     return [imageUrl, isLoading, error, getRandomImage]
     
 
}

export default useRandomImage;
