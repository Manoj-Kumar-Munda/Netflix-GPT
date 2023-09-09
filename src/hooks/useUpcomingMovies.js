import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/links";

import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch(
        UPCOMING_MOVIES_API,
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      
      
      dispatch(addUpcomingMovies(json?.results))
    };
  
    useEffect(() => {
      getUpcomingMovies();
    },[])


}

export default useUpcomingMovies;