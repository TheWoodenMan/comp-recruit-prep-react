import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Page from "../../components/layout/Page";
import AlertDecorator from "../../../.storybook/decorators/AlertDecorator";
import Alert from "../../components/layout/Alert";

const meta = {
	title: "Example/Page",
	component: Page,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen"
	}
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const NoContent: Story = {
	args: {
		title: "Page",
		children: React.createElement(Alert)
	},
	decorators: [AlertDecorator]
};
