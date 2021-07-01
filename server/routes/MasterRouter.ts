import { Router } from 'express'
import ProductRouter from './product/ProductRouter'
import ReviewRouter from './review/ReviewRouter'

class MasterRouter {
  private _router = Router()
  private _productRouter = ProductRouter
  private _reviewRouter = ReviewRouter

  constructor() {
    this._configure()
  }

  private _configure() {
    this._router.use('/product', this._productRouter)
    this._router.use('/review', this._reviewRouter)
  }

  get router() {
    return this._router
  }
}

export = new MasterRouter().router
