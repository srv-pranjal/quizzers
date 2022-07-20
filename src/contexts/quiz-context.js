import React, { createContext, useContext, useEffect, useReducer } from "react";
import { QuizReducer } from "reducers";
import axios from "axios";
import { useLoader } from "contexts";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [
    { score, questions, selectedCategory, selectedOptions },
    quizDispatch,
  ] = useReducer(QuizReducer, {
    score: 0,
    questions: [],
    selectedCategory: "",
    selectedOptions: [],
  });
  const { setShowLoader } = useLoader();
  useEffect(() => {
    (async () => {
      try {
        if (selectedCategory) {
          setShowLoader(true);
          const { data } = await axios.get(
            `https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&limit=10&tags=${selectedCategory}`
          );

          const questionsArray = data.map((quesObj) => {
            const options = Object.values(quesObj.answers).filter(
              (option) => option != null
            );
            const correctAnswer =
              options[
                Object.values(quesObj.correct_answers).reduce(
                  (prev, curr, index) => (curr === "true" ? index : prev),
                  -1
                )
              ];
            return {
              id: quesObj.id,
              question: quesObj.question,
              options,
              correctAnswer,
            };
          });
          quizDispatch({ type: "SET_QUESTIONS", payload: questionsArray });
          quizDispatch({ type: "RESET_SCORE" });
          quizDispatch({ type: "RESET_SELECTED_OPTIONS" });
        }
      } catch (error) {
      } finally {
        setShowLoader(false);
      }
    })();
  }, [selectedCategory, setShowLoader]);

  return (
    <QuizContext.Provider
      value={{
        score,
        questions,
        selectedCategory,
        selectedOptions,
        quizDispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
