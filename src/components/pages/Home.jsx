import { motion } from 'framer-motion';
import { Factory, FlaskConical, BarChart3 } from 'lucide-react';
import Hero from '../Hero';
import ProductCard from '../ProductCard';
import ServiceCard from '../ServiceCard';
import ContactSection from '../ContactSection';

const differentiators = [
  {
    icon: <Factory className="w-8 h-8 text-blue-500" />,
    title: 'Industry Monitoring',
    description: 'ASP enables industries to monitor their surroundings and maintain environmental compliance in real time.',
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-blue-500" />,
    title: 'Research & Studies',
    description: 'Research institutions rely on our instruments to conduct detailed pollution studies with high accuracy.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    title: 'Regulatory Assessment',
    description: 'Governing bodies use our solutions to assess pollution levels and ensure public health protection.',
  },
];

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

const Home = () => {
  const environmentalProducts = [
    { 
      title: 'CAAQMS', 
      description: 'Continuous Ambient Air Quality Monitoring System for 24/7 environmental compliance and atmospheric analysis.', 
      link: '/products/caaqms', 
      image: caaqmsEnvironImg 
    },
    { 
      title: 'CEMS', 
      description: 'Continuous Emission Monitoring Systems designed for accurate real-time industrial stack monitoring.', 
      link: '/products/cems', 
      image: cemsEnvironImg 
    },
    { 
      title: 'EQMS', 
      description: 'Effluent and Environmental Quality Monitoring System for real-time perimeter and discharge compliance.', 
      link: '/products/eqms', 
      image: eqmsEnvironImg 
    },
    { 
      title: 'Air', 
      description: 'Online air quality analyzers for ambient detection of NOx, O₂, ethylene, CO, and volatile compounds.', 
      link: '/products/air', 
      image: airEnvironImg 
    },
    { 
      title: 'WATER', 
      description: 'Online water quality and effluent monitoring systems for COD, BOD, TSS, pH, and heavy metals.', 
      link: '/products/water', 
      image: waterEnvironImg 
    },
  ];

  const analyticalProducts = [
    { 
      title: 'General-purpose', 
      description: 'High-performance general-purpose gas chromatographs for multi-application laboratory analysis.', 
      link: '/products/analytical/general-purpose', 
      image: cgc001Img 
    },
    { 
      title: 'Process', 
      description: 'Rugged online process gas chromatography solutions engineered for continuous industrial manufacturing.', 
      link: '/products/analytical/process', 
      image: jlp104Img 
    },
    { 
      title: 'Lab Use', 
      description: 'Laboratory gas chromatographs delivering exceptional precision, sensitivity, and repeatable separation.', 
      link: '/products/analytical/lab', 
      image: gc206Img 
    },
    { 
      title: 'Medical', 
      description: 'Specialized medical gas chromatography systems for residual ethylene oxide and hospital equipment testing.', 
      link: '/products/analytical/medical', 
      image: eogImg 
    },
    { 
      title: 'Environmental', 
      description: 'Dedicated environmental gas chromatographs for greenhouse gases, volatile organics, and soil analysis.', 
      link: '/products/analytical/environmental', 
      image: rgm1Img 
    },
    { 
      title: 'Attachment', 
      description: 'Comprehensive GC accessories including pyrolyzers, auto-samplers, detectors, and chromatography data systems.', 
      link: '/products/analytical/attachment', 
      image: jc2000Img 
    },
  ];

  const services = [
    { icon: '🌬️', title: 'Ambient Air Quality Monitoring', description: 'Comprehensive monitoring of air pollutants and quality parameters.', link: '/services/ambient-air-quality-monitoring' },
    { icon: '🏭', title: 'Continuous Emission Monitoring Systems (CEMS)', description: 'Real-time monitoring of industrial emissions and pollutants.', link: '/services/continuous-emission-monitoring' },
    { icon: '💧', title: 'Water Quality Monitoring & Analysis', description: 'Advanced water quality testing and monitoring solutions.', link: '/services/water-quality-monitoring' },
    { icon: '🔬', title: 'Gas Detection & Analytical Solutions', description: 'Specialized gas detection and analytical instrumentation.', link: '/services/gas-detection' }
  ];

  return (
    <div>
      <Hero />

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              ASP enables industries to monitor their surroundings, research institutions to conduct studies on
              pollution, and governing bodies to assess pollution levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section id="environmental" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0079bf] tracking-tight mb-3">Environmental</h2>
            <p className="text-gray-500 text-sm max-w-2xl">
              Advanced online monitoring solutions for ambient air, stack emissions, and effluent compliance.
            </p>
            <div className="mt-3 h-1 w-20 bg-[#0079bf] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environmentalProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Analytical Section */}
      <section id="analytical" className="py-16 bg-[#f8f9fa] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0079bf] tracking-tight mb-3">Analytical</h2>
            <p className="text-gray-500 text-sm max-w-2xl">
              Precision gas chromatography and specialized analytical systems for laboratory, medical, and process applications.
            </p>
            <div className="mt-3 h-1 w-20 bg-[#0079bf] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticalProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Home;