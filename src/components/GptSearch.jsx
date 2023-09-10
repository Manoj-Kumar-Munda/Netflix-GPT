import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GptSearch = () => {
  return (
    <div className='pt-32 bg-hero-bg min-h-screen relative'>
      <div  className='absolute bg-layer inset-0'></div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GptSearch