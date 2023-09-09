import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/links";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const trailer =
      json.results.find((video) => video.type === "Trailer") || json.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;