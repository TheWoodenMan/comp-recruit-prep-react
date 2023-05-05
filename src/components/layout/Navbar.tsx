import { useState, useEffect, useContext } from "react";
import React from "react";
import {
	Avatar,
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton
} from "@material-tailwind/react";

import UserContext from "../../context/user/UserContext";

export default function Example() {
	const UserSearchContext = useContext(UserContext);

	const { user, avatar_url, username } = UserSearchContext;
	console.log(avatar_url);

	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="/about" className="flex items-center">
					About
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="/search" className="flex items-center">
					Search
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="/signup" className="flex items-center">
					SignUp
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="docs" className="flex items-center mr-5">
					Docs
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<span className="flex items-center mr-1">{username}</span>
			</Typography>
			{avatar_url && (
				<Avatar
					alt="avatar"
					className="flex items-center mr-1 font-normal"
					size="sm"
					variant="circular"
					color="blue-gray"
					src={avatar_url}
				/>
			)}
			{user && (
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="p-1 font-normal"
				>
					<a href="logout" className="flex items-center mr-3">
						Logout
					</a>
				</Typography>
			)}
		</ul>
	);

	return (
		<Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
				<Typography
					as="a"
					href="/"
					variant="small"
					className="mr-4 cursor-pointer py-1.5 font-normal"
				>
					<span>Competency Recruitment Prepper</span>
				</Typography>
				<div className="hidden lg:block">{navList}</div>
				<Button variant="gradient" size="sm" className="hidden lg:inline-block">
					<a href="login">Login</a>
				</Button>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<MobileNav open={openNav}>
				<div className="container mx-auto">
					{navList}
					<Button variant="gradient" size="sm" fullWidth className="mb-2">
						<a href="login">Login</a>
					</Button>
				</div>
			</MobileNav>
		</Navbar>
	);
}
