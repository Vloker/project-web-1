import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className='min-h-full'>
      <Header />
      <main className='xl:max-w-[1400px] sm:max-w-[480px] mx-auto w-full h-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
