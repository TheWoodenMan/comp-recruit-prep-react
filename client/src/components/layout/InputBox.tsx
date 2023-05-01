import { Input, Button } from "@material-tailwind/react";

export default function InputBox() {
	return (
		<div className="w-100 ml-5 px-3 py-3 flex">
			<Input label="Search for a question by keyword" />
			<Button className="px-3 ml-2 w-20">Submit</Button>
		</div>
	);
}
