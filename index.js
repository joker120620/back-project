const fs = require('fs');
const {Bot} = require('./src/functions.js')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000
Bot.start()
////enviar mensaje  dependiendo el msj que recibe example. 
// recibe: hola envia: como estas?
Bot.sendMenssageCustomQA('hi','como estas?')
////Enviar imagenes 
Bot.answersQuerys()
console.log('end bot')
app.get('/', (req, res) => {
  res.send('server online')
})
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})