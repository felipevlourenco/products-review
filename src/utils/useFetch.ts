import { useState, useEffect, useRef } from 'react'
import { Product } from '../models/product.model'
import { Review } from '../models/review.model'

interface useFetchReturn {
  data: Product[] | Product | Review[]
  hasData: boolean
  error: string
  isLoading: boolean
}

const useFetch = (url: string, options?: RequestInit): useFetchReturn => {
  const [data, setData] = useState<Product[] | Product | Review[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasData, setHasData] = useState(false)

  const fetchData = useRef(async () => {
    setIsLoading(true)

    try {
      const resp = await fetch(url, options)
      const data = await resp.json()
      setHasData(!!data)
      setData(data)
    } catch (e) {
      setHasData(false)
      setData([])
      setError(e.message ? e.message : JSON.stringify(e))
    }

    setIsLoading(false)
  })

  useEffect(() => {
    fetchData.current()
  }, [fetchData])

  return { data, hasData, error, isLoading }
}

export default useFetch
