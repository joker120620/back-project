const {Bot} = require('./functions.js')
//lo importe de esta manera pq si xdd
//este bot esta ya estructurado listo para usarlo
//Bot.saludo('juan')
//iniciar el bot
Bot.start()
////enviar mensaje  dependiendo el msj que recibe example. 
// recibe: hola envia: como estas?
Bot.sendMenssageCustomQA('hi','como estas?')
////Enviar imagenes 
Bot.answersQuerys()