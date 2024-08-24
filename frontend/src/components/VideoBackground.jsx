import React from 'react'

import { useSelector } from 'react-redux'

function VideoBackground() {

  return (
    <div className='absolute h-screen w-screen aspect-video ' >
    <iframe 
      className="h-screen w-screen" 
      src="https://www.youtube.com/embed/hebWYacbdvc?&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=hebWYacbdvc" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
    </iframe>
    <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>

   
    </div>
  )
}

export default VideoBackground
