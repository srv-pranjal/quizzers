import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
