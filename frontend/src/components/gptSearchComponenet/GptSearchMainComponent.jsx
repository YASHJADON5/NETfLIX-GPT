import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
// import Background from '../Background'


function GptSearchMainComponent() {
  // console.log("mounted")
  return (
    
    <div className=' rounded-md absolute z-30 w-full h-full md:h-5/6 md:w-5/6  left-1/2 transform -translate-x-1/2 top-24'>
      <div className='absolute bg-black inset-0 -z-10 ' >
        <img
          className='h-full w-full object-cover opacity-50 rounded-lg' 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="bg-image"
        />
      </div>
     
            <GptSearchBar />     
            <GptMovieSuggestions />

     
    </div>
    
  )
}

export default GptSearchMainComponent
