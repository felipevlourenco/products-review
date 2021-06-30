import React from 'react'
import styles from './Shared.module.scss'

export interface InputProps {
  value: string
  placeholder: string
  handleChange: (v: string) => void
}

const Input: React.FC<InputProps> = ({ value, placeholder, handleChange }) => {
  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={(event) => handleChange(event.target.value)}
    />
  )
}

export default Input
