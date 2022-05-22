import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import DataContext from './context/data-context';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityPage from './pages/ActivityPage';
import CategoriesPage from './pages/CategoriesPage';
import CheckoutPage from './pages/CheckoutPage';
import Home from './pages/Home';
import Programme from './pages/Programme';

function App() {

  const dataCtx = useContext(DataContext);

  return (
    <>
      {dataCtx.isLoaded && <div className='bg-gray-50'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programme' element={<Programme />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:categoryId' element={<ActivitiesPage />} />
          <Route path='/activities/:activityId' element={<ActivityPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
        <ToastContainer position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Slide} />
        <Footer />
      </div>}
    </>
  );
}

export default App;
