import React, { useState, useEffect } from "react";
// const {REACT_APP_MOVIE_KEY} =process.env;
// setting the api link
export const API_URL =`https://www.omdbapi.com/?apikey=d1decf93`;


const useFetch = (Params) => {
  console.log("input params",Params)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);
  const [isDataAvailable,setIsDataAvailable]=useState(null);

  const getMovieData = async (url) => {
    // promissed used 
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log("movies data",data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
        setIsDataAvailable(true)
      } else {
        setIsError({ show: "true", msg: data.Error });
        setIsDataAvailable(false);
        setIsLoading(false)
        setMovie(null)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    let timeOutId = setTimeout(() => {
      getMovieData(`${API_URL}&s=${Params}`);
    }, 1000);
    console.log("set url data");

    // clenup function for sideEffect
    return () => {
      clearTimeout(timeOutId);
      console.log("clear Timeout");
    };
  }, [Params]);

  

  return { isLoading, isError, movie,isDataAvailable };
};

export default useFetch;