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
        <label className='text-xs text-gray-400'>{label}</label>
        <input 
            type={type}
            className='p-1 border border-gray-400 rounded-xs text-sm'
            value={value}
            placeholder={placeholder}
            {...props} />
    </div>
  )

}
