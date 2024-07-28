import React from 'react'
import Image from 'next/image'
import logo from './asset/bingo_logo.png'

const SignUpNavbar = () => {
  return (
    <nav>
      <div>
        <Image src={logo} alt='Remote Bingo' />
      </div>
      <div>
        controls here
      </div>
    </nav>
  )
}

export default SignUpNavbar
