import classNames from "classnames";
import { useQuiz } from "contexts";
import { useDocumentTitle } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizQuestion.css";

export const QuizQuestion = () => {
  const { questions, score, quizDispatch } = useQuiz();
  const [selectedOption, setSelectedOption] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const { question, options, correctAnswer } = questions[questionIndex];
  const navigateTo = useNavigate();

  useDocumentTitle("Quiz | Quizzers");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    quizDispatch({ type: "ADD_TO_SELECTED_OPTIONS", payload: option });
    option === correctAnswer && quizDispatch({ type: "INCREMENT_SCORE" });
  };

  const handleNextQuestion = () => {
    setSelectedOption("");
    questionIndex !== 9
      ? setQuestionIndex((index) => index + 1)
      : navigateTo("/result");
  };
  return (
    <div className="section quiz">
      <h2>JavaScript Quiz</h2>
      <div className="quiz__card">
        <div className="quiz__header">
          <p>Question : {questionIndex + 1} / 10</p>
          <p>Score : {score}</p>
        </div>
        <div className="quiz__question">{question}</div>
        <div className="quiz__options">
          {options.map((option, index) => {
            return (
              <button
                key={index}
                className={classNames("quiz__option", {
                  "quiz__option--incorrect":
                    selectedOption === option && option !== correctAnswer,
                  "quiz__option--correct":
                    selectedOption && option === correctAnswer,
                })}
                onClick={() => handleOptionSelect(option)}
                disabled={selectedOption}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <button
        className={classNames("btn btn--outline-primary", {
          "btn--disabled": !selectedOption,
        })}
        onClick={handleNextQuestion}
        disabled={!selectedOption}
      >
        {questionIndex !== 9 ? "Next Question" : "Results"}
      </button>
    </div>
  );
};
