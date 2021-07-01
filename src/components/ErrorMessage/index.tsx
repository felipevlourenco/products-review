import React from 'react'
import styles from './ErrorMessage.module.scss'

export interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'Ops! Something went wrong!' }) => {
  return (
    <div className={styles.error}>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage
