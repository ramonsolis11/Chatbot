import BotWhatsapp from '@bot-whatsapp/bot';
import helloFlow from './hello.flow';

/**
 * Exporta el flujo principal del bot
 */
export default BotWhatsapp.createFlow(
    [
    helloFlow
    ]
)