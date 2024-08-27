import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import Signinform from '../components/Signinform'
const base_url = import.meta.env.VITE_BASE_URL
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Signin() {
  const [loading,setLoading] =useState(true);
  const navigate= useNavigate()
  
  
  useEffect(()=>{
    const token= localStorage.getItem("Netflix-token")
  

    
    if(token){
      // console.log("YASH")
      axios.get(`${base_url}/api/v1/users/validate-token`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
      })
      .then((response)=>{
        setLoading(false);
       
        navigate('/dashboard')
            
      })
      .catch((err)=>{
        setLoading(false);
          
      })

      


       

    }
    else{
      setLoading(false)
    }

  },[navigate])

  if(loading) {
    return (

    <div className='flex  items-center justify-center h-screen w-screen bg-[#1E1E1E]'>
    <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF0F0F" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.6" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
    </div>
    )


  }


  return (
    <div>
    <Login />
    </div>
  )
}

export default Signin
