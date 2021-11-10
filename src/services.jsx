import {useState, useEffect} from 'react';

export const useFetch = (url) =>{
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const getProducts = async () =>{
      const response = await fetch(url);
      const results = await response.json();
      if(results.result){
        setResults(results.result);
      }else{
        setResults(results);
      }
      setLoading(false);
  };

  useEffect(() =>{
    getProducts();
  },[url]);
  return {loading,results};
};