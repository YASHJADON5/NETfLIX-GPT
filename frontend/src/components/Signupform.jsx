import React, { useRef, useState,useEffect } from 'react'
import MainHeading from './MainHeading'
import { Link, useNavigate } from 'react-router-dom'
import { validatorForSignup } from '../utils/Validate';

import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL

// const BaseURL= process.env.REACT_APP_BASE_URL;







function Signupform() {

  const Navigate= useNavigate();
  
  useEffect(()=>{
    
    const token= localStorage.getItem("Netflix-token")
    if(token){
      console.log("YASH")
      axios.get(`${base_url}/api/v1/users/validate-token`,{
        headers:{
          "authorization":`Bearer ${token}`
        }
      })
      .then((response)=>{
       
        Navigate('/dashboard')
     
      })
      .catch((err)=>{
          
      })
    }

  },[])

  const name= useRef(null);
  const email= useRef(null);
  const password= useRef(null);

  const [errMessageForName,setErrMessageForName]= useState("")
  const [errMessageForEmail,setErrMessageForEmail]= useState("")
  const [errMessageForPassword,serErrMessageForPassword]= useState("")
  
  

   function handleButtonClick(e){
    e.preventDefault();

    const validation = validatorForSignup(name.current.value,email.current.value,password.current.value)

    if(validation!=null&&validation==="Name is not valid"){
      setErrMessageForName(validation)
    }
    else if(validation!=null&&validation==="Email is not valid"){
      setErrMessageForEmail(validation)
    }
    else if(validation!=null&&validation==="Password is not valid"){
      serErrMessageForPassword(validation)
    }

    if(validation===null){
         
      axios.post(`${base_url}/api/v1/users/signup`,{
        name:name.current.value,
        email:email.current.value,
        password:password.current.value
      })
      .then((response)=>{
            console.log(response)
            localStorage.setItem("Netflix-token", response.data.token)
            Navigate('/dashboard')
      })
      .catch((e)=>{
        console.log(e);
      })
       
      

    }



         
    


   }




  return (
    
    <div className='flex justify-center items-center min-h-screen'>
    <div className='absolute z-10 mt-32 bg-black  bg-opacity-70 w-5/6 md:w-1/3 h-[calc(100vh-128px)]  '> 
        
         <form>

          <MainHeading heading="Sign up"></MainHeading>
         
          <div className='flex flex-col items-center'>
          <input ref={name} className='mt-4 p-4 w-5/6  md:w-9/12 bg-[#161616b3] bg-opacity-70 rounded text-white' type="text" name="" id="" placeholder='Name' />
          <p className='text-red-600 text-lg font-semibold  mx-16'>{errMessageForName}</p>

          <input ref={email} className='mt-4 p-4 w-5/6  md:w-9/12 bg-[#161616b3] bg-opacity-70 rounded text-white' type="text" name="" id="" placeholder='Email or mobile number' />
          <p className='text-red-600 text-lg font-semibold  mx-16'>{errMessageForEmail}</p>

          <input ref={password} className='mt-4 p-4 w-5/6  md:w-9/12 bg-[#161616b3] bg-opacity-70 rounded text-white'  type="text" placeholder='Password'/>
          <p className='text-red-600 text-lg font-semibold  mx-16'>{errMessageForPassword}</p>

          <button onClick={handleButtonClick} className='text-white text-center p-3 mt-4 w-3/6  md:w-9/12 bg-red-600 rounded font-semibold hover:bg-red-700 transition ease-in duration-300'>Sign up</button>
          
     
           
           
            <Link  className='text-xl text-white mx-16 mt-8 md:mt-12 bg-transparent border-none cursor-pointer text-center ' to={"/"}> New to Netflix?<span className='underline text-blue-600'> Sign in now</span>.</Link>
          
          </div>
         </form>

         

    </div>

    
    </div>

  )
}

export default Signupform
