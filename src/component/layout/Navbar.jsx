import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiHome, BiBookOpen, BiSolidRightTopArrowCircle, BiHistory } from 'react-icons/bi'
import { GiOpenBook } from 'react-icons/gi'
import { User } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='fixed lg:sticky bottom-0 lg:left-0 lg:top-0 w-full lg:w-64 lg:h-screen z-50 pb-1 bg-background text-primary backdrop-blur-2xl shadow-[0_-1px_8px_rgba(157,23,77,0.04)] text-sm lg:text-xl lg:flex lg:flex-col lg:justify-between'>
        
        <div className='flex flex-col gap-15'>
            <NavLink to="/" className="hidden lg:inline-flex items-center gap-2 m-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <GiOpenBook className="h-7 w-7 text-background/30" />
                </div>
        
                <h1 className="font-sans text-3xl font-semibold text-primary">
                WordGym
                </h1>
            </NavLink>
            <div className='w-full flex flex-row lg:flex-col justify-between px-2 lg:px-4'>
                <NavLink to="/" className={({isActive})=> `flex flex-col lg:flex-row lg:gap-4 lg:py-5 lg:px-4 rounded-2xl items-center justify-center lg:justify-start uppercase lg:capitalize h-12 w-16 lg:w-full lg:h-full transition-all duration-300 ease-in-out ${isActive ? "lg:bg-primary lg:text-white lg:scale-100 scale-125" : "bg-transparent" }`}><BiHome size={30}/> Home</NavLink>
                <NavLink to="/write" className={({isActive})=> `flex flex-col lg:flex-row lg:gap-4 lg:py-5 lg:px-4 rounded-2xl items-center justify-center lg:justify-start uppercase lg:capitalize h-12 w-16 lg:w-full lg:h-full transition-all duration-300 ease-in-out ${isActive? "lg:bg-primary lg:text-white lg:scale-100 scale-125":"bg-transparent"}`}><BiBookOpen size={30}/> Write</NavLink>
                <NavLink to="/progress" className={({isActive})=> `flex flex-col lg:flex-row lg:gap-4 lg:py-5 lg:px-4 rounded-2xl items-center justify-center lg:justify-start uppercase lg:capitalize h-12 w-16 lg:w-full lg:h-full transition-all duration-300 ease-in-out ${isActive? "lg:bg-primary lg:text-white lg:scale-100 scale-125":"bg-transparent"}`}><BiSolidRightTopArrowCircle size={30}/>Progress</NavLink>
                <NavLink to="/history" className={({isActive})=> `flex flex-col lg:flex-row lg:gap-4 lg:py-5 lg:px-4 rounded-2xl items-center justify-center lg:justify-start uppercase lg:capitalize h-12 w-16 lg:w-full lg:h-full transition-all duration-300 ease-in-out ${isActive? "lg:bg-primary lg:text-white lg:scale-100 scale-125":"bg-transparent"}`}><BiHistory size={30}/>History</NavLink>
        </div>
        </div>

        <NavLink to="/profile" className="hidden lg:inline-flex items-center gap-2 m-4">
            <div className='rounded-full flex items-center justify-center h-10 w-10 bg-primary'><User className="h-7 w-7 text-background/30" /></div>
            <span>View Profile</span>
        </NavLink>
    </nav>
  )
}

export default Navbar