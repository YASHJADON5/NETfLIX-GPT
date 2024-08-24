import React from 'react'
import NetflixLogo from '../assets/Netflix.png'

function Header() {
  return (

        <div className='absolute p-4 md:pl-32 z-10 w-full bg-gradient-to-b from-black  '>
          <img className='md:h-24 md:w-56 h-16 w-32' src={NetflixLogo} alt="logo" />
        </div>
    
  )
}

export default Header
