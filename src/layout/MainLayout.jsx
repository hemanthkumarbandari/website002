import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustedBy from '../components/TrustedBy';
import FloatingContact from '../components/FloatingContact';
import { AppRoutes } from '../routers/router';

const MainLayout = () => {
  const { pathname, hash } = useLocation();
  const isAdminArea = pathname.startsWith('/admin');

  useEffect(() => {
    if (hash) {
      // Give lazy-loaded page time to mount before attempting scroll
      const id = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
      return () => clearTimeout(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

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
      <TrustedBy />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default MainLayout;
