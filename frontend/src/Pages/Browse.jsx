import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import usePopularMovie from '../hooks/usePopularMovie'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import { addPopularMovies, addPopularShows ,addTrendingMovies} from '../utils/moviesSlice'
import useShows from '../hooks/useShows'
import { useSelector } from 'react-redux'
const base_url = import.meta.env.VITE_BASE_URL






function Browse() {
  const [isLoading,setIsLoading]= useState(true);
  
  const selector= useSelector((store)=>store.gpt.showGptSearch)
  // console.log(selector)

  usePopularMovie( {
    endPoint: "https://movies-api14.p.rapidapi.com/shows",
    storeReducer: addPopularMovies,
    queryParams:{}
   });
  

  usePopularMovie({
    endPoint:"https://movies-api14.p.rapidapi.com/movie/27205",
    storeReducer: addPopularShows,
    queryParams:{}
  })


  usePopularMovie({
    endPoint:"https://movies-api14.p.rapidapi.com/search",
    storeReducer: addTrendingMovies,
    queryParams:{query: 'breaking bad'}
  })

  useShows();

  const Navigate= useNavigate()

 

  useEffect(()=>{
    const token = localStorage.getItem("Netflix-token")

    if(!token){
      Navigate('/')
      return;
    }
    
    if (token){
      const response=axios.get(`${base_url}/api/v1/users/validate-token`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
      })
      .then((response)=>{
        
        setIsLoading(false);
      })
      .catch((err)=>{
        if(err.response.request.status==403){
          setIsLoading(false);
          Navigate('/')

          return 
        }
        console.log(err)
      })

    }
    else{
      setIsLoading(false)
    }



  },[])


 

  
  if(isLoading) {
    return (

    <div className='flex  items-center justify-center h-screen w-screen bg-[#1E1E1E]'>
    <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF0F0F" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.6" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
    </div>
    )


  }

  return (
    <div >
        
        
        {selector?<MainContainer   /> : <><MainContainer   />
        <SecondaryContainer  /></>
        }
        
      </div>
  )
}

export default Browse
