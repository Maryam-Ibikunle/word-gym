import React from 'react'
import { Link } from 'react-router-dom'
import { BiHome, BiBookOpen, BiSolidRightTopArrowCircle, BiHistory } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='fixed bottom-0 w-full z-50 pb-1 bg-background text-primary backdrop-blur-2xl shadow-[0_-1px_8px_rgba(157,23,77,0.04)] text-sm'>
        <div className='w-full flex flex-row justify-between px-2'>
            <Link to="/" className='flex flex-col items-center justify-center uppercase h-12 w-16 transition-all duration-300'><BiHome size={120}/> Home</Link>
            <Link to="/write" className='flex flex-col items-center justify-center uppercase h-12 w-16 transition-all duration-300'><BiBookOpen size={120}/> Write</Link>
            <Link to="/progress" className='flex flex-col items-center justify-center uppercase h-12 w-16 transition-all duration-300'><BiSolidRightTopArrowCircle size={120}/>Progress</Link>
            <Link to="/history" className='flex flex-col items-center justify-center uppercase h-12 w-16 transition-all duration-300'><BiHistory size={120}/>History</Link>
        </div>
    </nav>
  )
}

export default Navbar