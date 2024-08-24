import React from 'react'
import MovieCard from './MovieCard'

function Movielist({title,movies}) {
  if(!movies) {
    console.log("china")
    return
  } 
    //  console.log(title)
  return (
    <div className=' '>
    <h1 className='  text-white text-xl md:text-3xl  pl-4'>{title}</h1>
    <div className='flex overflow-x-scroll  no-scrollbar p-4  '>
        <div className='flex gap-3'>
            {movies.map((movie)=>{
               return <MovieCard key={movie._id} imageSource={movie.poster_path} />
            })}
        </div>
      
    </div>
    </div>
  )
}

export default Movielist
