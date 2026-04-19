import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import footerBg from '../assets/footer-bg.png';

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] text-white overflow-hidden mt-auto group">
      {/* Background with Image and Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center bg-no-repeat transition-all duration-1000 group-hover:opacity-60 grayscale-[20%] group-hover:grayscale-0"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white">ASP</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  <span className="font-bold text-gray-300 block mb-1 uppercase tracking-wider text-[10px]">Address</span>
                  106, 1st Floor, Plot No. 31, Hanumanatha Reddy Complex, <br />
                  Tadbund 'X' Road, Hyderabad - 500 009, INDIA.
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                   <span className="font-bold text-gray-300 block mb-1 uppercase tracking-wider text-[10px]">Contact</span>
                  <span className="font-bold text-gray-300">Mobile:</span> +91 9921866889<br />
                  <span className="font-bold text-gray-300">Telephone:</span> +91 4027721889
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  <span className="font-bold text-gray-300 block mb-1 uppercase tracking-wider text-[10px]">Email</span>
                  support@aspinstruments.co.in
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2 inline-block">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>Home</Link></li>
              <li><Link to="/products/caaqms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>Products</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>Contact us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/products/caaqms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>CAAQMS</Link></li>
              <li><Link to="/products/cems" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>CEMS</Link></li>
              <li><Link to="/services/data-uploading" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>Data Uploading</Link></li>
              <li><Link to="/products/eqms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500/30 rounded-full mr-2"></span>EQMS</Link></li>
            </ul>
          </div>

          {/* Big Brand Identifier */}
          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="relative p-12 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-xl group-hover:bg-white/10 transition-all duration-700 shadow-2xl">
                <span className="text-7xl font-black text-white/5 tracking-[0.25em] select-none group-hover:text-white/10 transition-all duration-700">ASP</span>
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-[1px] w-8 bg-gray-800"></div>
            <p className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase">ASP</p>
            <div className="h-[1px] w-8 bg-gray-800"></div>
          </div>
          <p className="text-gray-600 text-[10px] tracking-wide">© 2024 ASP Environmental Instrumentation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;