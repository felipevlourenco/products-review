import fetch, { Response } from 'node-fetch'

class ProductController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`
    }
  }

  getProducts() {
    return fetch('http://localhost:3001/product')
      .then((res: Response) => res.json())
  }

  getProduct(id: string) {
    return fetch(`http://localhost:3001/product/${id}`)
      .then((res: Response) => res.json())
  }
}

export = new ProductController()
