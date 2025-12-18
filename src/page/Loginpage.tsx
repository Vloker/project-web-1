import React from 'react'
import { Formlogin } from '../components/navigation/log/Formlogin'
import { Imagelogin } from '../components/navigation/log/Imagelogin'

export const Loginpage = () => {
  return (
    <div id='login' className='min-h-screen w-full'>
         <div className='grid grid-cols-2'>
          <Formlogin />
          <Imagelogin />
         </div>
    </div>
  )
}
