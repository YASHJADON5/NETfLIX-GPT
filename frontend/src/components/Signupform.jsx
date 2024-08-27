import React, { useRef, useState } from 'react'
import MainHeading from './MainHeading'
import { Link, useNavigate } from 'react-router-dom'
import { validatorForSignup } from '../utils/Validate';

import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL









function Signupform() {

  const Navigate= useNavigate();
  const [loading,setLoading]= useState(false);


  const name= useRef(null);
  const email= useRef(null);
  const password= useRef(null);

  const [error,setError]= useState({
    name:"",
    email:"",
    password:"",
    general:"",
  })


  
  

  async function handleButtonClick (e){
    e.preventDefault();
    setLoading(true);


    const validation = validatorForSignup(name.current.value,email.current.value,password.current.value)

    if(validation==="Name is not valid"){
      setError({
        name:validation,
        email:"",
        password:"",
        general:"",

      })
      setLoading(false);
      return
    }
    else if(validation==="Email is not valid"){
      setError({
        name:"",
        email:validation,
        password:"",
        general:"",
      })
      setLoading(false);
      return
    }
    else if(validation==="Password is not valid"){
      setError({
        name:"",
        email:"",
        password:validation,
        general:"",
      })
      setLoading(false);
      return
    }

    
     
      try{
       const response= await axios.post(`${base_url}/api/v1/users/signup`,{
          name:name.current.value,
          email:email.current.value,
          password:password.current.value
        });
        localStorage.setItem("Netflix-token", response.data.token)
        Navigate('/dashboard')
      }
      catch(err){
        setLoading(false)
        setError({
          name:"",
          email:"",
          password:"",
          general : err.response?.data?.message
        }) 
      }
      finally{
        setLoading(false)
      }
     
   }

   

   if(loading) {
    return (
    <div className='flex  items-center justify-center h-screen w-screen bg-[#1E1E1E]'>
    <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF0F0F" strokeWidth="15" strokeLinecap="round" strokeDasharray="300 385" strokeDashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.6" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
    </div>
    )
  }




  return (
    
    <div className='flex justify-center items-center min-h-screen'>
    <div className='absolute z-10 mt-32 bg-black  bg-opacity-70 w-5/6 md:w-1/3 h-[calc(100vh-128px)]  '> 
        
         <form>

          <MainHeading heading="Sign up"></MainHeading>
         
          <div className='flex flex-col items-center'>
          <input ref={name} className='mt-4 p-4 w-5/6  md:w-9/12 bg-[#161616b3] bg-opacity-70 rounded text-white' type="text" name="" id="" placeholder='Name' />
          <p className='text-red-600 text-lg font-semibold  mx-16'>{error.name}</p>

          <input ref={email} className='mt-4 p-4 w-5/6  md:w-9/12 bg-[#161616b3] bg-opacity-70 rounded text-white' type="text" name="" id="" placeholder='Email or mobile number' />
          <p className='text-red-600 text-lg font-semibold  mx-16'>{error.email}</p>

          <input ref={password} className='mt-4 p-4 w-5/6  md:w-9/12 bg-[#161616b3] bg-opacity-70 rounded text-white'  type="text" placeholder='Password'/>
          <p className='text-red-600 text-lg font-semibold  mx-16'>{error.password}</p>
          <p className='text-red-600 text-lg font-semibold  mx-16'>{error.general}</p>


          <button disabled={loading} onClick={handleButtonClick} className='text-white text-center p-3 mt-4 w-3/6  md:w-9/12 bg-red-600 rounded font-semibold hover:bg-red-700 transition ease-in duration-300'>Sign up</button>
          
     
           
           
            <Link  className='text-xl text-white mx-16 mt-8 md:mt-12 bg-transparent border-none cursor-pointer text-center ' to={"/"}> New to Netflix?<span className='underline text-blue-600'> Sign in now</span>.</Link>
          
          </div>
         </form>

         

    </div>

    
    </div>

  )
}

export default Signupform
