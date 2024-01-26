import MockAdaptar from '@bot-whatsapp/database/mock';
import BotWhatsapp from '@bot-whatsapp/bot'
import ProviderWS from '@bot-whatsapp/provider/baileys';



const flujoDeSaludar = BotWhatsapp.addKeyword(['hola' , 'buenas'])
.addAnswer('¡Hola! Bienvenido al Chatbot de Innova Web Marketing. Estoy aquí para ayudarte con tus preguntas y proporcionarte asistencia. ¿En qué puedo ayudarte hoy?')

/**
 * Funcion principal del bot
 */
const main = async () => {

        await BotWhatsapp.createBot({
            database: new MockAdaptar(),
            flow: BotWhatsapp.createFlow([flujoDeSaludar]),
            provider: BotWhatsapp.createProvider(ProviderWS)
        })

}

main()
