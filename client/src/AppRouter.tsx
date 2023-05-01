import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Docs from "./pages/Docs";
import Login from "./pages/Login";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/about" element={<About />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
