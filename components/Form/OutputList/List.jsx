import React from "react";

const List = ({ results }) => {
	return (
		<div>
			{results.map((res, idx) => (
				<>
					<h1 key={idx}>Prompt: {res.prompt}</h1>
					<p>Response: {res.result}</p>
				</>
			))}
		</div>
	);
};

export default List;
