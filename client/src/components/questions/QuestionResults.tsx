import React from "react";
import { useContext } from "react";
import Spinner from "../Spinner";
import QuestionItem from "./QuestionItem";
import { Question } from "./QuestionResultsTypes";
import APIContext from "../../context/API/APIContext";

const QuestionResults: React.FC = () => {
	const APIQuestionContext = useContext(APIContext);

	if (APIQuestionContext == null) return <div>No Context Found</div>;
	const { questions, loading } = APIQuestionContext;

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
				{questions[0]._id &&
					questions.map((question: Question) => (
						<QuestionItem question={question} key={question._id} />
					))}
			</div>
		);
	} else {
		return <Spinner />;
	}
};

export default QuestionResults;
