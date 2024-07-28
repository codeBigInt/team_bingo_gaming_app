import React from 'react'

type NavbarProp = {
    className?: string,
    children: React.ReactNode,
}

const Navbar = ({ className, children }: NavbarProp) => {
    return (
        <div className={`${className} flex items-center w-full bg-[#fffdfd] px-6 md:px-20 py-6`}>
            {children}
        </div>
    )
}

export default Navbar
