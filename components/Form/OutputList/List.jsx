import {
	Box,
	Grid,
	GridItem,
	Flex,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";

const List = ({ results }) => {
	const colorTheme = useColorModeValue("peachpuff", "#202023");
	const fontColor = useColorModeValue("black", "white");
	const boxShadowColor = useColorModeValue(
		"6px 5px 10px grey",
		"6px 5px 10px white"
	);
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<Flex mb={10} align="center" justify="center">
			<Grid w="80%" autoColumns gap={5}>
				{results.length > 0
					? results.map((item, idx) => {
							const { prompt, result } = item;
							const startIdx = result.indexOf("1");
							const newResult = result.slice(startIdx);

							return (
								<Box
									className="list-item"
									boxShadow={boxShadowColor}
									borderRadius="10px"
									width="100%"
									bg={colorTheme}
									key={idx}
								>
									{isMobile ? (
										<>
											<Box textDecorationLine="underline">Prompt:</Box>
											<Box p={2} as="p">
												{prompt}
											</Box>

											<Box textDecorationLine="underline">Response:</Box>
											<Box as="p" p={2}>
												{newResult}
											</Box>
										</>
									) : (
										<>
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
										</>
									)}
								</Box>
							);
					  })
					: null}
			</Grid>
		</Flex>
	);
};

export default List;
