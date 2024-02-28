import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

const Heading = ({ children, className }: Props) => {
	return (
		<h1
			className={`relative w-fit text-[32px] md:text-[40px] lg:text-[48px] text-[#171717] font-semibold z-10 ${className}`}
		>
			{children}
		</h1>
	);
};

export default Heading;
