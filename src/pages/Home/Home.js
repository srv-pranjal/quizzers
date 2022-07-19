import { Categories } from "components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <h3 className="home__heading">Welcome to QUIZZERS</h3>
      <p>Select the category and Get Ready to Test your Skills</p>
      <Categories />
    </div>
  );
};
