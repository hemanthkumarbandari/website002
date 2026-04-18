import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ASPlogo from '../../ASPlogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="inline-flex items-center ">
              <img src={ASPlogo} alt="ASP Logo" className="h-10 md:h-14 lg:h-16 object-contain" />
            </a>
          </div>

          {/* Center Menu - Desktop */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group py-5">
              <button className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                Products
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:-rotate-180" />
              </button>
              
              {/* Smooth Dropdown Menu */}
              <div className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 overflow-hidden">
                <div className="py-2">
                  <a href="/products/caaqms" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">CAAQMS</a>
                  <a href="/products/cems" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">CEMS</a>
                  <a href="/products/eqms" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">EQMS</a>
                  <a href="/products/portable" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Portable</a>
                  <a href="/products/water" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Water</a>
                  <a href="/products/analytical" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Analytical</a>
                  <a href="/products/gas-chromatography" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors">Gas Chromatography</a>
                </div>
              </div>
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="relative">
                <button className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Mobile Dropdown - simplified, no hover */}
                <div className="pl-4">
                  <a href="/products/caaqms" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">CAAQMS</a>
                  <a href="/products/cems" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">CEMS</a>
                  <a href="/products/eqms" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">EQMS</a>
                  <a href="/products/portable" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Portable</a>
                  <a href="/products/water" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Water</a>
                  <a href="/products/analytical" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Analytical</a>
                  <a href="/products/gas-chromatography" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Gas Chromatography</a>
                </div>
              </div>
              <a href="/services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
              <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition w-full mt-2 block text-center">
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