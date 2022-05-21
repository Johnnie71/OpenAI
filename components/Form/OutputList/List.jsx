import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";

const List = ({ results }) => {
	const tests = [
		{
			prompt:
				"This is what you came for.............. ......... ....... ......... ........ ......",
			response: "Rihanna",
		},
		{ prompt: "Imma hit you with a dose!", response: "Ciara" },
		{ prompt: "Turn up the music!", response: "Chris Brown" },
	];
	return (
		<Flex maxW="full" align="center" justify="center">
			<Grid w="50%" autoColumns gap={5}>
				{tests.map((result, idx) => (
					<Box borderRadius="10px" width="100%" bg="peachpuff" key={idx}>
						<Flex>
							<GridItem p={5}>Prompt:</GridItem>
							<GridItem ml={20} p={5}>
								{result.prompt}
							</GridItem>
						</Flex>
						<Flex>
							<GridItem p={5}>Response:</GridItem>
							<GridItem ml={16} p={5}>
								{result.response}
							</GridItem>
						</Flex>
					</Box>
				))}
			</Grid>
		</Flex>
	);
};

export default List;
