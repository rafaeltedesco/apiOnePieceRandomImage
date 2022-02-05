import express from 'express'
import { pageNotFound } from './src/controllers/404.controller.js'
import onePieceRouter from './src/routes/onePiece.route.js'

const app = express()

app.use(onePieceRouter)
app.use(pageNotFound)

app.listen(3000, ()=> console.log('Server up and running on port 3000'))