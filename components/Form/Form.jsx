import React, { useState } from "react";

const Form = () => {
	const [directions, setDirections] = useState("");

	async function submitHandler(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={submitHandler}>
			<textarea
				type="text"
				placeholder="Create a sentence that consists of directions"
				value={directions}
				onChange={(e) => setDirections(e.target.value)}
			/>
			<input type="submit" value="Generate directions" />
		</form>
	);
};

export default Form;
