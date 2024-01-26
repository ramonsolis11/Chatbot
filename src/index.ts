import MockAdaptar from '@bot-whatsapp/database/mock';
import BotWhatsap from '@bot-whatsapp/bot';
import ProviderWS from '@bot-whatsapp/provider/baileys';

/**
 * Instancia del bot
 */
const flujoDeSaludar = BotWhatsapp.addkeyword(['hola', 'buenas'])
.addAnswer('¡Hola! Bienvenido al Chatbot de Innova Web Marketing. Estoy aquí para ayudarte con tus preguntas y proporcionarte asistencia. ¿En qué puedo ayudarte hoy?')

/**
 * Funcion principal del bot
 */
const main = async () => {

    await BotWhatsapp.create({
        database: new MockAdaptar(),
        flow: BotWhatsapp.createFlow([]),
        provider: BotWhatsapp.createProvider(ProviderWS)
    })
}

main();
