import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Question from "./pages/Question";
import Docs from "./pages/Docs";
import Login from "./pages/Login";

const AppRouter = () => {
	const user = false;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/about" element={<About />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/question:id" element={<Question />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
