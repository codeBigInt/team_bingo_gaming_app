import React from 'react'
import Image from 'next/image'
import logo from './asset/bingo_logo.png'
import user from './asset/user.png'
import Navbar from './Navbar'


const LandingPageNavbar = () => {
    return (
        <Navbar className='justify-between'>
            <div className='flex md:hidden'>
                <Image src={user} alt='user' />
            </div>
            <div>
                <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
            </div>
            <div className='flex gap-6 items-center'>
                <p className='text-[#2196F3] hidden md:flex'>How to play</p>
                <div className='flex gap-4 items-center'>
                    <button className='bg-[#FAD02C] text-white py-2 px-4 rounded-[8px]'>Login</button>
                    <button className='bg-[#00658B] text-white py-2 px-4 rounded-[8px]'>Signup</button>
                </div>
            </div>
        </Navbar>
    )
}



export default LandingPageNavbar