import { useAuth } from "contexts";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="wrapper">
      <Link to="/">
        <em>
          <h2 className="wrapper__title">QUIZZERS</h2>
        </em>
      </Link>
      <nav className="nav">
        {isLoggedIn ? (
          <Link
            to="/profile"
            className="avatar avatar--xs avatar--primary"
            title="Profile"
          >
            {user.displayName[0]}
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn--outline-primary login-btn"
            role="button"
          >
            <i className="fa fa-user-circle "></i>
            <span>Login</span>
          </Link>
        )}
      </nav>
    </header>
  );
};
