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
			<div className="card shadow-md compact side bg-base-100">
				<div className="flex-row items-center space-x-4 card-body">
					<div>
						<h2 className="card-title">{question}</h2>
						<a
							className="text-base-content text-opacity-40"
							onClick={handleClick}
							style={{ cursor: "pointer" }}
						>
							Customise
						</a>
						<div>
							{values[0] &&
								values.map((value: string, i: number) => (
									<Chip className="m-1" value={value} key={`${_id}` + `${i}`} />
								))}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	) : (
		<></>
	);
};

export default QuestionItem;
