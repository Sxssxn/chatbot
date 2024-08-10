const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowPrincipal = addKeyword(['cemento', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer(
        [
            '- *Cemento Ultracem, 50 kg* – Durabilidad que tus clientes apreciarán 💪',
            '- *Cemento Ecocem, 50 kg* – Opción ecológica que destaca 🌿',
            '- *Cemento País, 50 kg* – Calidad constante que genera confianza 🏠',
            '- *Cemento Oriente, 50 kg* – Rendimiento superior que hace la diferencia 📦',
            '- *Pegantes PegoForte, 25 kg* – Fijación perfecta para cerámica y porcelanato 🔨'
        ],
        null,
        null,
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
