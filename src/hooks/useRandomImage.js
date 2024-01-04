import { useState, useEffect } from 'react';

const useRandomImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
   fetchData();
 }, []); 
 
  const fetchData = async () => {
    setIsLoading(true);

   try {

      const res = await fetch(url);
      if(!res.ok){
         throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const data = await res.json();
      setImageUrl(data.message);
   
      } catch (error) {
         setError(error.message);
      } 
      finally{
         setIsLoading(false)
      }

 };

  return { imageUrl, isLoading, error, fetchData };
};

export default useRandomImage;
