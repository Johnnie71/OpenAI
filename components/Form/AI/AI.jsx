import { useState, useEffect, useRef } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggler/ThemeToggle";

const AI = () => {
	// let savedResults = useRef();
	const [results, setResults] = useState([]);

	useEffect(() => {
		const data = window.localStorage.getItem("results");
		if (data !== null) setResults(JSON.parse(data));
	}, []);

	useEffect(() => {
		window.localStorage.setItem("results", JSON.stringify(results));
	}, [results]);

	const setResultsHandler = (data) => {
		let result = { prompt: data.prompt, result: data.result };
		setResults([result, ...results]);
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
