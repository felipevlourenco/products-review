import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import ReviewsList from './../components/ReviewsList/index'

const globalRef = global
globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
const mockSuccessResponse = [
  {
    "productId": "HI333",
    "rating": 10,
    "text": "test review2"
  },
  {
    "productId": "HI333",
    "rating": 8,
    "text": "test review"
  },
  {
    "productId": "HI333",
    "rating": 7,
    "text": "777777"
  }
]
const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
})


describe('ReviewsList component', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Expect to \'test review\' text to be in the reviews list', async () => {
    const component = render(<ReviewsList productId="HI333" />)
    await waitForElementToBeRemoved(() => component.getByText('Loading...'))
    const foundText = await component.getByText('test review')
    expect(foundText.textContent).toContain('test review')
  })
})