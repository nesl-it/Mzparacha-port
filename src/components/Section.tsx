import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className: String;
};

const Section = ({ className, children }: Props) => {
	return (
		<section className={`w-full px-8 md:px-15 lg:px-24 py-12 overflow-x-hidden ${className}`}>
			{children}
		</section>
	);
};

export default Section;
