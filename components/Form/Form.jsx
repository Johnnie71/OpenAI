import { useState } from "react";

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
		<form onSubmit={submitHandler}>
			<textarea
				type="text"
				placeholder="Create a sentence that consists of directions"
				value={directionsInput}
				onChange={changeHandler}
			/>
			<input type="submit" value="Generate directions" />
		</form>
	);
};

export default Form;
