import { Question } from "../../components/questions/QuestionResultsTypes";

export type APIActionType =
	| { type: "GET_QUESTIONS"; payload: Question[] }
	| { type: "SET_LOADING" }
	| { type: "CLEAR_QUESTIONS" };
