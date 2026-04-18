import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Wind, CloudFog, Server, FlaskConical, Droplet, Search, Check, ArrowRight } from 'lucide-react';

// Import Product Images
import systemImg1 from '../assets/ASP Images Products/CAAQMS/001.webp';
import systemImg2 from '../assets/ASP Images Products/CAAQMS/002.webp';
import systemImg3 from '../assets/ASP Images Products/CAAQMS/003.webp';
import systemImg4 from '../assets/ASP Images Products/CAAQMS/004.webp';
import systemImg5 from '../assets/ASP Images Products/CAAQMS/005.webp';
import systemImg6 from '../assets/ASP Images Products/CAAQMS/006.webp';
import systemImg7 from '../assets/ASP Images Products/CAAQMS/007.webp';
import systemImg8 from '../assets/ASP Images Products/CAAQMS/008.webp';
import systemImg9 from '../assets/ASP Images Products/CAAQMS/009.webp';
import systemImg10 from '../assets/ASP Images Products/CAAQMS/010.webp';
import systemImg11 from '../assets/ASP Images Products/CAAQMS/011.webp';

const CAAQMS = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Monitoring System',
    'PM2.5 Analyzer',
    'PM10 Analyzer',
    'SO2 Analyzer',
    'NOx Analyzer',
    'CO Analyzer',
    'O3 Analyzer',
    'NH3 Analyzer',
    'Dynamic Calibrator',
    'Zero Gas Generator',
    'Online VOC Analyzer'
  ];

  const products = [
    {
      category: 'Monitoring System',
      title: 'Continuous Ambient Air Quality Monitoring System (CAAQMS)',
      icon: <Server className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg1,
      description: 'On-Line Continuous Ambient Air Monitoring System / Station for the measurement of SO2, NOx, CO, CO2, O3, PM10, PM2.5 etc. in the ambient environment.',
      features: [
        'Analyzers approved by various International Agencies like US EPA, TUV, EN, and in line with norms as defined by Central Pollution Control Board (CPCB) including online calibration from remotely located servers like CPCB and State PCB servers.',
        'Uploading of data to CPCB, SPCBs, PCC and company corporate servers. Cloud server facility.',
        'Remote calibration facility.'
      ]
    },
    {
      category: 'PM2.5 Analyzer',
      title: 'PM2.5 Analyzer',
      icon: <CloudFog className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg2,
      description: 'The Spirant™ BAM 1100 automatically measures and records airborne particulate concentrations using the beta ray attenuation method. It is designated by the US EPA as Federal Equivalent Method for PM2.5 monitoring.',
      features: []
    },
    {
      category: 'PM10 Analyzer',
      title: 'PM10 Analyzer',
      icon: <CloudFog className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg3,
      description: 'The Spirant™ BAM 1000 automatically measures and records airborne particulate concentrations using the beta ray attenuation method. It is designated by the US EPA as Federal Equivalent Method for PM10 monitoring.',
      features: []
    },
    {
      category: 'SO2 Analyzer',
      title: 'SO2 Analyzer',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg4,
      description: 'The Serinus® 50 sulfur dioxide (SO2) analyser delivers precise and reliable performance at excellent value. It uses proven pulsed UV fluorescent radiation technology to measure SO2 in ambient air (LDL < 0.3 ppb, range 0 to 20 ppm).',
      features: []
    },
    {
      category: 'NOx Analyzer',
      title: 'NOx Analyzer',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg5,
      description: 'The Serinus® 40 Oxides of Nitrogen (NOx) analyser delivers precise and reliable performance at excellent value. It uses proven chemiluminescence technology to measure NO, NO2 and NOx in ambient air (LDL < 0.4 ppb, range 0 to 20 ppm).',
      features: []
    },
    {
      category: 'CO Analyzer',
      title: 'CO Analyzer',
      icon: <Wind className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg6,
      description: 'The Serinus® 30 carbon monoxide (CO) analyser delivers precise and reliable performance at excellent value. It uses proven NDIR gas filter correlation technology to measure CO in ambient air (LDL < 40 ppb, range 0 to 200 ppm).',
      features: []
    },
    {
      category: 'O3 Analyzer',
      title: 'O3 Analyzer',
      icon: <Wind className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg7,
      description: 'The Serinus® 10 Ozone (O3) analyser delivers precise and reliable performance at excellent value. It uses proven non-dispersive ultraviolet (UV) absorption technology to measure O3 in ambient air (LDL < 0.5 ppb, range 0 to 20 ppm).',
      features: []
    },
    {
      category: 'NH3 Analyzer',
      title: 'NH3 Analyzer',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg8,
      description: 'The Serinus® 44 analyser delivers precise and reliable performance at excellent value. It uses proven chemiluminescence technology and an external thermal catalytic converter to measure NO, NO2, NOx and NH3 in ambient air.',
      features: []
    },
    {
      category: 'Dynamic Calibrator',
      title: 'Dynamic Calibrator',
      icon: <Activity className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg9,
      description: 'ASP-580 Dynamic Calibrator is a multi-channel gas calibration instrument based on Microprocessor Technology and specifically developed for precise gas analyzer. By adopting high precision mass flow controller and standard gas, the calibrator provides calibration standard gas for zero point and span test of multiple gas parameters, as well as four gas sources at the same time. Dynamic calibrator can be equipped with built-in programmable ozone generator, which can be used not only for accurate and reliable ozone calibration, but also for GPT to generate NO2. The ozone generator adopts multi-point piecewise linear drive to ensure the repeatability and accuracy of ozone concentration; the optional photometer also enables higher precision control of the ozone generator. Dynamic calibrator has fast response, high repeatability, high precision and is easy to use. It can also be customized according to customer requirements.',
      features: []
    },
    {
      category: 'Zero Gas Generator',
      title: 'Zero Gas Generator',
      icon: <Droplet className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg10,
      description: 'ASP-590 Zero Gas Generator is an instrument that provides clean, dry zero gas. The Zero Gas Generator includes an external oil-free air compressor, pressure flow controller, water removal system, SO2, NO, NO2, O3 and H2S remover, CO and hydrocarbon remover. The Zero Gas Generator is based on adsorption, filtration, reaction and other principles to remove SO2, NO, NO2, O3, H2S, CO, NH3, hydrocarbons and particulate matters in the air, and output dry and clean air. An internal water removal system removes moisture from the air, produces air of which dew point is below -20°C, and is independent of the dew point at the inlet. It is also helpful to remove other gases and greatly prolongs the service life of the chemical remover.',
      features: []
    },
    {
      category: 'Online VOC Analyzer',
      title: 'Online VOC Analyzer',
      icon: <Search className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: systemImg11,
      description: 'This measuring instrument is a state-of-the-art VOC monitor that uses a hydrogen flame ionization detector with heating of all measurement lines. The sample flow path is heated to a high temperature for measurement (HOT FID), so it can measure a wide range of T-VOCs quickly and continuously, from low concentration and low boiling point to high concentration and high boiling point. In addition, the use of a corrosion-resistant FID allows it to measure organic chlorine gases. In the unlikely event that the hydrogen flame goes out, the instrument is designed to automatically shut off the hydrogen line, so you can use it with peace of mind.',
      features: []
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
              <span className="text-blue-400 font-medium">CAAQMS Products</span>
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
                      {category}
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
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
                        {product.category}
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
                      <button className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm group">
                        Request Quote
                        <ArrowRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </button>
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

export default CAAQMS;