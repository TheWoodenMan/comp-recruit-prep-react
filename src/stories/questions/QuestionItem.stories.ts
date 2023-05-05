import "../../index.css";
import type { Meta, StoryObj } from "@storybook/react";
import QuestionItem from "../../components/questions/QuestionItem";
import AlertDecorator from "../../../.storybook/decorators/AlertDecorator";

const meta = {
	title: "Example/QuestionItem",
	component: QuestionItem,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen"
	}
} satisfies Meta<typeof QuestionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserTrue: Story = {
	args: {
		question: {
			_id: "1",
			question: "Can you tell me about a time?",
			values: ["Never", "Gonna", "Give", "You", "Up"],
			__v: 1
		}
	},
	decorators: [AlertDecorator]
};
