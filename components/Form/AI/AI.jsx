import { useState, useEffect, useRef } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggler/ThemeToggle";

const AI = () => {
	const [results, setResults] = useState([]);

	// on refresh gets the local storage item and sets the state
	useEffect(() => {
		const items = JSON.parse(window.localStorage.getItem("results"));
		if (items) {
			setResults(items);
		}
	}, []);

	// setting results in local storage upon page load and state update
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
