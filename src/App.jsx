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
import Archive from './component/history/Archive'
import Drafts from './component/history/Drafts'

const App = () => {
  return (
    
      <BrowserRouter>
        <div className='max-h-screen overflow-y-scroll flex'>
          <Topbar/>
          <Navbar/>
          <div className='flex-1 min-h-0 oveflow-y-auto'>
            <Routes>          
              <Route path='/' element={<Home/>}/>
              <Route path='/write' element={<Write/>}/>
              <Route path='/progress' element={<Progress/>}/>
              <Route path='/history' element={<History/>}>
                <Route path='archive' element={<Archive/>}/>
                <Route path='drafts' element={<Drafts/>}/>
              </Route>
              <Route path='/profile' element={<Profile/>}/>         
            </Routes>
            </div>
         
        </div>
      </BrowserRouter>
    
    
  )
}

export default App 

