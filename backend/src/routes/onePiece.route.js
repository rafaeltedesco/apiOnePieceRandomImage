
import express from 'express'
import onePieceController from '../controllers/onePiece.controller.js'

const router = express.Router()


router.route('/api/v1/onepiece/image/random')
  .get(onePieceController.getRandomImage)


  export default router