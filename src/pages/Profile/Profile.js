import { useAuth, useLoader } from "contexts";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { FaUser } from "react-icons/fa";
import { showToast } from "utils";
import { useDocumentTitle } from "hooks";
export const Profile = () => {
  const { user, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { setShowLoader } = useLoader();
  const logoutHandler = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigate("/login", { replace: true });
    }, 1000);
    localStorage.clear();
    authDispatch({ type: "LOGOUT" });
    showToast("info", "Logged Out Successfully");
  };

  useDocumentTitle("My Profile | Quizzers");

  return (
    <div className="flex">
      <section className="profile">
        <article className="profile__card card">
          <p className="profile__heading">My Profile</p>
          <div className="background">
            <div className="avatar avatar--xs avatar--primary">
              <FaUser />
            </div>
          </div>
          <div className="profile__content">
            <fieldset className="profile__info">
              <legend>Full Name</legend>
              {user.displayName}
            </fieldset>
            <fieldset className="profile__info">
              <legend>Email</legend>
              {user.email}
            </fieldset>
            <button
              className="btn btn--outline-primary"
              onClick={logoutHandler}
            >
              L O G O U T
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};
