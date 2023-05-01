import React from "react";
import { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Input, Button } from "@material-tailwind/react";
import AlertContext from "../context/alert/AlertContext";

const Login = () => {
	const [username, setUsername] = useState("");

	const alertSearchContext = useContext(AlertContext);

	if (alertSearchContext == null) return <div>No Alerts Found</div>;
	const { setAlert } = alertSearchContext;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (username === "") {
			setAlert("please enter a username", "error");
		} else if (username.length < 10) {
			setAlert("username too short", "error");
		} else {
			console.log(username);
		}
	};

	const loginInput = document.getElementById("loginInput");

	return (
		<div>
			<div className="container flex mt-10 ml-20">
				<div className="left w-96 px-5 py-5 shadow-md">
					<Button
						size="lg"
						variant="outlined"
						className="icon flex mx-auto mt-3"
					>
						<FcGoogle className="mr-5 mt-1" />
						<span>Sign in with Google</span>
					</Button>
				</div>
				<div className="right w-50 pr-20 py-5 shadow-md ml-20">
					<form action="submit" onSubmit={handleSubmit}>
						<div className="flex flex-col ml-20 w-96 lg-w-5/6">
							<div className="py-3">
								<Input
									id="loginInput"
									onChange={handleChange}
									label="enter username"
									className="input"
								/>
							</div>
							<div className="pb-3">
								<Input id="password" label="enter password" className="input" />
							</div>
							<Button
								type="submit"
								className="btn btn-lg mb-5"
								onSubmit={() => console.log(username)}
							>
								Login
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
