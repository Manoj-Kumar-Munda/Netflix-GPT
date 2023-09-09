import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(appStore => appStore.movies);
  console.log(movies);
  return (
    <div className='px-4 py-4 mt-4 space-y-8'>
      <div className='relative -mt-48'>


      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Most Wacthed"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer