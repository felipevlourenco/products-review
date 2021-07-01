import React from 'react'
import { Review as ReviewModel } from '../../models/review.model'
import styles from './Review.module.scss'

export interface ReviewProps {
  review: ReviewModel
  index: number
}

const Review: React.FC<ReviewProps> = ({ review, index }) => {
  return (
    <div className={styles.review}>
      <h2>Review #{index + 1}</h2>
      <span>{review.text}</span>
    </div>
  )
}

export default Review