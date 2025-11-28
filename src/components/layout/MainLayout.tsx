import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className='max-w-[1400px] w-full mx-auto min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
