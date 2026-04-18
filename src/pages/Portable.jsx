import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Wind, CloudFog, Server, FlaskConical, Droplet, Search, Check } from 'lucide-react';
import { useQuoteProducts } from '../hooks/useQuoteProducts';

// Import Images
import img01 from '../assets/ASP Images Products/Portable Products/01.webp';
import img02 from '../assets/ASP Images Products/Portable Products/02.webp';
import img03 from '../assets/ASP Images Products/Portable Products/03.webp';
import img04 from '../assets/ASP Images Products/Portable Products/04.webp';
import img05 from '../assets/ASP Images Products/Portable Products/05.webp';
import img06 from '../assets/ASP Images Products/Portable Products/06.webp';
import img07 from '../assets/ASP Images Products/Portable Products/07.webp';

const Portable = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { addProduct, removeProduct, hasProducts, isProductAdded } = useQuoteProducts();

  const categories = [
    'All',
    'Portable FTIR Stack Gas & Emission Analyser',
    'Portable TOC / THC & NMHC Analyzer',
    'Portable NDIR Stack Gas Analyzer',
    'Portable Stack Gas Analyser - 4 Sensors',
    'Portable Stack Gas Analyser - 8 Sensors',
    'Portable Infrared Syngas Analyzer',
    'Portable Natural Gas Analyser'
  ];

  const products = [
    {
      category: 'Portable FTIR Stack Gas & Emission Analyser',
      title: 'Portable FTIR Stack Gas & Emission Analyser',
      icon: <CloudFog className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img01,
      description: 'GT6000 Mobilis is the new frontier of portable emissions monitoring. The analyzer is specifically designed for those who aim high. It enables you to concentrate on the task at hand, without interferences from hard to use, time consuming and unreliable tools.',
      features: [
        'Specifically designed for high-end emissions monitoring',
        'Concentration on tasks without tool interference',
        'Extreme portability and robustness',
        'Powerful analysis tools with rapid response times',
        'Reliable performance for time-saving operations'
      ]
    },
    {
      category: 'Portable TOC / THC & NMHC Analyzer',
      title: 'Portable TOC / THC & NMHC Analyzer',
      icon: <Droplet className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img02,
      description: 'The Nutech 3000 TOC (Total Organic Carbons) / THC (Total Hydrocarbons) & NMHC (Non-Methane Hydrocarbons) Analyzer is suitable for portable monitoring of TVOC (Total Volatile Organic Compounds), CH4 (Methane) and NMHC in stationary source emission and fence line.',
      features: [
        'Measures TVOC, CH4, and NMHC',
        'Suitable for stationary source emission and fence line monitoring',
        'Portable and easy to deploy',
        'High precision for organic carbon analysis'
      ]
    },
    {
      category: 'Portable NDIR Stack Gas Analyzer',
      title: 'Portable NDIR Stack Gas Analyzer',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img03,
      description: 'It is portable type and used to measure concentration of SO2, NO, CO, CO2 and O2 from stack or boiler emission gases, in which SO2, NO, CO and CO2 are measured by micro-flow infrared sensors and O2 by electrochemical sensor.',
      features: [
        'Measures SO2, NO, CO, CO2 (NDIR) and O2 (Electrochemical)',
        'Micro-flow infrared sensor technology',
        'Calculates combustion efficiency and lambda',
        'Optional sensors for temperature, pressure, and velocity'
      ]
    },
    {
      category: 'Portable Stack Gas Analyser - 4 Sensors',
      title: 'Portable Stack Gas Analyser - 4 Sensors',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img04,
      description: 'The IMR 1400CP is a portable Flue Gas Analyzer for commercial and industrial applications. The rugged combustion analyzer can be equipped with up to 4 sensors. Its basic unit has an O2 (Oxygen) and a CO (Carbon Monoxide) sensor.',
      features: [
        'Up to 4 sensors (Basic: O2 and CO)',
        'Customer-selectable sensors and measuring ranges',
        'Rugged design for commercial and industrial use',
        'Measures and calculates all parameters for combustion tests'
      ]
    },
    {
      category: 'Portable Stack Gas Analyser - 8 Sensors',
      title: 'Portable Stack Gas Analyser - 8 Sensors',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img05,
      description: 'The IMR 2800P is a portable Flue Gas Analyzer for industrial applications. The rugged combustion analyzer can be equipped with up to 8 sensors. Its basic unit has an O2 Oxygen sensor, a CO Carbon Monoxide sensor, a NO Nitric Oxide sensor and a SO2 Sulfur Dioxide Sensor.',
      features: [
        'Up to 8 sensors (Basic: O2, CO, NO, SO2)',
        'Customer-selectable sensors and measuring ranges',
        'Rugged design for high-end industrial applications',
        'Comprehensive emission testing and parameter calculation'
      ]
    },
    {
      category: 'Portable Infrared Syngas Analyzer',
      title: 'Portable Infrared Syngas Analyzer',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img06,
      description: 'Syngas (synthesis gas) is a kind of combustible gas mixture mainly generated by passing air with steam over burning coke or coal in a gasifier. This analyzer has small size, high accuracy, short response time, simple operation, and rechargeable lithium battery power supply system.',
      features: [
        'Measures up to 8 gases: CO, CO2, O2, CH4, CnHm, C2H3, C2H4 simultaneously',
        'Calculates gas heating value and N2 balance automatically',
        'Small size with high accuracy and short response time',
        'Rechargeable lithium battery power supply',
        'Ideal for direct pipe sampling and gas-bag analysis'
      ]
    },
    {
      category: 'Portable Natural Gas Analyser',
      title: 'Portable Natural Gas Analyser',
      icon: <Wind className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img07,
      description: 'It is a portable type analyzer that can be used to know natural gas composition and heating value in real time. Special developed CH4 sensor can give accurate CH4 reading without cross-sensitivity to other hydrocarbon content.',
      features: [
        'Real-time natural gas composition and heating value analysis',
        'Accurate CH4 reading without cross-sensitivity',
        'Unique CnHm sensor for total C2+ hydrocarbon detection',
        'Standard configuration: CH4, CnHm, CO2, Calorific Value',
        'Optional Wobbe Index calculation'
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Top Header - Dark Minimal */}
      <div className="bg-[#0f172a] text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Products</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Portable Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Clean & Minimal */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
              </div>
              <div className="space-y-1">
                {categories.map((category, index) => {
                  const isSelected = selectedCategory === category;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#2563eb] text-white'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <span className="truncate pr-2">{category}</span>
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product List Content */}
          <div className="flex-1 space-y-8 pb-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Minimalist Image Box */}
                  <div className="w-full xl:w-[350px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch relative">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="absolute bottom-4 w-full text-center">
                      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                        {product.title.split(' ')[0]} {product.title.split(' ')[1] || ''}
                      </span>
                    </div>
                  </div>

                  {/* Clean Content Area */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {product.category === 'All' ? 'Product' : product.category.length > 20 ? 'Portable' : product.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d4ed8] mb-3 leading-tight">
                      {product.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    {product.features && product.features.length > 0 && (
                      <div className="mb-8 flex-1">
                        <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">Key Specifications</h4>
                        <ul className="space-y-4">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-[14px] text-gray-600">
                              <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" strokeWidth={3} />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => addProduct(product.title)}
                          className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm"
                        >
                          {isProductAdded(product.title) ? 'Added' : 'Add'}
                        </button>
                        <button
                          onClick={() => navigate('/contact')}
                          disabled={!hasProducts}
                          className="inline-flex items-center justify-center bg-blue-600 border border-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => removeProduct(product.title)}
                          disabled={!isProductAdded(product.title)}
                          className="inline-flex items-center justify-center border border-red-200 text-red-600 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-red-50 transition-colors text-sm sm:ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">No Products Found</h3>
                <p className="text-gray-500 text-sm">We're updating our inventory for this category.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portable;