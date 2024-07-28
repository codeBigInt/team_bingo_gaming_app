import Image from 'next/image'
import logo from './asset/bingo_logo.png'
import user from './asset/user.png'


const CountDownNavbar = () => {
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
        <div className='flex items-center flex-row-reverse gap-4'>
          <button className='flex items-center border rounded-[8px] gap-[.5em] border-[#00658B] text-[#00658B] justify-center py-2 px-4 outline-1'>
            <span></span>
          </button>
          <button>
            <button className='flex items-center bg-[#00658B] rounded-[8px] gap[.5em] text-[#D5F3FF] justify-center py-[10px] px-4 outline-1'>
              <span></span>
              <span>User101</span>
              <span></span>
            </button>
          </button>
          <button></button>
        </div>
      </div>
    </nav>
  )
}

export default CountDownNavbar
