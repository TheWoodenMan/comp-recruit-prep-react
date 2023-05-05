import { UserType } from "./UserContextTypes";

export type UserActionType =
	| { type: "LOGIN_USER"; payload: UserType }
	| { type: "SET_LOADING" }
	| { type: "LOGOUT_USER" };
