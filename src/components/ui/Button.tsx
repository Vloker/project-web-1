import React from 'react'

interface ButtonProps {
    text?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({text,onClick,...props}: ButtonProps) => {
  return (
    <button
        onClick={onClick}
        className='p-2 border border-amber-200 text-sm hover:bg-amber-300 w-fit'
        {...props}
        >
        {text}
    </button>
  )
}
