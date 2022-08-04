import { useAuth } from "contexts";
import { useQuiz } from "contexts";
import { Link } from "react-router-dom";
import { showToast } from "utils";
import "./CategoryCard.css";

export const CategoryCard = ({ categoryName, image }) => {
  const { quizDispatch } = useQuiz();
  const { isLoggedIn } = useAuth();
  return (
    <Link
      to="/rules"
      onClick={() => {
        quizDispatch({ type: "SET_CATEGORY", payload: categoryName });
        !isLoggedIn && showToast("info", "Please Log In to Continue");
      }}
    >
      <article className="card card--vertical card--shadow">
        <div className="card__content">
          <div className="card__img-container">
            <img src={image} className="img-responsive" alt={categoryName} />
          </div>
          <div className="card__product-details">
            <div className="card__title category__title">
              <p>{categoryName}</p>
              <p>10. Questions</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
