import React from "react";
import { QuestionItemPropTypes } from "./QuestionItemTypes";
import { Chip } from "@material-tailwind/react";

const QuestionItem: React.FC<QuestionItemPropTypes> = ({
	question: { _id, question, values }
}) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		// Add in query call for new page
	};
	return _id ? (
		<React.Fragment>
			<div className="card shadow-md compact side bg-base-100 p-2 mt-3 rounded">
				<div className="flex-row items-center space-x-4 card-body">
					<div className="flex flex-col justify-between">
						<h2 className="card-title">{question}</h2>

						<div className="mt-3">
							{values[0] &&
								values.map((value: string, i: number) => (
									<Chip className="m-1" value={value} key={`${_id}` + `${i}`} />
								))}
						</div>
						<a
							className="text-base-content text-opacity-40 justify-self-end"
							onClick={handleClick}
							style={{ cursor: "pointer" }}
						>
							Edit
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	) : (
		<></>
	);
};

export default QuestionItem;
