import { useDispatch } from "react-redux";
import { POPULAR_MOVIES_API, TMDB_API_OPTIONS } from "../utils/links";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(
        POPULAR_MOVIES_API,
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      
      
      dispatch(addPopularMovies(json?.results))
    };
  
    useEffect(() => {
      getPopularMovies();
    },[])


}

export default usePopularMovies;