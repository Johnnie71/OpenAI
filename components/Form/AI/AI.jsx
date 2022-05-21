import { useState, useEffect } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggler/ThemeToggle";

const AI = () => {
	const [results, setResults] = useState([]);

	// useEffect(() => {
	// 	// localStorage.setItem("results", results);
	// }, [results]);

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
