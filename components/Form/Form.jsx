import { useState } from "react";
import {
	FormControl,
	Button,
	Textarea,
	Flex,
	Box,
	Heading,
} from "@chakra-ui/react";

const Form = ({ setResults }) => {
	const [directionsInput, setDirectionsInput] = useState("");

	async function submitHandler(e) {
		e.preventDefault();

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
		// console.log(data.prompt, data.result);
		setResults(data);
		setDirectionsInput("");
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
							<Textarea
								placeholder="Create a sentence that consists of directions"
								value={directionsInput}
								onChange={changeHandler}
								size="lg"
							/>
						</FormControl>
						<Button width="full" mt={4} type="submit">
							Submit
						</Button>
					</form>
				</Box>
			</Box>
		</Flex>
	);
};

export default Form;
