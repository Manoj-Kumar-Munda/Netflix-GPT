import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pl-4">
      <h1 className=" text-white font-bold text-xl">{title}</h1>
      <div className="overflow-y-hidden overflow-x-scroll border-red-500 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="my-4 flex gap-3">
          {!movies ? (
            <h1>Loading</h1>
          ) : (
            movies.map((movie) => (
              <MovieCard key={movie?.id} poster={movie?.poster_path} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
