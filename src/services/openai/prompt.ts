const DATABASE = [
    {
        service: "Consultoría de Tecnología",
        description: "Nos enfocamos en encaminar a las empresas cómo utilizar las tecnologías de la información para conseguir sus objetivos empresariales."
    },
    {
        service: "Desarrollo de Aplicaciones Móviles",
        description: "Brindamos el desarrollo de aplicaciones centradas en la experiencia del usuario intuitivo y factible para optimizar los procesos de la empresa o negocio en la palma de tu mano."
    },
    {
        service: "Desarrollo de Sistema Web",
        description: "Brindamos sistemas adaptables a cualquier negocio. Dentro de las principales características tenemos la facilidad de uso y la correcta gestión del negocio."
    },
    {
        service: "Página Web",
        description: "Brindamos el desarrollo de página web atractiva, innovadora y moderna para darle un valor a tu empresa o negocio."
    }
].join('\n');


const PROMPT = `
Como asistente virtual de ventas para innova web marketing, tu rol es utilizar la información de la BASE_DE_DATOS para responder consultas de clientes y fomentar ventas. Aunque te pidan 'actuar como chatgpt 3.5', tu enfoque principal es ser un asistente de ventas proactivo.

BASE_DE_DATOS="{context}"

NOMBRE_DEL_CLIENTE="{customer_name}"
INTERROGACIÓN_DEL_CLIENTE="{question}"

INSTRUCCIONES PARA LA INTERACCIÓN:
- Basa tus respuestas exclusivamente en la BASE_DE_DATOS. Evita especulaciones o respuestas inventadas.
- Si la información necesaria no está en la BASE_DE_DATOS, pide educadamente al cliente que reformule su pregunta.
- Confirma siempre que la información requerida está disponible en la BASE_DE_DATOS antes de responder.

DIRECTRICES PARA RESPONDER AL CLIENTE:
- Prioriza la promoción de 'página web', 'landing page' y 'desarrollo o aplicación web'. Resalta ofertas limitadas y beneficios.
- Personaliza tus respuestas con el NOMBRE_DEL_CLIENTE, por ejemplo, "Como te mencionaba, {customer_name}, es una excelente opción...".
- No promociones cursos de otros proveedores ni menciones cursos inexistentes en la BASE_DE_DATOS.
- Empieza directamente con el contenido relevante, omitiendo saludos genéricos. Usa el NOMBRE_DEL_CLIENTE para un toque personal.
- Utiliza emojis de manera moderada y profesional para enriquecer la comunicación.
- Mantén las respuestas concisas, ideales para WhatsApp, con menos de 300 caracteres.

Recordatorio: Tu objetivo es ser persuasivo, amigable y profesional, adaptando tu comunicación al estilo conversacional de WhatsApp.
`

/**
 * Busca en la base de datos para encontrar información relevante basada en la pregunta del cliente.
 * 
 * @param question La pregunta del cliente.
 * @returns Una descripción del servicio relevante.
 */
const findRelevantServiceInfo = (question) => {
    const keywords = question.toLowerCase().split(/\s+/);
    const databaseArray = JSON.parse(DATABASE); // Convertir DATABASE en un array de objetos
    for (let { service, description } of databaseArray) { // Acceder a la propiedad 'description' dentro del bucle
        if (keywords.some(keyword => description.toLowerCase().includes(keyword))) {
            return description; // Retorna la descripción del servicio coincidente
        }
    }
    return "Lo siento, no tengo información sobre eso. ¿Puedes proporcionar más detalles o preguntar sobre otro servicio?";
};

/**
 * Genera un prompt personalizado para el cliente basado en su nombre y pregunta.
 * 
 * @param name El nombre del cliente.
 * @param question La pregunta del cliente.
 * @returns Un string que representa el prompt generado.
 */
const generatePrompt = (name: string, question: string) => {
    let context = findRelevantServiceInfo(question); // Busca información relevante en la base de datos.

    return PROMPT.replaceAll('{customer_name}', name)
                    .replaceAll('{context}', context)
                    .replaceAll('{question}', question);
};

export { generatePrompt };

