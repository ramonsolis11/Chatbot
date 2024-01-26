import OpenAI from "openai";
import { ChatCompletionAssistantMessageParam } from "openai/resources";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * 
 * @param name 
 * @param history 
 */
const run = async (name:string, history:ChatCompletionAssistantMessageParam) => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": ""
          }
        ],
        temperature: 1,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

    }

export {run}

