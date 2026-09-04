import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import ContactSection from '../ContactSection';
import heroBg from '../../assets/environmental_hero_bg.png';
import gcImg from '../../assets/ASP Images Products/Gas Chromotagraphy/Gas chromatography.jpeg';

// Environmental Category Images from Reference Site
import caaqmsEnvironImg from '../../assets/products/environ/caaqms-systems-001.jpg';
import cemsEnvironImg from '../../assets/products/environ/ZSS02a.jpg';
import eqmsEnvironImg from '../../assets/products/environ/YUV-3200.png';
import airEnvironImg from '../../assets/products/environ/air_anatec.webp';
import waterEnvironImg from '../../assets/products/environ/water_cabinet.webp';

// Analytical Sub-Category Images from Reference Site
import cgc001Img from '../../assets/products/purpose/cgc001_p.jpg';
import jlp104Img from '../../assets/products/process/jlp104.png';
import gc206Img from '../../assets/products/lab/gc206_p.jpg';
import eogImg from '../../assets/products/medical/eog_p.jpg';
import rgm1Img from '../../assets/products/environ/rgm1_p.jpg';
import jc2000Img from '../../assets/products/attach/jc2000_p.png';

const environmentalCategories = [
  { 
    title: 'CAAQMS', 
    description: 'Continuous Ambient Air Quality Monitoring System for 24/7 environmental compliance and atmospheric analysis.', 
    image: caaqmsEnvironImg, 
    link: '/products/caaqms' 
  },
  { 
    title: 'CEMS', 
    description: 'Continuous Emission Monitoring Systems designed for accurate real-time industrial stack monitoring.', 
    image: cemsEnvironImg, 
    link: '/products/cems' 
  },
  { 
    title: 'EQMS', 
    description: 'Effluent and Environmental Quality Monitoring System for real-time perimeter and discharge compliance.', 
    image: eqmsEnvironImg, 
    link: '/products/eqms' 
  },
  { 
    title: 'Air', 
    description: 'Online air quality analyzers for ambient detection of NOx, O₂, ethylene, CO, and volatile compounds.', 
    image: airEnvironImg, 
    link: '/products/air' 
  },
  { 
    title: 'WATER', 
    description: 'Online water quality and effluent monitoring systems for COD, BOD, TSS, pH, and heavy metals.', 
    image: waterEnvironImg, 
    link: '/products/water' 
  },
];

const analyticalCategories = [
  { 
    title: 'General-purpose', 
    description: 'High-performance general-purpose gas chromatographs for multi-application laboratory analysis.', 
    image: cgc001Img, 
    link: '/products/analytical/general-purpose' 
  },
  { 
    title: 'Process', 
    description: 'Rugged online process gas chromatography solutions engineered for continuous industrial manufacturing.', 
    image: jlp104Img, 
    link: '/products/analytical/process' 
  },
  { 
    title: 'Lab Use', 
    description: 'Laboratory gas chromatographs delivering exceptional precision, sensitivity, and repeatable separation.', 
    image: gc206Img, 
    link: '/products/analytical/lab' 
  },
  { 
    title: 'Medical', 
    description: 'Specialized medical gas chromatography systems for residual ethylene oxide and hospital equipment testing.', 
    image: eogImg, 
    link: '/products/analytical/medical' 
  },
  { 
    title: 'Environmental', 
    description: 'Dedicated environmental gas chromatographs for greenhouse gases, volatile organics, and soil analysis.', 
    image: rgm1Img, 
    link: '/products/analytical/environmental' 
  },
  { 
    title: 'Attachment', 
    description: 'Comprehensive GC accessories including pyrolyzers, auto-samplers, detectors, and chromatography data systems.', 
    image: jc2000Img, 
    link: '/products/analytical/attachment' 
  },
];

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">{title}</h2>
    {subtitle && <p className="text-gray-500 text-sm max-w-2xl">{subtitle}</p>}
    <div className="mt-3 h-1 w-20 bg-blue-600 rounded-full" />
  </div>
);

const Products = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Top Header - Using the generated hero background */}
      <div 
        className="relative text-white pt-24 pb-32 bg-[#0A1932] overflow-hidden"
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        {/* Gradient Overlay for Readability on the Left */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A1932] via-[#0A1932]/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Our Products</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

        {/* Environmental Section */}
        <div id="environmental" className="mb-20 scroll-mt-24">
          <SectionHeading
            title="Environmental"
            subtitle="Continuous online monitoring systems for ambient air quality, industrial emissions, and water compliance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environmentalCategories.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>

        {/* Analytical Section */}
        <div id="analytical" className="mb-20 scroll-mt-24">
          <SectionHeading
            title="Analytical"
            subtitle="Precision gas chromatography instrumentation and specialized analytical solutions for laboratory, medical, and environmental research."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticalCategories.map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>

          {/* Gas Chromatography System Banner */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                <img src={gcImg} alt="Gas Chromatography" className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Looking for Complete Gas Chromatography Systems?</h3>
                <p className="text-gray-500 text-sm">Explore our specialized GC series, detectors, autosamplers, and analytical software.</p>
              </div>
            </div>
            <Link
              to="/products/gas-chromatography"
              className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow whitespace-nowrap"
            >
              Explore GC Systems
            </Link>
          </div>
        </div>

      </div>
      
      <div className="mt-16">
        <ContactSection />
      </div>
    </div>
  );
};

export default Products;
