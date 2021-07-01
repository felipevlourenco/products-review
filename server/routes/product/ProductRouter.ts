import { Router, Request, Response, NextFunction } from 'express'
import ProductController from '../../controllers/ProductController'

class ProductRouter {
  private _router = Router()
  private _controller = ProductController

  constructor() {
    this._configure()
  }

  private _configure() {
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      const products = await this._controller.getProducts()
      res.status(200).json(products)
    })
    this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
      const {id} = req.params
      
      if (!id) {
        res.status(404)
      }

      const product = await this._controller.getProduct(id)
      res.status(200).json(product)
    })
  }

  get router() {
    return this._router
  }
}

export = new ProductRouter().router
