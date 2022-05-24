import { Box, Grid, GridItem, Flex, useColorModeValue } from "@chakra-ui/react";

const List = ({ results }) => {
	const colorTheme = useColorModeValue("peachpuff", "#202023");
	const fontColor = useColorModeValue("black", "white");
	const boxShadowColor = useColorModeValue(
		"6px 5px 10px grey",
		"6px 5px 10px white"
	);

	return (
		<Flex mb={10} maxW="full" align="center" justify="center">
			<Grid w="50%" autoColumns gap={5}>
				{results.length > 0
					? results.map((item, idx) => {
							const { prompt, result } = item;
							const startIdx = result.indexOf("1");
							const newResult = result.slice(startIdx);

							return (
								<Box
									boxShadow={boxShadowColor}
									borderRadius="10px"
									width="100%"
									bg={colorTheme}
									key={idx}
								>
									<Flex color={fontColor}>
										<GridItem p={5}>Prompt:</GridItem>
										<GridItem ml={20} p={5}>
											{prompt}
										</GridItem>
									</Flex>
									<Flex color={fontColor}>
										<GridItem p={5}>Response:</GridItem>
										<GridItem ml={16} p={5}>
											{newResult}
										</GridItem>
									</Flex>
								</Box>
							);
					  })
					: null}
			</Grid>
		</Flex>
	);
};

export default List;
