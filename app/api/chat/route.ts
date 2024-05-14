export const dynamic = "force-dynamic";

const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY ?? "",
});

const model = "llama3-8b-8192";

export async function POST(req: Request) {
  // Extract the `message` from the body of the request
  const body = await req.json();
  const { message, word, definition } = body;

  // Call the language model
  const res = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are Vocab Genie. You are a grader assessing relevance of a word definition to a user input. If the user input contains keywords related to the definition, grade it as relevant. It does not need to be a stringent test. The goal is to help the user learn the meaning of the word. \n Give a binary score 'yes' or 'no' score to indicate whether the document is relevant to the question. \n Provide the binary score as a JSON with two keys 'score' and a 'explanation'. Explanation should be concise, directed towards the user to help them. \n Here is the word: \n\n ${word} \n\n Here is the definition: \n\n ${definition} \n\n`,
      },
      {
        role: "user",
        content: `User definition: ${message}`
      },
    ],
    model: model,
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    response_format: {
      type: "json_object",
    },
    stop: null,
  });

  // Return the response
  const data = JSON.parse(res.choices[0].message.content);
  return Response.json({ data });
}
