import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './ReviewModal.module.scss'

interface ModalProps {
  isOpen: boolean,
  handleClose: () => void
  text: string
}

const ModalBox: React.FC<ModalProps> = ({ isOpen, handleClose, text }) => {
  return (
    <div className={isOpen ? styles['modal-open'] : styles['modal-close']} onClick={handleClose}>
      <div className={styles.container} onClick={event => event.stopPropagation()}>
        <span>{text}</span>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

const ReviewModal: React.FC<ModalProps> = ({ isOpen, handleClose, text }) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      ref.current = document.createElement('div')
      document.body.appendChild(ref.current)
      document.body.setAttribute('style', 'overflow-y:hidden; position: relative;')
      ReactDOM.render(<ModalBox isOpen={isOpen} handleClose={handleClose} text={text} />, ref.current)
    } else {
      if (ref.current) {
        if (ref.current.parentNode) {
          (ref.current.parentNode as HTMLElement).setAttribute('style', 'overflow-y:visible; position: static;')
          ref.current.parentNode.removeChild(ref.current)
        }
        ReactDOM.unmountComponentAtNode(ref.current)
      }
    }
  }, [isOpen, handleClose, text])

  return null
}

export default ReviewModal
