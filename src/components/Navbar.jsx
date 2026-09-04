import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ASPlogo from '../../ASPlogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="inline-flex items-center">
              <img src={ASPlogo} alt="ASP Logo" className="h-10 md:h-14 lg:h-16 object-contain" />
            </a>
          </div>

          {/* Center Menu - Desktop */}
          <div className="hidden md:flex space-x-8 items-center h-full">

            {/* Products Dropdown */}
            <div 
              className="relative py-5 flex items-center group cursor-pointer"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link 
                to="/products" 
                className="text-gray-700 group-hover:text-[#0079bf] px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors h-full"
              >
                <span>Products</span>
                <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Dropdown Content */}
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-6 z-50">
                  <div>
                    <Link 
                      to="/products#environmental" 
                      className="text-xs font-bold text-[#0079bf] uppercase tracking-wider block mb-3 pb-1 border-b border-blue-100 hover:underline"
                    >
                      Environmental
                    </Link>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/products/caaqms" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">CAAQMS</Link>
                      </li>
                      <li>
                        <Link to="/products/cems" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">CEMS</Link>
                      </li>
                      <li>
                        <Link to="/products/eqms" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">EQMS</Link>
                      </li>
                      <li>
                        <Link to="/products/air" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Online Air Quality</Link>
                      </li>
                      <li>
                        <Link to="/products/water" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Online Water Quality</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l border-gray-100 pl-6">
                    <Link 
                      to="/products#analytical" 
                      className="text-xs font-bold text-[#0079bf] uppercase tracking-wider block mb-3 pb-1 border-b border-blue-100 hover:underline"
                    >
                      Analytical
                    </Link>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link to="/products/analytical/general-purpose" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">General Purpose</Link>
                      </li>
                      <li>
                        <Link to="/products/analytical/process" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Process</Link>
                      </li>
                      <li>
                        <Link to="/products/analytical/lab" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Lab Use</Link>
                      </li>
                      <li>
                        <Link to="/products/analytical/medical" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Medical</Link>
                      </li>
                      <li>
                        <Link to="/products/analytical/environmental" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Environmental</Link>
                      </li>
                      <li>
                        <Link to="/products/analytical/attachment" className="text-gray-600 hover:text-blue-600 block py-1 transition-colors">Attachment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="py-5 flex items-center">
              <a href="/services" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center h-full">Services</a>
            </div>
            <div className="py-5 flex items-center">
              <a href="/contact" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center h-full">Contact Us</a>
            </div>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition inline-flex items-center">
              Contact Sales
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-2 bg-white">
            
            <div>
              <div className="flex items-center justify-between px-3 py-2">
                <Link to="/products" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">Products</Link>
              </div>
              <div className="pl-6 space-y-1">
                <p className="text-xs font-bold text-[#0079bf] uppercase tracking-wider pt-2">Environmental</p>
                <Link to="/products/caaqms" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">CAAQMS</Link>
                <Link to="/products/cems" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">CEMS</Link>
                <Link to="/products/eqms" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">EQMS</Link>
                <Link to="/products/air" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Online Air Quality</Link>
                <Link to="/products/water" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Online Water Quality</Link>
                
                <p className="text-xs font-bold text-[#0079bf] uppercase tracking-wider pt-3">Analytical</p>
                <Link to="/products/analytical/general-purpose" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">General Purpose</Link>
                <Link to="/products/analytical/process" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Process</Link>
                <Link to="/products/analytical/lab" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Lab Use</Link>
                <Link to="/products/analytical/medical" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Medical</Link>
                <Link to="/products/analytical/environmental" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Environmental</Link>
                <Link to="/products/analytical/attachment" onClick={() => setIsOpen(false)} className="text-gray-600 block py-1 text-sm">Attachment</Link>
              </div>
            </div>

            <a href="/services" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <div className="pt-2 px-3">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition w-full block text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;