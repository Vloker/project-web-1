import React from 'react'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'

export const Formlogin = () => {
  return (
    <div id='login-form' className='col-span-1 col-start-1'>

      <form action="" className='flex flex-col gap-4'>
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

        <Button text='Login'/>

      </form>

    </div>
  )
}
