"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// components
import Section from "@/components/Section";
import Divider from "@/components/elements/Divider";
import Heading from "@/components/elements/Heading";

type Props = {};
const FEEDBACKS = [
	{
		message:
			"I had a wonderful experience and I would highly recommend this business to others.",
		name: "Brooklyn Simmon",
		position: "CEO, HCBA",
	},
	{
		message:
			"I had a wonderful experience and I would highly recommend this business to others.",
		name: "Brooklyn Simmos",
		position: "CEO, HCBA",
	},
	{
		message:
			"I had a wonderful experience and I would highly recommend this business to others.",
		name: "Brookyn Simmons",
		position: "CEO, HCBA",
	},
];

const Section6 = (props: Props) => {
	return (
		<Section className="bg-dark-1 !py-20">
			<div className="w-full flex flex-col lg:flex-row max-lg:gap-16">
				<div className="lg:w-1/2">
					<Heading className="text-white uppercase">
						WHAT&nbsp;
						<span className="text-black bg-primary rounded">OTH</span>
						ERS
						<br />
						SAY ABOUT US
					</Heading>
					<Divider className={"!w-20 mt-4"} />
				</div>

				<Slider
					arrows={false}
					dots={true}
					infinite={true}
					speed={500}
					slidesToShow={1}
					slidesToScroll={1}
					className="w-full lg:w-1/2"
					dotsClass="slick-dots !w-fit !flex"
					customPaging={function (i) {
						return (
							<div className="small-carousel h-2 aspect-square bg-[#A7A7A7] mt-7" />
						);
					}}
				>
					{FEEDBACKS?.map(({ message, name, position }, index) => (
						<div className="lg:max-w-[510px]" key={index + name}>
							<p className="text-lg md:text-xl lg:text-2xl">
								{"“" + message + "”"}
							</p>
							<p className="text-sm md:text-lg text-[#A7A7A7] mt-2">
								{name + " - " + position}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</Section>
	);
};

export default Section6;
