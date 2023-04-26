import "./App.css";
import React from "react";
import Page from "./components/layout/Page";
import AppRouter from "./AppRouter";
import { AlertProvider } from "./context/alert/AlertContext";
import { APIProvider } from "./context/API/APIContext";

function App() {
	return (
		<React.Fragment>
			<APIProvider>
				<AlertProvider>
					<Page title={"Comp Recruitment Prepper"}>
						<AppRouter />
					</Page>
				</AlertProvider>
			</APIProvider>
		</React.Fragment>
	);
}

export default App;
