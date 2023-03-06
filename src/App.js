import Generator from "./pages/Generator";
import './App.css';
import Nav from "./components/Nav"
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {

    return(
      <div>
        <Nav />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/generator" element={<Generator />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
        <Generator/>
      </div>
    )
}

export default App;
