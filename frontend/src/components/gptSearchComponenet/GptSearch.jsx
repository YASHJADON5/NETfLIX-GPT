import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { useDispatch, useSelector } from 'react-redux'
import {toggleGptSearchView} from '../../utils/GptSlice'
import searchIcon from '/SearchIcon.svg'




function GptSearch() {
    const dispatch=useDispatch();
    const selector= useSelector((store)=>store.gpt.showGptSearch)

      const onButtonClick=()=>{
        dispatch(toggleGptSearchView());
      }

     
      

  return (
    <div>
      <button 
                onClick={onButtonClick} 
                className={`md:mr-4 text-white rounded-md h-8 md:h-12  hover:bg-red-700 transition ease-in-out duration-300 mr-2 
                    ${selector ? 'w-24 md:w-24 bg-[#ED0800]' : 'w-16 md:w-16 bg-[#5dbea3]'} 
                    text-sm md:text-base text-center`}>
                {selector ? `Home Page` : "N-GPT"}
            </button>
    </div>
  )
}

export default GptSearch
