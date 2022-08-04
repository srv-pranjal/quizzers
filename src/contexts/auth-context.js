import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "reducers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("TOKEN");
  const storedUser = localStorage.getItem("USER");
  const [{ isLoggedIn, token, user }, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: storedToken ? true : false,
    token: storedToken,
    user: JSON.parse(storedUser),
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, user, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
