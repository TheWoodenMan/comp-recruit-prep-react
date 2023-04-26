import React from "react";
import { useState, useContext } from "react";
import APIContext from "../../context/API/APIContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchQuestions } from "../../context/API/APIActions";
import { Input, Button } from "@material-tailwind/react";

const QuestionSearch = () => {
	const [text, setText] = useState("");
	const APISearchContext = useContext(APIContext);
	const alertSearchContext = useContext(AlertContext);

	if (APISearchContext == null) return <div>No Context Found</div>;
	const { questions, dispatch } = APISearchContext;

	if (alertSearchContext == null) return <div>No Alerts Found</div>;
	const { setAlert } = alertSearchContext;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text === "") {
			setAlert("please enter some text", "error");
		} else {
			dispatch({ type: "SET_LOADING" });
			const questions = await searchQuestions(text).catch((err) => {
				setAlert(err.message, "error");
				throw new Error(err.name);
			});
			dispatch({ type: "GET_QUESTIONS", payload: questions });
			setText("");
		}
	};

	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 mt-5 gap-8">
			<div>
				<form action="submit" onSubmit={handleSubmit}>
					<div className="form-control flex flex-col">
						<div className="relative">
							<Input
								label="Search by values"
								value={text}
								onChange={handleChange}
							/>
							<Button
								type="submit"
								className="absolute top-0 right-0 w-36 btn btn-lg mt-5 md:mt-0"
							>
								Submit
							</Button>
						</div>
					</div>
				</form>
			</div>
			{questions && questions.length > 0 && (
				<div>
					<button
						onClick={() => dispatch({ type: "CLEAR_QUESTIONS" })}
						className="btn btn-ghost btn-lg"
					>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default QuestionSearch;
