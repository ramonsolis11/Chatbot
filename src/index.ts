import MockAdaptar from '@bot-whatsapp/database/mock'
import BotWhatsapp from '@bot-whatsapp/bot'
import database from './database';
import provider from './provider';
import flow from './flow';
import { initServer } from "./services/http";
import { MockAdaptar } from '@bot-whatsapp/database/mock';

const flujoDeSaludar = BotWhatsapp.addKeyword('hola' , 'buenas'])
.addAnswer('¡Hola! Bienvenido al Chatbot de Innova Web Marketing. Estoy aquí para ayudarte con tus preguntas y proporcionarte asistencia. ¿En qué puedo ayudarte hoy?')

/**
 * Funcion principal del bot
 */
const main = async () => {


    const botFLow = BotWhatsapp.addKeyword('hola').addAnswer('Buenas!') as any

    console.log(botFLow.toJson())
    console.log({ botFLow })

    const botInstance = await BotWhatsapp.createBot({
        database,
        provider,
        flow
    })

    initServer(botInstance)
}


main()
