import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '../Shared/Button'
import Input from '../Shared/Input'
import styles from './ReviewModal.module.scss'

interface ModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: (data: { rating: number; text: string }) => void
}

const ModalBox: React.FC<ModalProps> = ({ isOpen, handleClose, handleSubmit }) => {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    text: ''
  })

  const handleChange = (prop: string, value: string) => {
    setReviewData({
      ...reviewData,
      [prop]: value
    })
  }

  const handleButtonClick = () => {
    handleSubmit({
      rating: +reviewData.rating,
      text: reviewData.text
    })
  }

  return (
    <div className={isOpen ? styles['modal-open'] : styles['modal-close']} onClick={handleClose}>
      <div className={styles.container} onClick={(event) => event.stopPropagation()}>
        <h3>Submit a new Review for this product</h3>
        <label>Rating</label>
        <Input
          value={reviewData.rating}
          handleChange={(value) => handleChange('rating', value)}
          type="number"
          placeholder="Rating"
        />
        <label>Review</label>
        <Input value={reviewData.text} handleChange={(value) => handleChange('text', value)} placeholder="Text" />
        <Button onClick={handleButtonClick}>
          <span>Submit Review</span>
        </Button>
      </div>
    </div>
  )
}

const ReviewModal: React.FC<ModalProps> = ({ isOpen, handleClose, handleSubmit }) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      ref.current = document.createElement('div')
      document.body.appendChild(ref.current)
      document.body.setAttribute('style', 'overflow-y:hidden; position: relative;')
      ReactDOM.render(<ModalBox isOpen={isOpen} handleClose={handleClose} handleSubmit={handleSubmit} />, ref.current)
    } else {
      if (ref.current) {
        if (ref.current.parentNode) {
          ;(ref.current.parentNode as HTMLElement).setAttribute('style', 'overflow-y:visible; position: static;')
          ref.current.parentNode.removeChild(ref.current)
        }
        ReactDOM.unmountComponentAtNode(ref.current)
      }
    }
  }, [isOpen, handleClose, handleSubmit])

  return null
}

export default ReviewModal
