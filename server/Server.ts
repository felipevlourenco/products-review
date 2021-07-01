import express from 'express'
import MasterRouter from './routes/MasterRouter'

export default class Server {
  private _app = express()
  private _router = MasterRouter
  
  get app() {
    return this._app
  }
  
  get router() {
    return this._router
  }
}