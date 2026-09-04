import React from 'react'
import { FaPagelines } from 'react-icons/fa'
import { Star } from 'lucide-react'

const Piece = () => {
  return (
    <div className='inline-flex gap-4 items-center justify-between bg-white shadow-sm rounded-2xl w-full  p-4'>
        <div className=' inline-flex items-center gap-8'>
            <div className='bg-secondary/40 w-13 h-16 rounded-full flex items-center justify-center text-red-950'><FaPagelines/></div>
            <div className='flex flex-col '>
                <p className='font-bold'>The silence of the quiet man in...</p>
                <p className='text-gray-600'><span>Oct 12</span>  <span>4,200 words</span></p>
            </div>
        </div>
        <div className='flex items-center justify-center bg-secondary/40 w-16 h-10 rounded-3xl text-red-950 p-1'><Star fill='black'/> 92</div>

    </div>
  )
}

export default Piece