import { useState } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container } from "@chakra-ui/react";

const AI = () => {
	const [results, setResults] = useState([]);

	const setResultsHandler = (data) => {
		let result = { prompt: data.prompt, result: data.result };
		setResults((currentResults) => {
			return [result, ...currentResults];
		});
	};

	return (
		<Container w="90%" borderWidth="2px" borderColor="red">
			<Form setResults={setResultsHandler} />
			<List results={results} />
		</Container>
	);
};

export default AI;
