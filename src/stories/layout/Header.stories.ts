import "../../index.css";
import type { Meta, StoryObj } from "@storybook/react";
import Header from "../../components/layout/Header";

const meta = {
	title: "Example/Header",
	component: Header,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen"
	}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserTrue: Story = {
	args: { user: true }
};

export const UserFalse: Story = {
	args: { user: false }
};
