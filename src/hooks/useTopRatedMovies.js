import { useDispatch } from "react-redux";
import {  TMDB_API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/links";

import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(
        TOP_RATED_MOVIES_API,
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      
      
      dispatch(addTopRatedMovies(json?.results))
    };
  
    useEffect(() => {
      getTopRatedMovies();
    },[])


}

export default useTopRatedMovies;