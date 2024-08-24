import React from 'react'

function MovieCard({imageSource}) {


 
  
  return (
    <div className='w-48 pr-4  '>
        <img className='rounded-md' src={imageSource}  alt="" />
      
    </div>
  )
}

export default MovieCard
