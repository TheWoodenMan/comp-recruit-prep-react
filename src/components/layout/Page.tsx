import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Alert from "./Alert";
import AlertContext from "../../context/alert/AlertContext";
import { useContext } from "react";

type PageProps = {
	title: string | string[] | undefined;
	children: JSX.Element | JSX.Element[];
};

const Page: React.FC<PageProps> = ({ children }) => {
	const alertContextType = useContext(AlertContext);
	const alert = alertContextType?.alert || false;

	return (
		<React.Fragment>
			<Navbar />
			<main className="container mx-auto px-3 pb-12 h-5/6">
				{alert && <Alert />}
				{children}
			</main>
			<Footer />
		</React.Fragment>
	);
};
export default Page;
