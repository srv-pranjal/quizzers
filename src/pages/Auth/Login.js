import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { showToast } from "utils";
import { useAuth, useLoader } from "contexts";
import { useDocumentTitle } from "hooks";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase.js";

export const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setShowLoader } = useLoader();
  const [showPassword, setShowPassword] = useState(false);

  let from = location.state?.from?.pathname || "/";

  useDocumentTitle("Login | Quizzers");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setShowLoader(true);
      const foundUser = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const { uid, email, displayName } = foundUser.user;
      localStorage.setItem("USER", JSON.stringify({ displayName, email }));
      localStorage.setItem("TOKEN", uid);
      authDispatch({
        type: "LOGIN",
        payload: { user: { displayName, email }, token: uid },
      });
      navigate(from, { replace: true });
      showToast("success", "Login Succeeded!");
    } catch (error) {
      console.log(error);
      showToast("error", error.message);
    } finally {
      setShowLoader(false);
    }
  };
  return (
    <div className="flex">
      <div className="authentication">
        <form
          className="authentication__form"
          onSubmit={(e) => loginHandler(e)}
        >
          <h3 className="authentication__title">LOG IN</h3>
          <p className="authentication__subtitle">Enter email and password</p>
          <div className="authentication__field">
            <label>Email</label>
            <input
              className="input input--outlined"
              placeholder="Email"
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
          <button
            className="btn btn--primary authentication__btn"
            type="submit"
          >
            LOG IN
          </button>
          <button
            className="btn authentication__btn-test authentication__btn"
            type="submit"
            onClick={() =>
              setUser({
                ...user,
                email: "iamheisenberg@gmail.com",
                password: "walterwhite123",
              })
            }
          >
            Login As Guest
          </button>
          <p className="authentication__subtitle">
            Don't have an account?
            <Link to="/signup" className="highlight" role="button">
              Sign up!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
