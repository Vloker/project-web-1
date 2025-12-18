import React from 'react'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'

export const Formlogin = () => {
  return (
    <section id='login-form' className='col-span-1 col-start-1 flex justify-center'>

      <div className='flex flex-col gap-4 w-3/5 h-screen justify-center'>
        {/* Text */}
        <section className='flex flex-col gap-3'>
          <h1 className='text-black font-bold text-5xl'>Hey, <br/> Welcome Back</h1>
          <h2 className='text-gray-400 font-semibold text-sm'>We are very happy to see you back!</h2>
        </section>

        {/* Form Login */}
        <form action="submit" className='col-span-2 col-start-2 flex flex-col gap-4'>

          <Input 
            label='Email' 
            type='email' 
            value={''}
            placeholder='Masukkan Email Anda' 
            />

          <Input 
            label='Password' 
            type='password'
            value={''}
            placeholder='Masukkan Password Anda' 
            />

          <Button 
            text='Login'/>

        </form>

        {/* Form Google */}
        <div className='flex flex-col gap-4 text-center'>
          <section>
            <p className='text-xs text-gray-400 font-semibold'>OR</p>
          </section>

          <form action="">

          </form>

        </div>

      </div>

    </section>
  )
}
