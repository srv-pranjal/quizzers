import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="wrapper">
      <Link to="/">
        <em>
          <h2 className="wrapper__title">QUIZZERS</h2>
        </em>
      </Link>
    </header>
  );
};
