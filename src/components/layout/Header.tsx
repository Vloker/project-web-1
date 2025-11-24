import React from 'react'
import { NavLink } from 'react-router'

export const Header = () => {
  return (
    <header className='fixed z-30 w-full h-14 bg-[#CEA39C]'>
      <nav id='navbar'>
        <ul className='grid grid-cols-6 bg-transparent items-center h-full px-5'>

          {/* Logo */}
          <li className='col-span-1 h-14 flex justify-center items-center '>
            <img 
              className='object-contain h-28 w-auto '
              src="src/assets/PureGlow.png" 
              alt="logo" />
          </li>

          {/* Navigation */}
          <li className='col-span-3 col-start-4'>
            <ul className='flex items-center justify-end gap-6 text-sm'>
              <li><NavLink to="/">HOME</NavLink></li>
              <li><NavLink to="/">ABOUT</NavLink></li>
              <li><NavLink to="/">PRODUCT</NavLink></li>
              <li><NavLink to="/">BLOG</NavLink></li>
              <li><NavLink to="/">CONTACT</NavLink></li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>
  )
}
