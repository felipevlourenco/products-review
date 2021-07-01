import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  test('App contains correct text', () => {
    const component = render(<App />)
    const expectedText = 'fetch is not defined'
    const foundText = component.getByText(expectedText)
    expect(foundText.textContent).toContain(expectedText)
  })
})
