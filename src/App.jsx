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
