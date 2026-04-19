import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { AppRoutes } from '../routers/router';

const MainLayout = () => {
  const { pathname } = useLocation();
  const isAdminArea = pathname.startsWith('/admin');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

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
