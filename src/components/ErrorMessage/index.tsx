import React from 'react'

export interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'Ops! Something went wrong!' }) => {
  return (
    <div>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage
