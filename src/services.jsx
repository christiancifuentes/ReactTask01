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

export const course = "http://localhost:3000/courses/";
export const course_all = "http://localhost:3000/courses/all";
export const course_add = "http://localhost:3000/courses/add";

export const userMe = 'http://localhost:3000/users/me';

export const authors_all = 'http://localhost:3000/authors/all'
export const author_add = 'http://localhost:3000/authors/add'