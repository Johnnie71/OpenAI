import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";

const ThemeToggle = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label="Toggle Theme"
			icon={useColorModeValue()}
		></IconButton>
	);
};

export default ThemeToggle;
