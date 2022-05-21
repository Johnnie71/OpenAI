import { useState } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Heading, Flex } from "@chakra-ui/react";

const AI = () => {
	const [results, setResults] = useState([]);

	const setResultsHandler = (data) => {
		let result = { prompt: data.prompt, result: data.result };
		setResults((currentResults) => {
			return [result, ...currentResults];
		});
	};

	return (
		<Container maxW="container.xl">
			<Heading>Fun with AI!</Heading>
			<Form setResults={setResultsHandler} />
			<List results={results} />
		</Container>
	);
};

export default AI;
