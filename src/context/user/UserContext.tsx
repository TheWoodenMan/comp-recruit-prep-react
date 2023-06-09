import { createContext, useReducer } from "react";
import { UserContextType } from "./UserContextTypes";
import { UserProviderProps } from "./UserContextTypes";
import { UserActionType } from "./UserReducerTypes";
import UserReducer from "./UserReducer";
import React from "react";

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
	const initialState = {
		user: false,
		username: "",
		email: "",
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
