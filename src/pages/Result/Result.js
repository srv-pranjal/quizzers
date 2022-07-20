import { useQuiz } from "contexts";
import "./Result.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "hooks";

export const Result = () => {
  const { score, questions, selectedOptions } = useQuiz();
  const navigateTo = useNavigate();

  useDocumentTitle("Result | Quizzers");

  return (
    <div className="section result">
      <h1>Result</h1>
      <p className="result__score">Final Score : {score} / 100</p>
      {questions.map(({ id, question, options, correctAnswer }, index) => {
        const selectedOption = selectedOptions[index];
        return (
          <div key={id} className="quiz__card">
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
                    disabled={selectedOption}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <button
        className="btn btn--outline-primary"
        onClick={() => navigateTo("/")}
      >
        BACK TO HOME
      </button>
    </div>
  );
};
