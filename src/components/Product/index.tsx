import React from 'react'
import { Product as ProductModel } from '../../models/product.model'
import styles from './Product.module.scss'

export interface ProductsProps {
  product: ProductModel
  onClick: (p: ProductModel) => void
}

const Product: React.FC<ProductsProps> = ({ product, onClick }) => {
  const getPriceFormated = (product: ProductModel): string => {
    return `${product.currency} ${product.price?.toFixed(2)}`
  }

  return (
    <div className={styles.product} onClick={() => onClick(product)}>
      <img className={styles.img} src={product.imgUrl} loading="lazy" alt={`${product.name} image`} />
      <span className={styles.name}>{product.name}</span>
      <span className={styles.description}>{product.description}</span>
      <span className={styles.price}>{getPriceFormated(product)}</span>
    </div>
  )
}

export default Product
