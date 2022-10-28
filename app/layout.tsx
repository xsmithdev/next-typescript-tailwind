import Head from "next/head";
import "./globals.css";

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<title>Next.js</title>
			</Head>
			<body className="dark:bg-black dark:text-white">{children}</body>
		</html>
	);
}
