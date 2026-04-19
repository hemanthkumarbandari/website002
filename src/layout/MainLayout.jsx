import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { AppRoutes } from '../routers/router';

const MainLayout = () => {
  const { pathname } = useLocation();
  const isAdminArea = pathname.startsWith('/admin');

  if (isAdminArea) {
    return (
      <div className="min-h-screen flex flex-col">
        <AppRoutes />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default MainLayout;
