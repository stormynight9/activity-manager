
import ActivityList from "./components/ActivityList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Modal from "./components/Modal";
import ProgrammeForm from "./components/ProgrammeForm";
import ActivityHolder from "./components/ActivityHolder";
import DayContainer from "./components/DayContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Programme from "./pages/Programme";

function App() {
  return (
    <div className='bg-gray-50'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
      </Routes>


    </div>
  );
}

export default App;
