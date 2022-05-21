import Head from "next/head";
import AI from "../components/Form/AI/AI";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fun with AI</title>
				<meta name="description" content="OpenAI" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<AI />
			</main>
		</div>
	);
}
