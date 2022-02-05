
import onePieceService from "../services/onePiece.service.js"

const getRandomImage = (req, res)=> {
  res.status(200).send({
    message: onePieceService.getRandomImage(),
    status: 'success'
  })
}


export default {
  getRandomImage
}