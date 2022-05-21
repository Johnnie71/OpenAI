import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function aiRequest(req, res) {
	const completion = await openai.createCompletion("text-curie-001", {
		prompt: generatePrompt(req.body.directions),
		temperature: 0.3,
		max_tokens: 64,
		top_p: 1.0,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
	});
	// console.log(req.body.prompt, completion.data);
	res
		.status(200)
		.json({ prompt: req.body.prompt, result: completion.data.choices[0].text });
}

function generatePrompt(directions) {
	return `Create a numbered list of turn-by-turn directions from this text: ${directions}`;
}

export default aiRequest;
