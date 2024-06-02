import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Projects from "./pages/Projects";

import "./scss/app.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
