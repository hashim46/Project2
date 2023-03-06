import Generator from "./pages/Generator";
import './App.css';
import Nav from "./components/Nav"
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Suggestions from "./pages/Suggestions";
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia";
import BlackTop from "./components/BlackTop";

function App() {

    return(
      <div>
        <BlackTop/>
        <Nav />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Generator/>} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/Suggestions" element={<Suggestions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <SocialMedia />
      </div>
    )
}

export default App;
