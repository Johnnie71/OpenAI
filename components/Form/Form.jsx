import React from "react";

const Form = () => {
	return (
		<form onSubmit={null}>
			<input
				type="text"
				name="input"
				placeholder="Create a sentence that consists of directions"
			/>
			<input type="submit" value="Generate directions" />
		</form>
	);
};

export default Form;
