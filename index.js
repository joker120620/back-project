const fs = require('fs');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000
let codes=[]
let session=false;
console.log('iniciando bot')
  client.on('qr', qr => {
    codes[0]=`https://quickchart.io/qr?text=${qr}&size=1000&ecLevel=q&centerImageUrl=https://i.ibb.co/3BbYsWp/logo-2.jpg&format=png`
    //comentario temporal
    qrcode.generate(qr, {small: true});
    
  });
  client.on('ready', () => {
    console.log('Bot conectado');
    client.sendMessage('573133085614@c.us' , 'servicio iniciado');
    session=true;
    codes[0]=''
  });
///fuctions del bot
botSendMenssage(client, 'hola', 'holi')
botSendImages(client,'Hola en que te puedo ayudar??', MessageMedia)
  client.initialize();
app.get('/', (req, res) => {
  res.send('server online')
})
app.post('/getcode', async (req, res) => {
  if(req.body.token=='12345'){
    if(session){
      res.json({"qrcode":"none", "msj": "session ya iniciada"})
    }else{
      res.json({"qrcode":codes[0], "msj": "Escanea el Codigo"})
    }
    
  }else{
    res.json({"qrcode":"none" , "msj": "token Incorrecto"})
  }
})
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})