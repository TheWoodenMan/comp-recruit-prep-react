import { ReactNode } from "react";
import { Question } from "../../components/questions/QuestionResultsTypes";

export interface APIContextType {
	questions: Question[];
	loading: boolean;
	question: Question;
	dispatch: Dispatch;
}

export type Dispatch = (obj: { type: string; payload?: any }) => void;

export interface APIProviderProps {
	children: ReactNode;
}
