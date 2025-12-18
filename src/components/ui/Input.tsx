import React from 'react'

interface InputProps {
 label?: string
 type?: string
 value: string
 placeholder?: string
}

export const Input = ({
    label,
    type,
    value,
    placeholder,
    ...props
}: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <label className='text-sm text-black font-semibold'>{label}</label>
        <input 
            type={type}
            className='p-3 border border-gray-400 rounded-md text-sm text-black'
            value={value}
            placeholder={placeholder}
            {...props} />
    </div>
  )

}
