import MockAdaptar from '@bot-whatsapp/database/mock';
import BotWhatsap from '@bot-whatsapp/bot';
import ProviderWS from '@bot-whatsapp/provider/baileys';

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
