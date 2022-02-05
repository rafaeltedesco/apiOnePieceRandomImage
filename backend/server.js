import express from 'express'
import onePieceRouter from './src/routes/onePiece.route.js'

const app = express()

app.use(onePieceRouter)

app.listen(3000, ()=> console.log('Server up and running on port 3000'))