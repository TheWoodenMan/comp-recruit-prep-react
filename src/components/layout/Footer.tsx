import React from "react";
import { Typography } from "@material-tailwind/react";
import { SiGunicorn, SiTelegraph } from "react-icons/si";
import { FaTwitterSquare, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
	return (
		<footer className="w-full p-8">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
				<IconContext.Provider value={{ color: "blue-gray" }}>
					<SiGunicorn />
				</IconContext.Provider>
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					<li>
						<Typography
							as="a"
							href="/about"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							About Us
						</Typography>
					</li>
					<li className="flex">
						<FaTwitterSquare className="mr-1 mt-1" />
						<Typography
							as="a"
							href="https://twitter.com/Andynwood79"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							Twitter
						</Typography>
					</li>
					<li className="flex">
						<FaGithub className="mr-1 mt-1" />
						<Typography
							as="a"
							href="https://github.com/TheWoodenMan/comp-recruit-prep-react"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							Contribute
						</Typography>
					</li>
					<li className="flex">
						<SiTelegraph className="mr-1 mt-1" />
						<Typography
							as="a"
							href="https://twm-business-card.netlify.app/"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							Contact Us
						</Typography>
					</li>
				</ul>
			</div>
			<hr className="my-8 border-blue-gray-50" />
			<Typography color="blue-gray" className="text-center font-normal">
				&copy; 2023 Andy Wood
			</Typography>
		</footer>
	);
}
