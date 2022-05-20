import { useState } from "react";
import Form from "../Form";

const AI = () => {
	const [responses, setResponses] = useState([]);
	console.log(responses);
	return (
		<div>
			<Form directions={directions} setDirections={setDirections} />
		</div>
	);
};

export default AI;
