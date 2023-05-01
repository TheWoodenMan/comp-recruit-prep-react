import { createContext, useReducer } from "react";
import { UserContextType } from "./UserContextTypes";
import { UserProviderProps } from "./UserContextTypes";
import { UserActionType } from "./UserReducerTypes";
import UserReducer from "./UserReducer";

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
	const initialState = {
		user: false,
		userName: "",
		avatar_url: ""
	};

	const [state, dispatch] = useReducer<
		(state: any, action: UserActionType) => any
	>(UserReducer, initialState);

	return (
		<UserContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
