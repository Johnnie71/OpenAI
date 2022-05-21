import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
	initialColorMode: "system",
	useSystemColorMode: false,
};

const theme = extendTheme({ config });
export default theme;
