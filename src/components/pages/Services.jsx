import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import ContactSection from '../ContactSection';
import heroBg from '../../assets/environmental_hero_bg.png';

import caaqmsServiceImg from '../../assets/ASP Images Products/Services.ASP Images/CAAQMS/01.webp';
import cemsServiceImg from '../../assets/ASP Images Products/Services.ASP Images/CEMS/01.webp';
import dataServiceImg from '../../assets/ASP Images Products/Services.ASP Images/Data Upload and management/01.webp';
import eqmsServiceImg from '../../assets/ASP Images Products/Services.ASP Images/EQMS/01.webp';

const Services = () => {
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

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      <div
        className="relative text-white pt-24 pb-32 bg-[#0A1932] overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A1932] via-[#0A1932]/80 to-transparent"></div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(25%-1.5rem)] flex"
            >
              <div className="w-full">
                <ProductCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <ContactSection />
      </div>
    </div>
  );
};

export default Services;