import { useState } from "react";
import {
	FormControl,
	Button,
	Textarea,
	Flex,
	Box,
	FormErrorMessage,
	CircularProgress,
	useColorModeValue,
} from "@chakra-ui/react";

const Form = ({ setResults }) => {
	const [directionsInput, setDirectionsInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const colorTheme = useColorModeValue("teal.200", "darkOrchard");
	const blackWhite = useColorModeValue("black", "white");

	async function submitHandler(e) {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					prompt: directionsInput,
					directions: directionsInput,
				}),
			});
			const data = await response.json();
			setResults(data);
			setDirectionsInput("");
			setIsLoading(false);
		} catch {
			setError("Something went wrong! Try again.");
			setIsLoading(false);
			setDirectionsInput("");
		}
	}

	const changeHandler = (e) => {
		// if there is an error during input clear it
		if (error.length) setError("");
		setDirectionsInput(e.target.value);
	};

	return (
		<Flex
			borderWidth="2px"
			borderColor="purple"
			maxW="100%"
			mt={15}
			align="center"
			justifyContent="center"
		>
			<Box borderWidth="2px" borderColor="red" my={4}>
				<form onSubmit={submitHandler}>
					<FormControl isRequired isInvalid={error}>
						<FormErrorMessage color="red">{error}</FormErrorMessage>
						<Textarea
							borderColor={blackWhite}
							placeholder="Type in directions."
							value={directionsInput}
							onChange={changeHandler}
							w="container.sm"
							h="2xs"
							resize="both"
						/>
					</FormControl>
					<Button
						bgColor={colorTheme}
						variant="outline"
						shadow="base"
						width="auto"
						mt={4}
						type="submit"
					>
						{isLoading ? (
							<CircularProgress isIndeterminate size="24px" color="teal" />
						) : (
							"Submit"
						)}
					</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default Form;
