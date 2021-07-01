import React, { useState } from 'react'
import { Review } from '../../models/review.model'
import useFetch from '../../utils/useFetch'
import { hash } from '../../utils/utils'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import ReviewModal from '../ReviewModal'
import Button from '../Shared/Button'
// import styles from './ReviewsList.modules.scss'

const REVIEW_URL = 'http://localhost:5000/api/review'

export interface ReviewsListProps {
  productId: string
}

const ReviewsList: React.FC<ReviewsListProps> = ({ productId = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { data, hasData, error, isLoading } = useFetch(`${REVIEW_URL}/${productId}`)
  const reviews = data as Review[]

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (isLoading) {
    return <Loading />
  }

  const addReview = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <div style={{ marginLeft: 50 }}>
        <Button onClick={addReview}>
          <span>Add a review</span>
        </Button>
      </div>
      {hasData && reviews.map(review => (
        <div key={hash(`${productId}-${review.rating}`)}>
          {review.text}
        </div>
      ))}
      <ReviewModal isOpen={isOpen} handleClose={() => setIsOpen(false)} text="<App> Modal" />
    </div>
  )
}

export default ReviewsList