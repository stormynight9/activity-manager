import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityPage from './pages/ActivityPage';
import CategoriesPage from './pages/CategoriesPage';
import Home from './pages/Home';
import Programme from './pages/Programme';

function App() {

  return (
    <div className='bg-gray-50'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programme' element={<Programme />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:categoryId' element={<ActivitiesPage />} />
        <Route path='/activities/:activityId' element={<ActivityPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
