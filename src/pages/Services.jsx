import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Server, CloudFog, Droplet, Database } from 'lucide-react';


import caaqmsServiceImg from '../assets/ASP Images Products/Services.ASP Images/CAAQMS/01.webp';
import cemsServiceImg from '../assets/ASP Images Products/Services.ASP Images/CEMS/01.webp';
import dataServiceImg from '../assets/ASP Images Products/Services.ASP Images/Data Upload and management/01.webp';
import eqmsServiceImg from '../assets/ASP Images Products/Services.ASP Images/EQMS/01.webp';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'CAAQMS',
    'CEMS',
    'Data Uploading and Management',
    'EQMS'
  ];

  const services = [
    {
      category: 'CAAQMS',
      title: 'CAAQMS',
      subtitle: 'Continuous Ambient Air Quality Monitoring System',
      icon: <CloudFog className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: caaqmsServiceImg,
      description: 'The TOC-4200 is a high-performance on-line TOC analyzer, based on the proven 680°C Catalyst-aided Combustion technology. This established technology is featured in a large installed base of Shimadzu Total Organic Carbon Analyzers throughout the world, and has been applied to a broad field of industries.',
    },
    {
      category: 'CEMS',
      title: 'CEMS',
      subtitle: 'Continuous Emission Monitoring System',
      icon: <Server className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: cemsServiceImg,
      description: 'The Online Colorimeter is a compact analytical instrumentation for online analysis and process monitoring. The colorimeter is based on a color-developing chemical reaction carried out inside the analyzer glass cell. The sample, coming from an external reservoir or process stream is autonomously grabbed by the instrument and mixed with the appropriate reagents to make the reaction happen. The analyzer uses an LED light source and a photodiode to photometrically measure the developed color intensity (absorbance). The absorbance is proportional to the concentration of the target chemical species (analyte).',
    },
    {
      category: 'Data Uploading and Management',
      title: 'Data Uploading and Management',
      subtitle: '',
      icon: <Database className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: dataServiceImg,
      description: 'We provide a data uploading and management service for the devices we offer. This service allows administrators to keep an inventory of company-owned devices, review device details, and manage access to organization data. Devices can be added to the inventory, and administrators can import device serial numbers and asset tags using a CSV file. The service also provides security features, such as encryption and data erasure, to ensure the secure transfer and storage of data.',
    },
    {
      category: 'EQMS',
      title: 'EQMS',
      subtitle: 'Continuous Effluent Quality Monitoring System',
      icon: <Droplet className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: eqmsServiceImg,
      description: 'Online monitoring of effluents is mandatory for specific category of industries in India. However choosing right technology is important, as monitoring is not a short term job. The equipment need to be rugged, reliable (result comparable to lab data), economical, well supported by manufacturer and local distributor with inventory of spares and skilled manpower. The system shouldn\'t require recurring cost in reinvestment for replacements at a later stage. Also, the instrument need to comply Local and International Standards. We at ASP Pvt. Ltd., consider all the above points to be best choice for our customers.',
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Top Header - Dark Minimal */}
      <div className="bg-[#0f172a] text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Services</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Services</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Clean  */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Filters</h3>
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

          {/* Service List Content */}
          <div className="flex-1 space-y-8 pb-12">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden"
                >
                  
                  {/* Minimalist Image Box */}
                  <div className="w-full xl:w-[350px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch relative">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <img src={service.image} alt={service.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="absolute bottom-4 w-full text-center">
                      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                        {service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}
                      </span>
                    </div>
                  </div>

                  {/* Clean Content Area */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d4ed8] mb-1 leading-tight">
                      {service.title}
                    </h2>
                    
                    {service.subtitle && (
                      <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                        {service.subtitle}
                      </h3>
                    )}
                    {!service.subtitle && <div className="mb-4"></div>}
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center xl:justify-start">
                      <Link to="/contact" className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 font-semibold py-2.5 px-8 rounded-full shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm group">
                        Get Quote
                      </Link>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">No Services Found</h3>
                <p className="text-gray-500 text-sm">We're updating our inventory for this category.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;