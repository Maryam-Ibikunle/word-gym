import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Progress from './pages/Progress'
import Write from './pages/Write'
import History from './pages/History'
import Navbar from './component/layout/Navbar'
import Topbar from './component/layout/Topbar'
import React from 'react'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='max-h-15'>
      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/progress' element={<Progress/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Navbar/>
      
      </BrowserRouter>
    </div>
  )
}

export default App 