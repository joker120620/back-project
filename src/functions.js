// este bot basado en la libreria "whatsapp-web-js" creado por Juan David Toloza Ortega 
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
class bot {
    constructor(client) {
        this.client = client;
    }
    start() {
        this.client.initialize();
        console.log('iniciando bot')
        this.client.on('qr', qr => {
            console.log('codigo Generado')
            console.log('-----------------------------------------------------------------------------------------------------')
            console.log(qr)
            console.log('-----------------------------------------------------------------------------------------------------')
            qrcode.generate(qr, { small: true });

        });
        this.client.on('ready', () => {
            console.log('Bot conectado');
            this.client.sendMessage('573133085614@c.us', 'servicio iniciado');
        });
    }
    sendMenssageCustomQA(resive, response) {
        this.client.on('message', message => {
            if (message.body === resive) {
                console.log(message.from)
                this.client.sendMessage(message.from, response);
            }
        });
    }
    answersQuerys() {
        this.client.on('message', async message => {
            if (message.body=='hola') {
                const media = await MessageMedia.fromUrl('https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067');
                this.client.sendMessage(message.from, media, { caption: 'hi' });
            }
            
        });
    }
}
function crearCliente(name) {
    const client = new Client({
        authStrategy: new LocalAuth({ clientId: `${name}` })
    });
    return client
}
const base = crearCliente('base')
module.exports.Bot = new bot(base)

