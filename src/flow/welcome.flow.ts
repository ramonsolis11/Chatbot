import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * implementación de la respuesta del bot a las palabras claves
 */
export default BotWhatsapp.addKeyword(['hola' , 'buenas'])
    .addAnswer('¡Hola de nuevo! 😊 Es un placer verte por aquí. Cuéntame, ¿en qué puedo asistirte hoy? 👋')