import { APIActionType } from "./APIReducerTypes";

const APIReducer = (state: any, action: APIActionType) => {
	// state is any for now, update when better defined
	switch (action.type) {
		case "GET_QUESTIONS":
			return {
				...state,
				questions: action.payload,
				loading: false
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true
			};
		case "CLEAR_QUESTIONS":
			return {
				...state,
				questions: [{}],
				loading: false
			};
		default:
			return state;
	}
};

export default APIReducer;
