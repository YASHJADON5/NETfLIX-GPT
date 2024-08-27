import React from 'react'
import { useSelector } from 'react-redux'
import infoicon from '/infoicon.svg'

function VideoTitle() {
  // const movies= useSelector((store)=>store.movies?.popularMovies)
  // if(!movies) return;
  // const mainMovie= movies[0];
  // console.log( mainMovie)
  // console.log(mainMovie.overview);
  return (
    <div className='relative z-20 h-72 w-80 overflow-hidden  md:top-72 md:left-40  hidden sm:hidded md:block'>
      <h1 className='text-white font-sans font-semibold text-lg md:text-4xl'>The Flash</h1>
    <h1 className='text-white font-sans font-semibold text-xs md:text-lg leading-6'>The Flash (2023) follows Barry Allen as he alters the timeline to save his mother, creating a dangerous alternate reality. He teams up with Batman and Supergirl to fix the chaos and face General Zod.</h1>
    <div className='flex mt-4'>
                 
   
     <button className=' bg-[#FFFFFF] hover:bg-[#a9a9a9] transition duration-200 ease-in-out
     font-sans font-semibold text-xl rounded-md py-1  px-8'>Play</button>

     <button className='flex bg-gray-500 items-center  ml-3 rounded-md px-4 py-1 bg-opacity-35 transition duration-300 ease-in-out hover:bg-gray-700 hover:bg-opacity-35 '>
  <img className=' h-8 w-8 text-white' src={infoicon} alt="Info Icon" />
  <span className=' text-white   ml-2'>More Info</span>
</button>

    </div>
    

    
      
    </div>
  )
}

export default VideoTitle
