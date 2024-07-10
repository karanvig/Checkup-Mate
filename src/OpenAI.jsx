// src/OpenAI.jsx
import OpenAI from 'openai';



const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

const OpenAi = new OpenAI({
  apiKey: openAiApiKey,
  dangerouslyAllowBrowser: true
});

export default OpenAi;
