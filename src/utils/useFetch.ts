import { useState, useEffect, useRef } from 'react'
import { Product } from '../models/product.model'
// import products from '../mock/product.json'

interface useFetchReturn {
  data: Product[] | Product
  hasData: boolean
  error: string
  isLoading: boolean
}

const useFetch = (url: string, options?: RequestInit): useFetchReturn => {
  const [data, setData] = useState<Product[] | Product>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasData, setHasData] = useState(false)

  const fetchData = useRef(async () => {
    setIsLoading(true)

    try {
      // // TODO: Remove when cors problems is fixed
      // if (url.indexOf('/product/') >= 0) {
      //   setTimeout(() => {
      //     const product = products.find((prod) => prod.id === url.split('/product/')[1])
      //     setHasData(!!product)

      //     if (product) {
      //       setData(product)
      //     }
      //     setIsLoading(false)
      //   }, 1000)
      // } else if (url.indexOf('/product') >= 0) {
      //   setTimeout(() => {
      //     setHasData(!!products && !!products.length)
      //     setData(products)
      //     setIsLoading(false)
      //   }, 1000)
      // } else {
      const resp = await fetch(url, options)
      const data = await resp.json()
      setHasData(data && data.length)
      setData(data)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setHasData(false)
      setData([])
      setError(e.message ? e.message : JSON.stringify(e))
    }
  })

  useEffect(() => {
    fetchData.current()
  }, [fetchData])

  return { data, hasData, error, isLoading }
}

export default useFetch
