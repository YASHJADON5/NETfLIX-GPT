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
  const [isLoading,setIsLoading]= useState(true);

 

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
          
          Navigate('/')
          return 
        }
        console.log(err)
      })

    }



  },[])


 

  if (isLoading) {
    return <div>Loading...</div>; 
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
