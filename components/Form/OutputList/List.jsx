import { Box, Grid, GridItem, Flex, useColorModeValue } from "@chakra-ui/react";

const List = ({ results }) => {
	const colorTheme = useColorModeValue("peachpuff", "#DEB6AB");

	return (
		<Flex maxW="full" align="center" justify="center">
			<Grid w="50%" autoColumns gap={5}>
				{results.length > 0
					? results.map((item, idx) => {
							const { prompt, result } = item;
							const startIdx = result.indexOf("1");
							const newResult = result.slice(startIdx);

							return (
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
											{prompt}
										</GridItem>
									</Flex>
									<Flex color="black">
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
