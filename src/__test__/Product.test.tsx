import React from 'react'
import { render } from '@testing-library/react'
import Product from './../components/Product'

const product = {
  "currency": "$",
  "price": 4,
  "id": "HI334",
  "name": "new product",
  "description": "description",
  "imgUrl": "https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto:sensitive,fl_lossy/c93fa315d2f64775ac1fab96016f09d1_9366/Dame_6_Shoes_Black_FV8624_01_standard.jpg"
}

const mockCallback = jest.fn(() => null)

describe('Product component', () => {
  test('Productt contains correct text', () => {
    const component = render(<Product product={product} onClick={mockCallback} />)
    const foundText = component.getByText('new product')
    expect(foundText.textContent).toContain('new product')
  })

  // test()
})
