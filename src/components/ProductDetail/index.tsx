import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../models/product.model'
import useFetch from '../../utils/useFetch'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import ReviewsList from '../ReviewsList'
import styles from './ProductDetail.module.scss'

const PRODUCT_URL = 'http://localhost:5000/api/product'


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, hasData, error, isLoading } = useFetch(`${PRODUCT_URL}/${id}`)
  const product = data as Product

  const getPriceFormated = (product: Product): string => {
    return `${product.currency} ${product.price?.toFixed(2)}`
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      {hasData && (
        <div className={styles['product-detail']}>
          <img className={styles.img} src={product.imgUrl} alt={`${product.name} image`} />
          <div>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.description}>{product.description}</span>
            <span className={styles.price}>{getPriceFormated(product)}</span>
          </div>
        </div>
      )}
      <ReviewsList productId={id} />
    </div>
  )
}

export default ProductDetail
