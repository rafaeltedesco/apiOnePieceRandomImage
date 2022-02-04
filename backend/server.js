import express from 'express'
import onePieceController from './src/controllers/onePiece.controller.js'

const app = express()


app.get('/', onePieceController.getRandomImage)


app.listen(3000, ()=> console.log('Server up and running on port 3000'))