import React from 'react'

const CardSelectionNavbar = () => {
    return (
        <nav className='md:px-20 px-6 py-6 flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <button className='flex items-center border rounded-[8px] gap-[.5em] border-black justify-center py-2 px-4 outline-1'>
                    <span></span>
                    <span>Back</span>
                </button>
            </div>
            <h3 className='text-2xl font-bold'>889-234</h3>
            <div className='flex items-center gap-4'>
                <button className='flex items-center bg-[#00658B] rounded-[8px] gap[.5em] text-white justify-center py-[10px] px-4 outline-1'>
                    <span>Copy Link</span>
                    <span></span>
                </button>
                <button className='flex items-center bg-[#00A8E8] rounded-[8px] gap[.5em] text-white justify-center py-[10px] px-4 outline-1'>
                    <span></span>
                    <span>User101</span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default CardSelectionNavbar
