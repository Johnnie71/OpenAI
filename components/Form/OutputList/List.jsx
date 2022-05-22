import { Box, Grid, GridItem, Flex, useColorModeValue } from "@chakra-ui/react";

const List = ({ results }) => {
	const colorTheme = useColorModeValue("peachpuff", "#DEB6AB");

	// const tests = [
	// 	{
	// 		prompt:
	// 			"This is what you came for.............. ......... ....... ......... ........ ......",
	// 		response: "Rihanna",
	// 	},
	// 	{ prompt: "Imma hit you with a dose!", response: "Ciara" },
	// 	{ prompt: "Turn up the music!", response: "Chris Brown" },
	// ];
	return (
		<Flex maxW="full" align="center" justify="center">
			<Grid w="50%" autoColumns gap={5}>
				{results.length > 0
					? results.map((result, idx) => (
							<Box
								boxShadow="xl"
								borderRadius="10px"
								width="100%"
								bg={colorTheme}
								key={idx}
							>
								<Flex color="black">
									<GridItem p={5}>Prompt:</GridItem>
									<GridItem ml={20} p={5}>
										{result.prompt}
									</GridItem>
								</Flex>
								<Flex color="black">
									<GridItem p={5}>Response:</GridItem>
									<GridItem ml={16} p={5}>
										{result.response}
									</GridItem>
								</Flex>
							</Box>
					  ))
					: null}
			</Grid>
		</Flex>
	);
};

export default List;
