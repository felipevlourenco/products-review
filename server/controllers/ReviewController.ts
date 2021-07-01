import fetch, { Response } from 'node-fetch'

interface Review {
  productId: string
  locale: string
  rating: number
  text: string
}

class ReviewController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`
    }
  }

  getReview(id: string) {
    return fetch(`http://localhost:3002/reviews/${id}`).then((res: Response) => res.json())
  }

  postReview(id: string, review: Review) {
    return fetch(`http://localhost:3002/reviews/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then((res: Response) => res.json())
  }
}

export = new ReviewController()
