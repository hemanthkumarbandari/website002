import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import ContactSection from '../ContactSection';
import heroBg from '../../assets/environmental_hero_bg.png';

import caaqmsServiceImg from '../../assets/ASP Images Products/Services.ASP Images/CAAQMS/01.webp';
import cemsServiceImg from '../../assets/ASP Images Products/Services.ASP Images/CEMS/01.webp';
import dataServiceImg from '../../assets/ASP Images Products/Services.ASP Images/Data Upload and management/01.webp';
import eqmsServiceImg from '../../assets/ASP Images Products/Services.ASP Images/EQMS/01.webp';

const services = [
  {
    title: 'CAAQMS',
    description: 'Continuous Ambient Air Quality Monitoring System',
    link: '/services/ambient-air-quality-monitoring',
    image: caaqmsServiceImg,
  },
  {
    title: 'CEMS',
    description: 'Continuous Emission Monitoring Systems',
    link: '/services/continuous-emission-monitoring',
    image: cemsServiceImg,
  },
  {
    title: 'Data Uploading and Management',
    description: 'Secure data uploading, device inventory, and cloud data management services.',
    link: '/services/data-uploading',
    image: dataServiceImg,
  },
  {
    title: 'EQMS',
    description: 'Continuous Effluent Quality Monitoring System',
    link: '/services/water-quality-monitoring',
    image: eqmsServiceImg,
  },
];

const amcFeatures = [
  'Maintenance of Analyzers',
  "Calibration as per manufacturer's guidelines & schedule",
  'Maintenance of LED Display boards',
  'Supply of required spares',
  'Data Connectivity to CPCB/SPCB cloud servers',
];

const Services = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Hero Banner */}
      <div className="relative text-white pt-24 pb-32 bg-[#0A1932] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A1932] via-[#0A1932]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Our Services</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards — equal-height grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {services.map((service, index) => (
            <ProductCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>

      {/* Annual Maintenance Contract — distinct premium banner variant */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: dark content panel */}
            <div className="bg-[#0A1932] p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full mb-5 w-fit border border-blue-500/30">
                Annual Maintenance Contract
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                Annual &amp; Comprehensive Services
              </h2>
              <p className="text-blue-200/70 text-sm mb-7 leading-relaxed">
                For AAQMS / CEMS / SPM / Effluent Monitoring / VOC / Online Water Quality / Online Air Quality / Analytical Instruments
              </p>
              <ul className="space-y-3 mb-8">
                {amcFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#0A1932] font-semibold px-7 py-3 text-sm hover:bg-blue-50 transition-colors w-fit shadow-sm"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: image panel */}
            <div
              className="min-h-[280px] sm:min-h-[360px] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop')" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default Services;