import React, { ReactElement } from 'react'
import styles from './Shared.module.scss'

export interface ButtonProps {
  children: ReactElement
  onClick: () => void
  isSharp?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isSharp = false }) => {
  return (
    <button className={isSharp ? styles['button-sharp'] : styles['button-primary']} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
