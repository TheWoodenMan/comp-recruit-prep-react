import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const API = axios.create({
	baseURL: API_URL
	// { Authorization: `${API_TOKEN}` }
});

// search for a range of questions based on text input
export const searchQuestions = async (text: string) => {
	console.log(API_URL);
	const response = await API.get(`/questions/value/${text}`);
	return response.data;
};

// get a single user and repos

export const getQuestionAndValues = async (id: string) => {
	const question = await Promise.all([API.get(`/questions/${id}`)]);
	return { question: question };
};
