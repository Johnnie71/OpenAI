import { useState, useEffect } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggler/ThemeToggle";

const AI = () => {
	const [results, setResults] = useState(() => {
		// get results from local storage
		const savedResults = localStorage.getItem("results");

		// if there are results stored
		if (savedResults) {
			// return the parsed JSON object back to a javascript object
			return JSON.parse(savedResults);
		} else {
			// return an empty array
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem("results", JSON.stringify(results));
	}, [results]);

	const setResultsHandler = (data) => {
		let result = { prompt: data.prompt, result: data.result };
		setResults((currentResults) => {
			return [result, ...currentResults];
		});
	};

	return (
		<Container maxW="container.xl">
			<ThemeToggle />
			<Flex align="center" justify="center">
				<Heading>Fun with AI!</Heading>
			</Flex>
			<Form setResults={setResultsHandler} />
			<List results={results} />
		</Container>
	);
};

export default AI;
