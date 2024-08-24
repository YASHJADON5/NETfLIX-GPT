import React from 'react'
import Header from './Header'
import Background from './Background'
import Signupform from './Signupform'




function Signup() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-black to-black' >
       
       <Header></Header>
       <Background></Background>
       <Signupform ></Signupform>


    </div>
  )
}

export default Signup
