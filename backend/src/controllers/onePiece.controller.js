
import onePieceService from "../services/onePiece.service.js"
import { STATUS } from '../utils/statusCode.js'

const getRandomImage = (req, res)=> {
  res.status(STATUS.OK.CODE).send({
    message: onePieceService.getRandomImage(),
    status: STATUS.OK.MSG
  })
}

export default {
  getRandomImage
}