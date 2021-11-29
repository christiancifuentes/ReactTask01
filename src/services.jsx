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

export const LOG_OUT = "http://localhost:3000/logout";
export const LOGIN  = "http://localhost:3000/login";

export const COURSE = "http://localhost:3000/courses/";
export const COURSE_ALL = "http://localhost:3000/courses/all";
export const COURSE_ADD = "http://localhost:3000/courses/add";

export const USER_ME = 'http://localhost:3000/users/me';

export const AUTHORS_ALL = 'http://localhost:3000/authors/all'
export const AUTHORS_ADD = 'http://localhost:3000/authors/add'