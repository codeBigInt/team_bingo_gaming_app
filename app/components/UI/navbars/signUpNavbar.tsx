import React from 'react'
import Image from 'next/image'
import logo from './asset/bingo_logo.png'
import user from './asset/user.png'


const SignUpNavbar = () => {
  
  return (
    <nav className='flex items-center justify-between w-full bg-[#fffdfd] px-6 md:px-20 py-6'>
      <div className='flex md:hidden'>
        <Image src={user} alt='user' />
      </div>
      <div>
        <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
      </div>
      <div className='flex gap-6 items-center'>
       <p className='text-[#2196F3] hidden md:flex'>How to play</p>
       <button>Login</button>
      </div>
    </nav>
  )
}



export default SignUpNavbar