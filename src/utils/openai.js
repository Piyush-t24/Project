import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Use import.meta.env in Vite
  dangerouslyAllowBrowser: true, // Allow API calls from the browser
});

export const generateNEETQuestion = async () => {
  const prompt = `Generate a multiple-choice question for the NEET exam. Include the question, four options, and the correct answer. Format the response as a JSON object like this:
  {
    "question": "What is the chemical formula of water?",
    "options": ["H2O", "CO2", "NaCl", "O2"],
    "correctAnswer": "H2O"
  }`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return JSON.parse(response.choices[0].message.content);
};
