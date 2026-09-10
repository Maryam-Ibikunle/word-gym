import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Progress from './pages/Progress'
import Write from './pages/Write'
import History from './pages/History'
import Navbar from './component/layout/Navbar'
import Topbar from './component/layout/Topbar'
import React from 'react'
import Analysis from './pages/Analysis'
import Archive from './component/history/Archive'
import Drafts from './component/history/Drafts'
import ScrollToTop from './component/layout/ScrollToTop'

const App = () => {
  return (
    
    <BrowserRouter>
    <div className="h-screen flex overflow-hidden">
      <Navbar />
  
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
  
        <main className="flex-1 overflow-y-auto">
          <ScrollToTop />
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/progress" element={<Progress />} />
  
            <Route path="/history" element={<History />}>
              <Route index element={<Drafts />} />
              <Route path="archive" element={<Archive />} />
              <Route path="drafts" element={<Drafts />} />
            </Route>
  
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </main>
      </div>
    </div>
  </BrowserRouter>
    
  )
}

export default App 

