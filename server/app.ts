import dotenv from 'dotenv'
import Server from './server'
import cors from 'cors'
import express from 'express'

dotenv.config({
  path: '.env'
})
const PORT = process.env.PORT || 5000
const server = new Server()
server.app.use(cors())
server.app.use(express.json())
server.app.use('/api', server.router)
server.app.listen(PORT, () => {
  console.log(`> Listening on port ${PORT}`)
})
