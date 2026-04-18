import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Wind, CloudFog, Server, FlaskConical, Droplet, Search, Check } from 'lucide-react';
import { useQuoteProducts } from '../../hooks/useQuoteProducts';

// Import Images
import img01 from '../../assets/ASP Images Products/Water/001.webp';
import img02 from '../../assets/ASP Images Products/Water/002.webp';
import img03 from '../../assets/ASP Images Products/Water/003.webp';
import img04 from '../../assets/ASP Images Products/Water/004.webp';
import img05 from '../../assets/ASP Images Products/Water/005.webp';
import img06 from '../../assets/ASP Images Products/Water/006.webp';
import img07 from '../../assets/ASP Images Products/Water/007.webp';
import img08 from '../../assets/ASP Images Products/Water/008.webp';
import img09 from '../../assets/ASP Images Products/Water/009.webp';
import img10 from '../../assets/ASP Images Products/Water/10.webp';
import img11 from '../../assets/ASP Images Products/Water/11.webp';
import img12 from '../../assets/ASP Images Products/Water/12.webp';
import img13 from '../../assets/ASP Images Products/Water/13.webp';
import img14 from '../../assets/ASP Images Products/Water/14.webp';
import img15 from '../../assets/ASP Images Products/Water/15.webp';
import img16 from '../../assets/ASP Images Products/Water/16.webp';

const Water = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { addProduct, removeProduct, hasProducts, isProductAdded } = useQuoteProducts();

  const categories = [
    'All',
    'COD / TOC Analyzers',
    'Nitrogen / Phosphorus Analyzers',
    'Ion / Nutrient Analyzers',
    'Heavy Metals / Cyanide Analyzers',
    'Specialty Analyzers'
  ];

  const products = [
    {
      category: 'COD / TOC Analyzers',
      title: 'Automatic COD Analyzer COD-380R',
      icon: <Droplet className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img01,
      description: 'This is an automated device that measures COD (chemical oxygen consumption), an important parameter for understanding the water quality of river water or industrial wastewater, based on the Japanese Industrial Standard JIS K0102.',
      features: [
        'Based on JIS K0102 industrial wastewater test method',
        'High reliability and stability track record',
        'COD-3100 new model available for specific user needs',
        'Reduced cleaning water consumption to about 1/20',
        'Easy maintenance and high measurement performance'
      ]
    },
    {
      category: 'Nitrogen / Phosphorus Analyzers',
      title: 'Automatic Total Phosphorus/Total Nitrogen Analyzer TPN-580/TPN-580R',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img02,
      description: 'An automated device that measures total phosphorus and total nitrogen, important indicators for understanding water quality in river water or industrial wastewater.',
      features: [
        'Based on JIS K0102 industrial wastewater testing method',
        'Integrated large LCD touch panel for easy operation',
        'TN/TP individual measurement functions',
        'TPN-580R reduces reagent for decomposition by half',
        'Significantly lower running costs'
      ]
    },
    {
      category: 'Nitrogen / Phosphorus Analyzers',
      title: 'Automatic Total Nitrogen Analyzer TN-310',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img03,
      description: 'The automatic total nitrogen measuring device uses the "contact pyrolysis/chemiluminescence method" adopted in JIS K0102 for continuous monitoring.',
      features: [
        'Fully automated total nitrogen measurement',
        'Measurement intervals of several minutes',
        'Ideal for controlling and measuring nitrogen treatment',
        'Suitable for discharged water monitoring',
        'High precision chemiluminescence technology'
      ]
    },
    {
      category: 'Specialty Analyzers',
      title: 'Automatic Phosphate Ion Analyzer PHS-580i',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img04,
      description: 'Fully automates the "molybdenum blue absorptiometry" method for understanding phosphate ion concentration in wastewater and boiler water.',
      features: [
        'Adopts JIS K 0102 molybdenum blue method',
        'Quick measurement of phosphate ions',
        'Unique technology for highly accurate continuous measurement',
        'Essential for wastewater treatment process management',
        'Reliable long-term performance'
      ]
    },
    {
      category: 'Specialty Analyzers',
      title: 'Automatic Hydrazine Analyzer HZ-680',
      icon: <Droplet className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img05,
      description: 'A fully automated hydrazine measurement device based on JIS B8224, ideal for monitoring dissolved oxygen reducing agents in boiler systems.',
      features: [
        'Measurement intervals of approximately 15 minutes',
        'Based on JIS B8224 standards',
        'Monitors hydrazine as a dissolved oxygen reducing agent',
        'Controls injection amount in boiler water supply',
        'Constant monitoring for system protection'
      ]
    },
    {
      category: 'Specialty Analyzers',
      title: 'Automatic Silica Analyzer SIO-780',
      icon: <Search className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img06,
      description: 'Fully automated silica measurement system designed for boiler maintenance and ion exchange equipment monitoring.',
      features: [
        'Based on JIS B8224 standard',
        'Approximate 10-minute measurement intervals',
        'Continuous monitoring of silica leaks',
        'Reduces labor required for boiler maintenance',
        'Monitors boiler make-up water quality'
      ]
    },
    {
      category: 'Heavy Metals / Cyanide Analyzers',
      title: 'Automatic Total Cyanogen Analyzer TCN-580',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img07,
      description: 'Measures cyanide using distillation and pyridine pyrazolone absorptiometry as specified in JIS K0102, providing labor-saving automated analysis.',
      features: [
        'Distillation and pyridine pyrazolone absorptiometry method',
        'Measures total cyanide within 30 minutes',
        'Measurement range starting from 0.01 mg/L',
        'Labor-saving alternative to manual analysis',
        'High reliability for automatic monitoring'
      ]
    },
    {
      category: 'Ion / Nutrient Analyzers',
      title: 'Automatic Ion Analyzer CN-180',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img08,
      description: 'Fully automates measurement using an ion electrode after sample pretreatment, designed for public water areas and industrial wastewater.',
      features: [
        'Intermittent measurement with sample pretreatment',
        'Automatic calibration available upon request',
        'Completely redesigned high-grade product',
        'Improved performance over previous models',
        'Suitable for diverse industrial wastewater types'
      ]
    },
    {
      category: 'Ion / Nutrient Analyzers',
      title: 'Automatic Ammonia Analyzer NH-180',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img09,
      description: 'Advanced ammonia measurement device utilizing ion electrode technology for precise monitoring in public and industrial water systems.',
      features: [
        'Fully automated ion electrode measurement',
        'Includes efficient sample pretreatment',
        'Equipped with automatic calibration functionality',
        'Widely used for public water monitoring',
        'High-grade redesigned architecture'
      ]
    },
    {
      category: 'Ion / Nutrient Analyzers',
      title: 'Automatic Fluorin Ion Analyzer FLO-180',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img10,
      description: 'Specialized ion analyzer for fluorine monitoring, featuring automated pretreatment and high-precision electrode measurement.',
      features: [
        'Automated fluorine ion electrode measurement',
        'Intermittent measurement cycle for reliability',
        'Integrated automatic calibration',
        'Reduces chemical usage through efficient pretreatment',
        'Designed for industrial wastewater compliance'
      ]
    },
    {
      category: 'Heavy Metals / Cyanide Analyzers',
      title: 'Automatic Mercury Analyzer HGM-180',
      icon: <Search className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img11,
      description: 'Measures inorganic mercury by reduction vapor atomic absorption spectrometry, capable of detecting extremely low concentrations.',
      features: [
        'Reduction vapor atomic absorption spectrometry',
        'Measures concentrations as low as 0.5 μg/L',
        'Short measurement time for rapid results',
        'Ideal mercury monitor for environmental safety',
        'Modern replacement for manual analysis'
      ]
    },
    {
      category: 'Specialty Analyzers',
      title: 'Automatic Phenol Analyzer PNL-780 / PNL-780D',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img12,
      description: 'Fully automated phenol measurement using the 4-aminoantipyrine spectrophotometric method, with distillation options available.',
      features: [
        'Adopts JIS 4-aminoantipyrine spectrophotometric method',
        'Measurements from 0.1 mg/L',
        'PNL-780D model includes distillation unit',
        'Process control and labor-saving design',
        'Eliminates interference from coexisting components'
      ]
    },
    {
      category: 'Heavy Metals / Cyanide Analyzers',
      title: 'Automatic Hexavalent Chromium Analyzer CR-680',
      icon: <Search className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img13,
      description: 'Fully automates the diphenylcarbazide absorptiometry method for hexavalent chromium, suitable for a wide range of industrial applications.',
      features: [
        'Based on JIS diphenylcarbazide absorptiometry',
        'Measures low concentrations from 0.02 mg/L',
        'Short analysis time with high repeatability',
        'Ideal for automatic monitoring of labor-intensive tasks',
        'Reliable chromium detection for process water'
      ]
    },
    {
      category: 'Heavy Metals / Cyanide Analyzers',
      title: 'Automatic Total Chromium Analyzer TCR-680',
      icon: <Search className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img14,
      description: 'Fully automates total chromium measurement using diphenylcarbazide spectrophotometry after chemical reaction and heating, as per JIS standards.',
      features: [
        'Automated diphenylcarbazide spectrophotometry method',
        'Includes potassium permanganate addition and heating',
        'Ideal for process control and environmental compliance',
        'Eliminates manual titration and heating steps',
        'High resolution for total chromium detection'
      ]
    },
    {
      category: 'Specialty Analyzers',
      title: 'Automatic Hydrogenperoxide Analyzer HOA-280',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img15,
      description: 'A fully automated version of the potassium permanganate titration method for controlled measurement of hydrogen peroxide.',
      features: [
        'Automated potassium permanganate titration method',
        'Specifically designed for semiconductor cleaning wastewater',
        'High precision for peroxide concentration control',
        'Reliable replacement for manual laboratory analysis',
        'Compact and robust industrial design'
      ]
    },
    {
      category: 'Specialty Analyzers',
      title: 'Automatic SVI Analyzer SVI-708',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img16,
      description: 'Simultaneously measures critical aeration tank parameters (MLSS, SV, SVI) to optimize sewage treatment plant operations.',
      features: [
        'Simultaneous measurement of MLSS and SV values',
        'Automatic calculation of Sludge Volume Index (SVI)',
        'Designed for aeration tanks in sewage treatment plants',
        'Real-time monitoring of biological treatment conditions',
        'Replaces time-consuming manual settleability tests'
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
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Water Quality Monitoring</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Online Water Quality Monitoring Products</span>
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
                        {product.category === 'All' ? 'Product' : product.category}
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

export default Water;