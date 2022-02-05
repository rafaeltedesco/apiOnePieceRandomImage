import { STATUS } from "../utils/statusCode.js"


export const pageNotFound = (req, res)=> {
  return res.status(STATUS.NOT_FOUND.CODE).send({
    message: 'Try: /api/v1/onepiece/image/random',
    status: STATUS.NOT_FOUND.MSG,
  })
}