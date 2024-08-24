import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import BrowseHeader from './BrowseHeader'
import { useSelector } from 'react-redux'
import GptSearchMainComponent from './gptSearchComponenet/GptSearchMainComponent'




function MainContainer() {
  const selector= useSelector((store)=>store.gpt.showGptSearch)
  return (
    <div className='relative h-screen w-full bg-gradient-to-b from-black to black'>
        {selector ?<GptSearchMainComponent /> : null}
        <BrowseHeader/>
        <VideoBackground />
        <VideoTitle/>
        

      
    </div>
  )
}

export default MainContainer
