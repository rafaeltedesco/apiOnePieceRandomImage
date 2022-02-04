import express from 'express'

const app = express()


app.get('/', (req, res)=> {
  res.send({
    message: 'https://images.dog.ceo/breeds/malinois/n02105162_4426.jpg',
    status: 'sucess'
  })
})


app.listen(3000, ()=> console.log('Server up and running on port 3000'))