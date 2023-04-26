import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Docs from "./pages/Docs";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/about" element={<About />} />
				<Route path="/search" element={<Search />} />
				<Route path="/docs" element={<Docs />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
