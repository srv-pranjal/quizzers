import { useLoader } from "contexts";
import { Route, Routes } from "react-router-dom";
import { Loader, Navbar } from "./components";
import { Home, QuizQuestion, Result, Rules } from "./pages";

function App() {
  const { showLoader } = useLoader();
  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quiz" element={<QuizQuestion />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
