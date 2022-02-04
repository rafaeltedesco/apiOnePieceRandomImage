

const getRandomImage = (req, res)=> {
  res.send({
    message: 'https://images.dog.ceo/breeds/malinois/n02105162_4426.jpg',
    status: 'sucess'
  })
}


export default {
  getRandomImage
}