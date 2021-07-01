import React, { useEffect, useRef, useState } from 'react'
import { Review as ReviewModel } from '../../models/review.model'
import { hash } from '../../utils/utils'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import Review from '../Review'
import ReviewModal from '../ReviewModal'
import Button from '../Shared/Button'
import styles from './ReviewsList.module.scss'

const REVIEW_URL = 'http://localhost:5000/api/review'

export interface ReviewsListProps {
  productId: string
}

const ReviewsList: React.FC<ReviewsListProps> = ({ productId = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reviews, setReviews] = useState<ReviewModel[]>([])

  const loadReviews = useRef(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${REVIEW_URL}/${productId}`)
      const data = await response.json()
      setReviews(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setError(error.message ? error.message : JSON.stringify(error))
      setIsLoading(false)
    }
  })

  useEffect(() => {
    loadReviews.current()
  }, [])

  const openReviewModal = () => {
    setIsOpen(true)
  }

  const handleModalSubmit = (reviewData: { rating: number, text: string }) => {
    fetch(`${REVIEW_URL}/${productId}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...reviewData, productId, locale: 'en-Us' })
    }).then(response => response.json()).then(() => {
      loadReviews.current()
    }).catch(error => {
      setError(error.message ? error.message : JSON.stringify(error))
      setIsLoading(false)
    })

    setIsOpen(false)
  }

  if (!!error) {
    return <ErrorMessage message={error} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <Button onClick={openReviewModal}>
        <span>Add a review</span>
      </Button>
      <div className={styles['reviews-list']}>
        {reviews.map((review, index) => (
          <Review key={hash(`${productId}-${review.rating}-${index}`)} review={review} index={index} />
        ))}
        <ReviewModal isOpen={isOpen} handleClose={() => setIsOpen(false)} handleSubmit={handleModalSubmit} />
      </div>
    </div>
  )
}

export default ReviewsList