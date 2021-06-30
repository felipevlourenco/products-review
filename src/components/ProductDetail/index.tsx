import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../models/product.model'
import useFetch from '../../utils/useFetch'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'

const URL = 'http://localhost:5000/api/product'

// export interface ProductDetailProps {
// }

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error, isLoading } = useFetch(`${URL}/${id}`, { method: 'GET' })
  const product = data as Product

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div>
        <img src={product.imgUrl} alt={`${product.name} image`} />
        <span>{product.name}</span>
        <span>{product.description}</span>
        <span>{product.price}</span>
      </div>
    </div>
  )
}

export default ProductDetail
