import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Search from "./pages/Search";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Question from "./pages/Question";
import Docs from "./pages/Docs";
import Login from "./pages/Login";
import UserContext from "./context/user/UserContext";

const AppRouter = () => {
	const UserSearchContext = useContext(UserContext);

	if (UserSearchContext == null) return <div>No Context Found</div>;
	const { user } = UserSearchContext;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={user ? <Home /> : <Search />} />
				<Route path="/about" element={<About />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/question:id" element={<Question />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/login" element={user ? <Search /> : <Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
