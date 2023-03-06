import Generator from "./pages/Generator";
import './App.css';
import Nav from "./components/Nav"
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer"

function App() {

    return(
      <div>
        <Nav />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Generator/>} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
      </div>
    )
}

export default App;
