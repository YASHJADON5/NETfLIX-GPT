import React, { useState, useRef, useEffect } from 'react'
import MainHeading from './MainHeading'
import {Link, useNavigate} from 'react-router-dom'
import { validatorForSignin } from '../utils/Validate'
import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL


function Signinform() {
  const Navigate= useNavigate();
  const navigate= useNavigate();
  const email= useRef(null)
  const password= useRef(null)
  const [loading,setLoading]=useState(false);

  const [errMessageForEmail,setErrMessageForEmail ]= useState("");
  const [errMessageForPassword,setErrMessageForPassword ]= useState("");

  const handleButtonClick=async(e)=>{
    e.preventDefault();
    setLoading(true);

    const validation = validatorForSignin(email.current.value,password.current.value)

    if(validation!=null&&validation==="Email is not valid"){
      setErrMessageForEmail(validation);
    }
    else if(validation!=null&&validation==="Password is not valid"){
      setErrMessageForPassword(validation);
    }


    if(validation===null){
        try{

          const response = await axios.post(`${base_url}/api/v1/users/signin`,{
            email:email.current.value,
            password:password.current.value
          })
    
          const token = response.data.token;
           if(token){
             localStorage.setItem("Netflix-token", token)
             setLoading(false);
             Navigate('/dashboard')
           }
    
        }
        catch(err){
          setErrMessageForPassword(err.response.data.message)
        }
    } 



  }

  if(loading) {
    return (

    <div className='flex  items-center justify-center h-screen w-screen bg-[#1E1E1E]'>
    <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF0F0F" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.6" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
    </div>
    )


  }






  return (
   
       <div className='flex justify-center items-center min-h-screen'>
      <div className='absolute z-10 mt-32 bg-black  bg-opacity-70 w-5/6 md:w-1/3 h-[calc(100vh-128px)]  '> 
          
           <form>

            <MainHeading heading="Sign in"></MainHeading>
           
            <div className='flex flex-col items-center'>
           
            <input ref={email} className='mt-4 p-4 w-5/6  md:w-9/12  bg-[#161616b3] bg-opacity-70 rounded text-white' type="text" name="" id="" placeholder='Email or mobile number' />
            <p className='text-red-600 text-lg font-semibold  mx-16'>{errMessageForEmail}</p>
            <input ref={password} className='mt-4 p-4 w-5/6 md:w-9/12  bg-[#161616b3] bg-opacity-70 rounded text-white'  type="password" placeholder='Password'/>
            <p className='text-red-600 text-lg font-semibold  mx-16'>{errMessageForPassword}</p>
            <button onClick={handleButtonClick} className='text-white text-center p-3 mt-4 w-3/6  md:w-9/12  bg-red-600 rounded font-semibold hover:bg-red-700 transition ease-in duration-300'>Sign in</button>
            
       
             
             
              <Link  className='text-xl text-white mx-16 mt-8 md:mt-12 bg-transparent border-none cursor-pointer text-center ' to={"/signup"}> New to Netflix?<span className='underline text-blue-600'> Sign up now</span>.</Link>
            
            </div>
           </form>

           

      </div>

      
      </div>

      
 
   
  )
}

export default Signinform
