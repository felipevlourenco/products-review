import React, { ReactElement } from 'react'
import styles from './Shared.module.scss'

export interface ButtonProps {
  children: ReactElement
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
