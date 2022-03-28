
import ActivityList from "./components/ActivityList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Modal from "./components/Modal";
import ProgrammeForm from "./components/ProgrammeForm";

function App() {
  return (
    <div className='bg-gray-50'>
      <Modal />
      <Navbar />
      <Hero />
      <ProgrammeForm />
      <ActivityList />
      <How />
      <Footer />


    </div>
  );
}

export default App;
