import { useLoader } from "contexts";
import { Route, Routes } from "react-router-dom";
import { Loader, Navbar } from "./components";
import {
  Home,
  Login,
  PrivateRoutes,
  Profile,
  QuizQuestion,
  Result,
  Rules,
  Signup,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { showLoader } = useLoader();

  return (
    <div>
      {showLoader && <Loader />}
      <ToastContainer autoClose="1500" closeOnClick="true" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<QuizQuestion />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
