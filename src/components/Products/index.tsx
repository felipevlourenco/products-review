import React from 'react'
import styles from './Products.module.scss'
import useFetch from '../../utils/useFetch'
import { useHistory } from 'react-router-dom'
import { Product as ProductModel } from '../../models/product.model'
import Product from '../Product'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'

const URL = 'http://localhost:5000/api/product'

const Products: React.FC = () => {
  const history = useHistory()
  const { data, hasData, error, isLoading } = useFetch(URL)

  const handleClick = (product: ProductModel) => {
    history.push(product.id)
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.products}>
      {hasData &&
        (data as ProductModel[]).map((product, index) => (
          <Product key={`${product.id}-${index}`} product={product} onClick={handleClick} />
        ))}
    </div>
  )
}

export default Products
