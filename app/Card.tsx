import React from "react";

const Card = ({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) => {
	return (
		<a
			href={href}
			className={
				"m-4 max-w-[300px] rounded-[10px] border border-solid border-[#eaeaea] p-6 text-left text-inherit no-underline transition-colors duration-150 ease-in-out hover:border-[#0070f3] hover:text-[#0070f3] focus:border-[#0070f3] focus:text-[#0070f3] active:border-[#0070f3] active:text-[#0070f3] dark:border-[#222]"
			}
		>
			<h2 className="mb-4 text-2xl">{title} &rarr;</h2>
			<p className="m-0 text-xl">{description}</p>
		</a>
	);
};

export default Card;
