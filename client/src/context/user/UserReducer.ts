import { UserActionType } from "./UserReducerTypes";

const UserReducer = (state: any, action: UserActionType) => {
	// state is any for now, update when better defined
	switch (action.type) {
		case "LOGIN_USER":
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
		case "LOGOUT_USER":
			return {
				...state,
				questions: [{}],
				loading: false
			};
		default:
			return state;
	}
};

export default UserReducer;
