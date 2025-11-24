import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Homepage } from './page/Homepage'
import { MainLayout } from './components/layout/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
