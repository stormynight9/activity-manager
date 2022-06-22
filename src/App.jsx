import { useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileInfo from './components/profile/ProfileInfo';
import SavedPrograms from './components/profile/SavedPrograms';
import ValidatedProgramsList from './components/profile/ValidatedProgramsList';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import DataContext from './context/data-context';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityPage from './pages/ActivityPage';
import CategoriesPage from './pages/CategoriesPage';
import CheckoutPage from './pages/CheckoutPage';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ProfilePage from './pages/ProfilePage';
import Programme from './pages/Programme';
import ProtectedRoutes from './pages/ProtectedRoutes';
import ProviderBookedActivityListPage from './pages/ProviderBookedActivityListPage';
import ProviderPage from './pages/ProviderPage';

function App() {

  const dataCtx = useContext(DataContext);
  const location = useLocation();

  return (
    <>
      {dataCtx.isLoaded &&
        <div className='bg-gray-50 relative min-h-screen flex flex-col justify-between'>
          <div>
            {(location.pathname === '/add-activity' || location.pathname === '/booked-activity-list' || location.pathname === '/admin') ? <></> : <Navbar />}
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/programme' element={<Programme />} />
              <Route path='/categories' element={<CategoriesPage />} />
              <Route path='/how-it-works' element={<HowItWorks />} />
              <Route path='/categories/:categoryId' element={<ActivitiesPage />} />
              <Route path='/activities/:activityId' element={<ActivityPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route element={<ProfilePage />}>
                  <Route path='/profile/edit' element={<ProfileInfo />} />
                  <Route path='/profile/saved' element={<SavedPrograms />} />
                  <Route path='/profile/validated' element={<ValidatedProgramsList />} />
                </Route>
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/add-activity' element={<ProviderPage />} />
                <Route path='/booked-activity-list' element={<ProviderBookedActivityListPage />} />
              </Route>
              <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
            <ToastContainer position="bottom-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='colored'
              transition={Slide} />
          </div>
          {(location.pathname === '/add-activity' || location.pathname === '/booked-activity-list' || location.pathname === '/admin') ? <></> : <Footer />}
        </div>}
    </>
  );
}

export default App;
