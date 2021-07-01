import { Router, Request, Response, NextFunction } from 'express'
import ReviewController from '../../controllers/ReviewController'

class ReviewRouter {
  private _router = Router()
  private _controller = ReviewController

  constructor() {
    this._configure()
  }

  private _configure() {
    this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params

      if (!id) {
        res.status(404)
      }

      const review = await this._controller.getReview(id)
      res.status(200).json(review)
    })
    this._router.post('/:id', async (req: Request, res: Response, next: NextFunction) => {
      const {
        params: { id },
        body
      } = req

      if (!id) {
        res.status(404)
      }

      if (!body || !Object.keys(body).length) {
        res.status(400)
      }

      const review = await this._controller.postReview(id, body)
      res.status(200).json(review)
    })
  }

  get router() {
    return this._router
  }
}

export = new ReviewRouter().router
