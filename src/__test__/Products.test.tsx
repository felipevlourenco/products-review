import React from 'react'
import { render } from '@testing-library/react'
import Products from './../components/Products/index'
import useFetch from './../utils/useFetch'

jest.mock('./../utils/useFetch', () => {
  return jest.fn(() => ({
    isLoading: false,
    data: [
      {
        currency: '$',
        price: 76,
        id: 'HI333',
        name: 'product 1',
        description: 'description',
        imgUrl:
          'https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/c7099422ccc14e44b406abec00ba6c96_9366/NMD_R1_V2_Shoes_Black_FY6862_01_standard.jpg'
      },
      {
        currency: '$',
        price: 4,
        id: 'HI334',
        name: 'product 2',
        description: 'description',
        imgUrl:
          'https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/c93fa315d2f64775ac1fab96016f09d1_9366/Dame_6_Shoes_Black_FV8624_01_standard.jpg'
      }
    ],
    hasData: true,
    error: ''
  }))
})

describe('Products component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Expect to useFetch to be called at <Products> component startup', () => {
    render(<Products />)
    expect(useFetch).toBeCalledTimes(1)
  })

  test('Products component be able to load products', () => {
    const { getAllByText, container } = render(<Products />)
    const productList = getAllByText((_content, element) => {
      return element?.classList.contains('product') === true
    })

    expect(useFetch).toBeCalledWith('http://localhost:5000/api/product')
    expect(container).toHaveTextContent('product')
    expect(productList).toHaveLength(2)
  })
})
