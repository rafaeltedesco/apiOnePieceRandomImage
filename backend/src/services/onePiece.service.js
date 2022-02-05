
import { getImages } from '../repository/onePiece.repository.js'


const getRandomImage = ()=> {
  const images = getImages()
  const randomImage = images[Math.floor(Math.random() * images.length)]
  return randomImage
}

export default {
  getRandomImage
}