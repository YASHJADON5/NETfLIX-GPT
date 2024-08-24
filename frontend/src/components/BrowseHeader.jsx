import React from 'react'
import GptSearch from './gptSearchComponenet/GptSearch'
import LangSelector from './gptSearchComponenet/LangSelector'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'




function BrowseHeader() {
  const selector= useSelector((store)=>store.gpt.showGptSearch);
    const Navigate= useNavigate();
    function handleSignout(){

        localStorage.removeItem("Netflix-token")
        
        Navigate('/')
    
      }

  return (
    <nav className='z-10 absolute flex justify-between w-full bg-gradient-to-b from-black px-3 md:px-8 py-4'>
              <div className='mr-2'>
              <img className='md:h-24 md:w-56 h-16 w-32 -mt-2 md:mt-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
              </div>
              <div className='flex items-center md:pb-8 -mt-3 md:mt-5 '>
                {selector?<LangSelector />:null}
                <GptSearch></GptSearch>            
                {!selector&&<img className='md:h-12 md:w-12 h-8 w-8 rounded-l-sm' src="https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="User-icon" />}
                {!selector&&<button className='bg-[#ED0800] h-8 w-16 md:w-24 md:h-12 text-white  md:text-lg rounded-r-sm  hover:bg-gray-400 transition ease-in-out duration-300' onClick={handleSignout}>Sign out</button>}
              </div>
    
        </nav>
  )
}

export default BrowseHeader
