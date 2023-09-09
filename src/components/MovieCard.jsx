import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/links'

const MovieCard = ({poster}) => {
  return (
    

        <div className='basis-64 flex-shrink-0 transition-transform ease-linear hover:scale-110'>
            <img src={MOVIE_POSTER_URL+poster} alt="poster" className='w-full object-cover'/>
        </div>
    
  )
}

export default MovieCard