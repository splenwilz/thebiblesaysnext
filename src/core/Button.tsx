import React, { ReactNode } from 'react'

interface ButtonProps {
  className?: string
  onClick?: () => void
  children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={`bg-thebiblesaysorange text-thebiblesaysblack-100 px-8 py-[12px] text-center text-xs font-bold font-lexend justify-self-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
