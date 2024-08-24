import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../../utils/langsSlice';
import lang from '../../utils/constants';


function LangSelector() {
    console.log(lang[0].id);
    const dispatch= useDispatch();
    const changeLang=(e)=>{
     
        dispatch(changeLanguage(e.target.value));
    }
  return (
    <div className=''>
        <select  onChange={changeLang} 
        className='md:px-2 md:h-12 md:w-24 text-white h-8 w-20 mr-2 bg-sky-600 hover:bg-sky-700 transition ease-in-out duration-300 rounded-md' name="" id="">
            {lang.map((lang)=>{
                return(
                    <option key={lang.id} value={lang.language}>{lang.language}</option>
                )
            })}
        </select>
      
    </div>
  )
}

export default LangSelector
