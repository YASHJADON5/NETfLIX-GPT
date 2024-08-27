import React, { useRef, useState } from 'react';
import SearchIcon from '/SearchIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { languageSelector } from '../../utils/constants';
import client from '../../utils/openAi';
import axios from 'axios'
import {addGptMovieResult , addSearchResults} from '../../utils/GptSlice'
const TMDBAuthorizationTOken = import.meta.env.VITE_TMDB_AUTHORIZATIO_TOKEN

function GptSearchBar() {
  const dispatch= useDispatch()
  const[loading,setLoading]=useState(false);
  

  const [error, setError] = useState(null); 
  const inputData = useRef(null);
  const selector = useSelector((store) => store.lang.language);
  
  const searchMovieTmdb=async(movie)=>{
    // console.log("requested;")
   const response= await axios.get("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",{
    headers:{
      accept: 'application/json',
      Authorization: TMDBAuthorizationTOken

    }
  }
  
);
  
  return response.data.results

  }

  const handleLogValue = async () => {
    setLoading(true);
    setError(null); 
    if(!inputData.current.value) { 
      setLoading(false) 
      return
    };

    if (inputData.current) {
      // console.log(inputData.current.value);
    }

    const gptQuery = "act as a movie recommendation system suggest some movies for the query " + inputData.current.value + " only give me names of 5 movies, comma separated like this given example result: Gadar, Sholay, Don, 3 idiots, Nayak";

    try {
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const gptMovies=chatCompletion.choices[0].message.content.split(",");
      
      dispatch(addSearchResults(gptMovies))
      const gptMoviesResults= gptMovies.map((movie)=>searchMovieTmdb(movie))
      const gptMovieFinalResult= await Promise.all(gptMoviesResults)
  
      dispatch(addGptMovieResult(gptMovieFinalResult))

    } catch (error) {
      if (error.response && error.response.status === 429) {
        setError('Rate limit exceeded. Please wait and try again later.');
      } else {
        setError('An error occurred: ' + error.message);
      }
    }
    finally{
      setLoading(false);
    }
  };

  if(loading) {
    return (
    <div className='flex  items-center justify-center h-full w-full '>
    <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF0F0F" strokeWidth="15" strokeLinecap="round" strokeDasharray="300 385" strokeDashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.6" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
    </div>
    )
  }

  return (
    <div className='flex flex-col items-center w-screen md:w-full '>
      <div className='flex w-full md:w-5/6 justify-between md:mt-20 mt-10'>
        <input ref={inputData} className='md:w-5/6 w-11/12 ml-3 md:ml-0 p-2 h-10 md:h-12 pl-4 text-sm md:text-lg rounded-md mr-4' type="text" placeholder={languageSelector[selector].gptPlaceholder} />
        <button disabled={loading} onClick={handleLogValue} className='flex justify-center bg-[#f9f9f9] rounded-md px-4 py-2 text-lg mr-3 md:ml-2 h-10 md:h-12'>
          <img className='h-8 w-8 mr-2 md:pl-0 md:pb-0 pl-1 pb-1' src={SearchIcon} alt="" />
          <span className='hidden md:block text-lg font-semibold font-sans mt-0.5 pr-8 md:pr-4 '>{languageSelector[selector].Search}</span>
        </button>
      </div>
      <p className=' text-red-500 md:text-2xl text-lg font-sans font-semibold md:w-5/6 w-11/12 text-start'>Search text like: Indian Retro Movies</p>

      {error && (
        <div className='absolute z-50 mt-40 bg-red-500 text-white p-2 rounded'>
          <h1>{error}</h1>
        </div>
      )}
    </div>
  );
}

export default GptSearchBar;
