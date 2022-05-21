import {
	useColorMode,
	useColorModeValue,
	IconButton,
	Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<Box flex={1} align="right">
			<IconButton
				aria-label="Toggle Theme"
				icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
				onClick={toggleColorMode}
				variant="ghost"
			></IconButton>
		</Box>
	);
};

export default ThemeToggle;
