import { Categories, CategoryCard } from "components";
import "./Home.css";
import { categories } from "data/categories";

export const Home = () => {
  console.log(categories);
  return (
    <div className="home">
      <h3 className="home__heading">Welcome to QUIZZERS</h3>
      <p>Select the category and Get Ready to Test your Skills</p>
      <Categories />
    </div>
  );
};
