import "../../index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Alert from "../../components/layout/Alert";
import AlertDecorator from "../../../.storybook/decorators/AlertDecorator";

const meta = {
	title: "Example/Alert",
	component: Alert,
	// decorators: [AlertDecorator],
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen"
	}
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorAlert: Story = {
	parameters: {
		errors: ["", "error", "There was an error"],
		messages: ["", "error", "404 Not Found"]
	},
	argTypes: {
		Types: {
			options: ["", "error", "warning"],
			control: { type: "radio" } // Automatically inferred when 'options' is defined
		},
		Messages: {
			options: ["", "There was an error", "404 Not Found"],
			control: { type: "radio" }
		}
	},
	decorators: [AlertDecorator]
};
