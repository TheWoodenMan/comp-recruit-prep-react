import React from "react";
import AlertContext from "../../src/context/alert/AlertContext";
import { AlertProvider } from "../../src/context/alert/AlertContext";
import { useParameter } from "@storybook/manager-api";

const AlertDecorator = (Story, AlertContext) => {
	return (
		<div>
			<AlertProvider>
				<Story />
			</AlertProvider>
		</div>
	);
};

export default AlertDecorator;
