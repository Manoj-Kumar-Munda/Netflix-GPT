import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies);
  
  return (
    <div className=" py-4  space-y-8 bg-slate-900">
      <div className="relative -mt-48">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
