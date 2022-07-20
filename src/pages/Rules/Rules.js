import "./Rules.css";
import { BsSymmetryHorizontal } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "hooks";

export const Rules = () => {
  const navigateTo = useNavigate();

  useDocumentTitle("Rules | Quizzers");

  return (
    <div className="section rules">
      <h1>Rules</h1>
      <div className="rules__list">
        <div className="rules__list-item">
          <BsSymmetryHorizontal />
          <p>There are a total of 10 Questions.</p>
        </div>
        <div className="rules__list-item">
          <BsSymmetryHorizontal />
          <p>Each Question carries 10 points. There is no negative marking.</p>
        </div>
        <div className="rules__list-item">
          <BsSymmetryHorizontal />
          <p>It is compulsory to answer every question.</p>
        </div>
        <div className="rules__list-item">
          <BsSymmetryHorizontal />
          <p>You cannot browse through the questions.</p>
        </div>
        <div className="rules__list-item">
          <BsSymmetryHorizontal />
          <p>There is no time limit constraint to attempt the question.</p>
        </div>
        <div className="rules__list-item">
          <BsSymmetryHorizontal />
          <p>
            Final Scores will be displayed at the end of the quiz with Correct Answers.
          </p>
        </div>
      </div>
      <button
        className="btn btn--outline-primary"
        onClick={() => navigateTo("/quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};
