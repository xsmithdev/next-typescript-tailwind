"use client";
import Image from "next/image";
import Card from "./Card";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
	return (
		<div className={"px-8"}>
			<main
				className={
					"flex min-h-screen flex-auto flex-grow flex-col items-center justify-center py-16"
				}
			>
				<h1 className={"m-0 text-center text-7xl"}>
					Welcome to{" "}
					<a
						href="https://nextjs.org"
						className="text text-[#0070f3] no-underline hover:underline focus:underline active:underline"
					>
						Next.js!
					</a>
				</h1>

				<p className={"my-16 text-center text-2xl"}>
					Get started by editing{" "}
					<code
						className={
							"rounded-md bg-[#fafafa] p-3 font-mono text-lg dark:bg-[#111]"
						}
					>
						pages/index.tsx
					</code>
				</p>

				<div
					className={"grid max-w-3xl grid-cols-2 items-center justify-center"}
				>
					<Card
						href="https://nextjs.org/docs"
						title="Documentation"
						description="Find in-depth information about Next.js features and API."
					/>

					<Card
						href="https://nextjs.org/learn"
						title="Learn"
						description="Learn about Next.js in an interactive course with quizzes!"
					/>

					<Card
						href="https://github.com/vercel/next.js/tree/canary/examples"
						title="Examples"
						description="Discover and deploy boilerplate example Next.js projects."
					/>

					<Card
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						title="Deploy"
						description="Instantly deploy your Next.js site to a public URL with Vercel."
					/>
				</div>
			</main>

			<footer
				className={
					"flex flex-grow items-center justify-center py-8 dark:border-[#222]"
				}
			>
				<a
					className="flex flex-grow items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={"ml-2 h-4"}>
						<Image
							className="dark:invert"
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}
