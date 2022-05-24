import { useState, useEffect } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggler/ThemeToggle";

const AI = () => {
	const [results, setResults] = useState([]);

	// (restore) on refresh gets the local storage item and sets the state
	useEffect(() => {
		// checking to see if there is a key in the storage
		const items = JSON.parse(window.localStorage.getItem("results"));
		if (items) {
			setResults(items);
		}
	}, []);

	// (store) setting results in local storage upon page load and state update
	useEffect(() => {
		// only store the state if the results exists and the length is greater than 0
		// prevents state being refreshed to an empty array
		if (results?.length) {
			window.localStorage.setItem("results", JSON.stringify(results));
		}
	}, [results]);

	const setResultsHandler = (data) => {
		let result = { prompt: data.prompt, result: data.result };
		setResults([result, ...results]);
	};

	return (
		<Container minW="fit-content" maxW="container.xl">
			<ThemeToggle />
			<Flex align="center" justify="center">
				<Heading fontFamily="Roboto Mono, monospace" mt={20} className="header">
					AI Directions
				</Heading>
			</Flex>
			<Form setResults={setResultsHandler} />
			<List results={results} />
		</Container>
	);
};

export default AI;
