import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Homepage } from './page/Homepage'
import { MainLayout } from './components/layout/MainLayout'
import { Loginpage } from './page/Loginpage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>

        <Route path='/login' element={<Loginpage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
