import React from 'react'
import styles from './Shared.module.scss'

export interface InputProps {
  value: string | number
  placeholder: string
  handleChange: (v: string) => void
  type?: 'text' | 'number'
}

const Input: React.FC<InputProps> = ({ value, placeholder, handleChange, type = 'text' }) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => handleChange(event.target.value)}
    />
  )
}

export default Input
