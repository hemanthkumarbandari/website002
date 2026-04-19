import Hero from '../Hero';
import ProductCard from '../ProductCard';
import ServiceCard from '../ServiceCard';
import ContactSection from '../ContactSection';

// Import Images
import caaqmsImg from '../../assets/ASP Images Products/CAAQMS/caaqms.jpg';
import cemsImg from '../../assets/ASP Images Products/CEMs/CEMS.jpeg';
import eqmsImg from '../../assets/ASP Images Products/EQMS/eqms.jpeg';
import portableImg from '../../assets/ASP Images Products/Portable Products/product.jpeg';
import waterImg from '../../assets/ASP Images Products/Water/water.jpeg';
import analyticalImg from '../../assets/ASP Images Products/Analytical/Analytical.jpeg';
import gcImg from '../../assets/ASP Images Products/Gas Chromotagraphy/Gas chromatography.jpeg';

const Home = () => {
  const products = [
    { title: 'CAAQMS', description: 'Continuous Ambient Air Quality Monitoring System', link: '/products/caaqms', image: caaqmsImg },
    { title: 'CEMS', description: 'Continuous Emission Monitoring Systems', link: '/products/cems', image: cemsImg },
    { title: 'EQMS', description: 'Environmental Quality Monitoring System', link: '/products/eqms', image: eqmsImg },
    { title: 'Portable', description: 'Portable monitoring solutions', link: '/products/portable', image: portableImg },
    { title: 'Water', description: 'Water quality monitoring instruments', link: '/products/water', image: waterImg },
    { title: 'Analytical', description: 'Advanced analytical instruments', link: '/products/analytical', image: analyticalImg },
    { title: 'Gas Chromatography', description: 'Gas chromatography systems', link: '/products/gas-chromatography', image: gcImg }
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

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] xl:w-[calc(25%-1.5rem)] flex"
              >
                <div className="w-full">
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    link={product.link}
                  />
                </div>
              </div>
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