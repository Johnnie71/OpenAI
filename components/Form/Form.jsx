const Form = ({ setDirections, directions }) => {
	async function submitHandler(e) {
		e.preventDefault();
	}

	const changeHandler = (e) => {
		let directions = e.target.value;
		setDirections(directions);
	};

	return (
		<form onSubmit={submitHandler}>
			<textarea
				type="text"
				placeholder="Create a sentence that consists of directions"
				value={directions}
				onChange={changeHandler}
			/>
			<input type="submit" value="Generate directions" />
		</form>
	);
};

export default Form;
