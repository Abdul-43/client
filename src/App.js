import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Question from "./components/AddQuestion/Index";
import Answer from "./components/body/Answer";
import Authentication from "./auth/Authentication";
import Index from "./components/stackoverflow/Index";

function App() {
  return (
    <div>

      <NavBar />
      <Authentication />
      <Routes>

        <Route path="/login" element={<Authentication />} />
        <Route path="/questions" element={<Index />} />
        <Route path="/add-question" element={<Question />} />
        <Route path="/questions/:id/answer" element={<Answer/>} />
      </Routes>
    </div>
  );
}

export default App;
