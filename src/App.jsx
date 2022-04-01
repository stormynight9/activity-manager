import { Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import CategoriesPage from './pages/CategoriesPage';
import Home from './pages/Home';
import Programme from './pages/Programme';
import ActivitiesPage from './pages/ActivitiesPage';

function App() {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programme' element={<Programme />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:categoryId' element={<ActivitiesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
