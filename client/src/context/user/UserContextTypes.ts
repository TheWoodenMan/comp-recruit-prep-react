import { ReactNode } from "react";

export type UserType = {
	user: boolean;
	username: string;
	avatar_url: string;
};

export interface UserContextType {
	user: boolean;
	username: string;
	avatar_url: string;
	dispatch: Dispatch;
}

export type Dispatch = (obj: { type: string; payload?: any }) => void;

export interface UserProviderProps {
	children: ReactNode;
}
