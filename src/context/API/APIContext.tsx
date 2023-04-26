import { createContext, useReducer } from "react";
import APIReducer from "./APIReducer";
import { APIContextType } from "./APIContextTypes";
import { APIProviderProps } from "./APIContextTypes";
import { APIActionType } from "./APIReducerTypes";

const APIContext = createContext<APIContextType | null>(null);

export const APIProvider = ({ children }: APIProviderProps) => {
	const initialState = {
		questions: [{}],
		question: {},
		loading: false
	};

	const [state, dispatch] = useReducer<
		(state: any, action: APIActionType) => any
	>(APIReducer, initialState);

	return (
		<APIContext.Provider value={{ ...state, dispatch }}>
			{children}
		</APIContext.Provider>
	);
};

export default APIContext;
