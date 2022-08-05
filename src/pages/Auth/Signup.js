import { useAuth, useLoader } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { showToast } from "utils";
import "./Auth.css";
import { useDocumentTitle } from "hooks";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "firebase.js";

export const Signup = () => {
  const { authDispatch } = useAuth();
  const { setShowLoader } = useLoader();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    fullName: "",
    emailID: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useDocumentTitle("Signup | Quizzers");

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const { emailID, password, fullName } = currentUser;
      setShowLoader(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailID,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
      const { uid, email, displayName } = user;
      localStorage.setItem("USER", JSON.stringify({ email, displayName }));
      localStorage.setItem("TOKEN", uid);
      authDispatch({
        type: "SIGNUP",
        payload: { user: { email, displayName }, token: uid },
      });
      navigate("/", { replace: true });
      showToast("success", "Registration Successful!!");
    } catch (error) {
      showToast("error", error.message);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div className="flex">
      <main className="authentication signup">
        <form
          onSubmit={signupHandler}
          className="authentication__form signup__form"
        >
          <h3 className="authentication__title">SIGN UP</h3>
          <p className="authentication__subtitle">Enter your details</p>
          <div className="authentication__field">
            <label>Full Name</label>
            <input
              className="input input--outlined"
              placeholder="Full Name"
              required
              value={currentUser.fullName}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, fullName: e.target.value })
              }
            />
          </div>
          <div className="authentication__field">
            <label>Email</label>
            <input
              className="input input--outlined"
              placeholder="Email"
              type="email"
              required
              value={currentUser.emailID}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, emailID: e.target.value })
              }
            />
          </div>
          <div className="authentication__field">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                className="input input--outlined"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                required
                value={currentUser.password}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, password: e.target.value })
                }
              />
              <span
                className="show-pwd"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                <i
                  className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          <div className="authentication__field">
            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                className="input input--outlined"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={currentUser.confirmPassword}
                onChange={(e) =>
                  setCurrentUser({
                    ...currentUser,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <span
                className="show-pwd"
                onClick={() =>
                  setShowConfirmPassword((showPassword) => !showPassword)
                }
              >
                <i
                  className={
                    showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"
                  }
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          {currentUser.confirmPassword.length > 0 &&
            currentUser.password.length > 0 &&
            currentUser.password !== currentUser.confirmPassword && (
              <p className="error-message">* Passwords do not match</p>
            )}

          <button
            className={
              (currentUser.password !== currentUser.confirmPassword
                ? "btn--disabled"
                : "") + " btn btn--primary authentication__btn"
            }
          >
            SIGN UP
          </button>
          <p className="authentication__subtitle">
            Already have an account?
            <Link to="/login" className="highlight" role="button">
              Log In!
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};
