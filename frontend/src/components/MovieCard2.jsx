import React from 'react'

function MovieCard({imageSource,title}) {
  // if(!imageSource) return;


 
  
  return (
    <div>
       <div className='p-3 text-white h-16 text-xl  font-sans'> {title}</div> 
    <div className='w-48 pr-4  '>
        <img className='rounded-md' src={imageSource}  alt="Loading" />
      
    </div>
    </div>
  )
}

export default MovieCard
