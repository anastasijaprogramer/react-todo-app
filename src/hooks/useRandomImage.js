import { useState, useCallback } from 'react';
import fallbackimage from '../assets/images/fallback-image.jpg';

const useRandomImage = () =>
{
   const [imageUrl, setImageUrl] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   const url = "https://dog.ceo/api/breeds/image/random";

   const fetchData = useCallback(async () =>
   {
      setIsLoading(true);
      try {
         const res = await fetch(url);
         if (!res.ok) {
            setImageUrl(fallbackimage);
            setError(true);
            throw new Error(`Failed to fetch data: ${res.status}`)
         }
         const data = await res.json();
         setImageUrl(data.message);
      } catch (error) {
         console.error('Catched error:', error);
         setImageUrl(fallbackimage);
         setError(error);
      }
      finally {
         setIsLoading(false);
      }
   }, [url]);

   const refetch = () =>
   {
      fetchData();
   };

   return { imageUrl, isLoading, error, refetch };
};

export default useRandomImage;
