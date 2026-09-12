import ContactSection from '../ContactSection';
import heroBg from '../../assets/environmental_hero_bg.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-0 font-sans text-gray-800">
      {/* Hero Banner */}
      <div className="relative text-white pt-24 pb-20 bg-[#0A1932] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A1932] via-[#0A1932]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">Contact Us</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Contact</span>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;