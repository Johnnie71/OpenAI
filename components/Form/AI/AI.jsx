import { useState } from "react";
import Form from "../Form";
import List from "../OutputList/List";

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
			<List results={results} />
		</div>
	);
};

export default AI;
