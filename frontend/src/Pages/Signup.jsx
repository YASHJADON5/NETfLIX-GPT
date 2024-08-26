import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../components/Logup';
const base_url = import.meta.env.VITE_BASE_URL;
import axios from 'axios';

function CreateNewAccount() {
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Netflix-token");

    if (token) {
     
      axios.get(`${base_url}/api/v1/users/validate-token`, {
        headers: {
          "authorization": `Bearer ${token}`
        }
      })
      .then(() => {
        
        navigate('/dashboard');
      })
      .catch(() => {
      
        setLoading(false);
      });
    } else {
     
      setLoading(false);
    }
  }, [navigate]);

  
  if(loading) {
    return (

    <div className='flex  items-center justify-center h-screen w-screen bg-[#1E1E1E]'>
    <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FF0F0F" stroke-width="15" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.6" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
    </div>
    )


  }

  return (
    <div>
      <Signup /> 
    </div>
  );
}

export default CreateNewAccount;
