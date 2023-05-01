import React from "react";
import spinning_wheel from "./layout/assets/spinningwheel.gif";

const Spinner: React.FC = () => {
	return (
		<div className="w-100 mt-20">
			<img
				width={180}
				className="text-centre mx-auto"
				src={spinning_wheel}
				alt="Loading..."
			/>
		</div>
	);
};

export default Spinner;
