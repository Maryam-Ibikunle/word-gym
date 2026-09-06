import React from 'react'
import { Search, Trophy } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
import Archive from '../component/history/Archive'

const History = () => {

  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <main className='bg-background flex flex-col relative my-16 lg:mt-0 md:pt-20 p-5 h-screen'>
      <section className='inline-flex justify-between my-7 items-center lg:gap-40'>
        <span className='font-serif capitalize lg:text-2xl'>Writing History</span>

        <div className={`flex flex-row lg:flex-1 ${!searchOpen ? "bg-transparent":"bg-tertiary/20"} lg:bg-tertiary/20 rounded-3xl `}>
          <button 
          onClick={() => setSearchOpen(!searchOpen)} 
          className={`lg:bg-transparent ${ searchOpen ? "bg-transparent":"bg-tertiary/20"} w-13 h-13 shrink-0 flex justify-center items-center rounded-full`}>
            <Search className='text-primary'/>
            </button>
          
          <input 
            autoFocus
            type="text" 
            placeholder='search...' 
            className={`${searchOpen ? "w-48 opacity-100 p-2 pointer-events-auto" : "w-0 h-0 opacity-0 m-0 p-0 pointer-events-none"} lg:w-60 lg:h-auto lg:opacity-100 lg:pointer-events-auto outline-0 border-0 focus:outline-0 focus:border-0 lg:p-2 transition-all duration-300`}
          />
        </div>
      </section>

      <section className='w-full md:w-2/3 lg:1/2 border border-primary p-4 rounded-2xl bg-tertiary/20 inline-flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <span className='uppercase tracking-wide text-gray-600'>Lifetime words</span>
          <span className='text-primary font-serif'>124,500</span>
        </div>
        <div className='w-13 h-13 flex items-center justify-center rounded-full bg-tertiary/10 text-primary'><Trophy/></div>
      </section>

      <section className='inline-flex my-5 items-center justify-between md:w-2/3 lg:w-1/2'>
        <NavLink to="archive" className={({isActive})=>`flex items-center justify-center w-20 md:w-30 lg:w-40 lg:text-[17px] px-4 p-2 mx-2 rounded-3xl ${!isActive ? "bg-gray-300 text-primary font-bold":"bg-primary text-white" }`}>Archive</NavLink>

        <NavLink to="drafts" className={({isActive})=>`flex items-center justify-center w-20 md:w-30 lg:w-40 lg:text-[17px] px-4 p-2 mx-2 rounded-3xl ${!isActive ?"bg-gray-300 text-primary font-bold":"bg-primary text-white" }`}>Drafts</NavLink>

        <div className='border-r w-1 h-9 text-gray-300 mx-2'></div>
        <button  className={` flex items-center justify-center w-20 md:w-30 lg:w-40 lg:text-[17px] px-4 p-2 mx-2 rounded-3xl text-primary bg-gray-300`}>Filter</button>
      </section>
      <section className="flex-1  bg-background rounded-2xl p-4 shadow-sm">
        <Outlet />
      </section>


      
     
    </main>
  )
}

export default History