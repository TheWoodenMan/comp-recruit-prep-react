import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

const Alert: React.FC = () => {
	const alertContextType = useContext(AlertContext);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const alert = alertContextType!.alert || { type: "", msg: "" };
	return (
		<div
			className={
				alert.type === "error"
					? "flex items-start mb-4 px-2 py-2 mt-5 bg-red-300/50 rounded space-x-2 alert alert-warning shadow-lg text-base-300"
					: ""
			}
		>
			{alert.type === "error" && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="h-6 w-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			)}
			<p className="flex-1 text-base font-semibold leading-7 text-neutral-focus">
				<strong>{alert.msg}</strong>
			</p>
		</div>
	);
};

export default Alert;
