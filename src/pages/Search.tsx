import QuestionSearch from "../components/questions/QuestionSearch";
import QuestionResults from "../components/questions/QuestionResults";

const Search = () => {
	return (
		<section className="container mx-auto">
			<div className="row mx-auto">
				<QuestionSearch />
				<QuestionResults />
			</div>
		</section>
	);
};

export default Search;
