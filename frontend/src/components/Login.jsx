import React from 'react';
import Header from './Header';


import Signinform from './Signinform';
import Background from './Background';



function Login() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-black to-black'>
     <Header /> 
     <Background/>
     <Signinform ></Signinform>
    </div>
    
  );
}

export default Login;