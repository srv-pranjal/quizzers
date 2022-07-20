export const QuizReducer = (quizState, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORY":
      return { ...quizState, selectedCategory: payload };
    case "SET_QUESTIONS":
      return { ...quizState, questions: payload };
    case "INCREMENT_SCORE":
      return { ...quizState, score: quizState.score + 10 };
    case "RESET_SCORE":
      return { ...quizState, score: 0 };
    case "RESET_SELECTED_OPTIONS":
      return { ...quizState, selectedOptions: [] };
    case "ADD_TO_SELECTED_OPTIONS":
      return {
        ...quizState,
        selectedOptions: [...quizState.selectedOptions, payload],
      };
    default:
      return quizState;
  }
};
