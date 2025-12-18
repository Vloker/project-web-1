import React from 'react'

interface ButtonProps {
    text?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({text,onClick,...props}: ButtonProps) => {
  return (
    <button
        onClick={onClick}
        className='p-3 border-none text-sm font-semibold bg-[#625149] hover:bg-black w-full rounded-md text-white'
        {...props}
        >
        {text}
    </button>
  )
}
