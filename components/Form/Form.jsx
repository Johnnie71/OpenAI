import { useState } from "react";
import {
	FormControl,
	Button,
	Textarea,
	Flex,
	Box,
	FormErrorMessage,
	CircularProgress,
} from "@chakra-ui/react";

const Form = ({ setResults }) => {
	const [directionsInput, setDirectionsInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	async function submitHandler(e) {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch("api/generate", {
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
		setDirectionsInput(e.target.value);
	};

	return (
		<Flex w="100%" align="center" justifyContent="center">
			<Box p={2}>
				<Box my={4}>
					<form onSubmit={submitHandler}>
						<FormControl isRequired>
							<FormErrorMessage color="red">{error}</FormErrorMessage>
							<Textarea
								placeholder="Create a sentence that consists of directions"
								value={directionsInput}
								onChange={changeHandler}
								size="lg"
							/>
						</FormControl>
						<Button width="full" mt={4} type="submit">
							{isLoading ? (
								<CircularProgress isIndeterminate size="24px" color="teal" />
							) : (
								"Submit"
							)}
						</Button>
					</form>
				</Box>
			</Box>
		</Flex>
	);
};

export default Form;
