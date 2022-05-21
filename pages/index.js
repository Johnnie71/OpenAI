import Head from "next/head";
import AI from "../components/Form/AI/AI";
// import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fun with AI</title>
				<meta name="description" content="OpenAI" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<AI />
			</main>
		</div>
	);
}
