import { useState } from "react";
import Form from "../Form";

const AI = () => {
	const [results, setResults] = useState([]);

	const setResultsHandler = (data) => {
		let result = { prompt: `${data.prompt}`, result: `${data.result}` };
		// let newResults = [result, ...results];
		setResults((currentResults) => {
			return [result, ...currentResults];
		});
		console.log("result", result);
		console.log("Results List", results);
	};

	return (
		<div>
			<Form setResults={setResultsHandler} />
		</div>
	);
};

export default AI;
