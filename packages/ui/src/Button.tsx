import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {children}
    </button>
  )
}