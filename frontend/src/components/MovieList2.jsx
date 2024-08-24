import React from 'react'
import MovieCard from './MovieCard'

function Movielist2({title,movies}) {
    // console.log(movies);
 
  return (
    <div className='   '>
    <h1 className='  text-white text-lg md:text-3xl  md:py-4 pl-4'>{title}</h1>
    <div className='flex overflow-x-scroll  no-scrollbar p-4  '>
        <div className='flex gap-3'>
            {movies.map((movie)=>{
               return <MovieCard  key={movie._id} imageSource={movie.image} />
            })}
        </div>
      
    </div>
    </div>
  )
}

export default Movielist2
