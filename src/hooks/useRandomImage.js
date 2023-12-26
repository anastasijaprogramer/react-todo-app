import {useState,  useCallback} from 'react';


const useRandomImage = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const apiUrl = "https://dog.ceo/api/breeds/image/random";
    
    const getRandomImage =  useCallback(async () => {
      setIsLoading(true);
      setError(false);
      
      try {
         let response =  await fetch(apiUrl);
         let data = await response.json();
         setImageUrl(data.message);
      } catch (error) {
         console.log(error);
         setError(true);
      }
      finally{
            setIsLoading(false);
      }
       
     }, [])
   

      return [imageUrl, isLoading, error, getRandomImage]
}

export default useRandomImage;
