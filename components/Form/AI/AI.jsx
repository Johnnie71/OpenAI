import { useState, useEffect, useRef } from "react";
import Form from "../Form";
import List from "../OutputList/List";
import { Container, Flex, Heading } from "@chakra-ui/react";
import ThemeToggle from "../ThemeToggler/ThemeToggle";

const AI = () => {
	// let savedResults = useRef();
	const [results, setResults] = useState([]);
	// const [results, setResults] = useState(() => {
	// if there are results stored in localStorage
	// if (savedResults) {
	// return the parsed JSON object back to a javascript object
	// 	return savedResults;
	// } else {
	// return an empty array
	// 		return [];
	// 	}
	// });

	// useEffect(() => {
	// 	let resultsInStorage = localStorage.getItem("results");

	// 	if (resultsInStorage) {
	// 		savedResults.current = resultsInStorage;
	// 	} else {
	// 		localStorage.setItem("results", JSON.stringify(results));
	// 	}
	// }, [results]);

	const setResultsHandler = (data) => {
		console.log("DATA: ", data);
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
