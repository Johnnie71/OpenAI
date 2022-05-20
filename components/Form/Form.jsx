import React, { useState } from "react";

const Form = () => {
	const [directions, setDirections] = useState("");
	return (
		<form onSubmit={null}>
			<input
				type="text-area"
				name="input"
				placeholder="Create a sentence that consists of directions"
			/>
			<input type="submit" value="Generate directions" />
		</form>
	);
};

export default Form;
