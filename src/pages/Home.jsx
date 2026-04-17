import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';

const Home = () => {
  const products = [
    { title: 'CAAQMS', description: 'Continuous Ambient Air Quality Monitoring System', link: '/products/caaqms', image: 'caaqms.jpg' },
    { title: 'CEMS', description: 'Continuous Emission Monitoring Systems', link: '/products/cems', image: 'cems.jpg' },
    { title: 'EQMS', description: 'Environmental Quality Monitoring System', link: '/products/eqms', image: 'eqms.jpg' },
    { title: 'Portable', description: 'Portable monitoring solutions', link: '/products/portable', image: 'portable.jpg' },
    { title: 'Water', description: 'Water quality monitoring instruments', link: '/products/water', image: 'water.jpg' },
    { title: 'Analytical', description: 'Advanced analytical instruments', link: '/products/analytical', image: 'analytical.jpg' },
    { title: 'Gas Chromatography', description: 'Gas chromatography systems', link: '/products/gas-chromatography', image: 'gas-chromatography.jpg' }
  ];

  const services = [
    { icon: '🌬️', title: 'Ambient Air Quality Monitoring', description: 'Comprehensive monitoring of air pollutants and quality parameters.' },
    { icon: '🏭', title: 'Continuous Emission Monitoring Systems (CEMS)', description: 'Real-time monitoring of industrial emissions and pollutants.' },
    { icon: '💧', title: 'Water Quality Monitoring & Analysis', description: 'Advanced water quality testing and monitoring solutions.' },
    { icon: '🔬', title: 'Gas Detection & Analytical Solutions', description: 'Specialized gas detection and analytical instrumentation.' }
  ];

  return (
    <div>
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
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