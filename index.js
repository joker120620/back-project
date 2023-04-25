const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000
let codes = []
function crearCliente(name) {
  const client = new Client({
    authStrategy: new LocalAuth({ clientId: `${name}` })
  });
  return client
}
const client = crearCliente('base')
console.log('iniciando bot')
client.on('qr', qr => {
  codes[0] = qr
  //comentario temporal
  qrcode.generate(qr, { small: true });

});
client.on('ready', () => {
  console.log('Bot conectado');
  client.sendMessage('573133085614@c.us', 'servicio iniciado');
  session = true;
  codes[0] = ''
});
client.initialize();
client.on('message', async message => {
  if (message.body=='hola') {
      const media = await MessageMedia.fromUrl('https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067');
      this.client.sendMessage(message.from, media, { caption: 'hi' });
  }
  
});
app.get('/', (req, res) => {
  res.send('server online')
})
app.get('/getcode', async (req, res) => {
  res.json({ "qrcode": codes[0], "msj": "Escanea el Codigo" })
})
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
