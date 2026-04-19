import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import ContactSection from '../ContactSection';
import heroBg from '../../assets/environmental_hero_bg.png';

// Import Images
import caaqmsImg from '../../assets/ASP Images Products/CAAQMS/caaqms.jpg';
import cemsImg from '../../assets/ASP Images Products/CEMs/CEMS.jpeg';
import eqmsImg from '../../assets/ASP Images Products/EQMS/eqms.jpeg';
import portableImg from '../../assets/ASP Images Products/Portable Products/product.jpeg';
import waterImg from '../../assets/ASP Images Products/Water/water.jpeg';
import analyticalImg from '../../assets/ASP Images Products/Analytical/Analytical.jpeg';
import gcImg from '../../assets/ASP Images Products/Gas Chromotagraphy/Gas chromatography.jpeg';

const Products = () => {
  const products = [
    { title: 'CAAQMS', description: 'Continuous Ambient Air Quality Monitoring System', link: '/products/caaqms', image: caaqmsImg },
    { title: 'CEMS', description: 'Continuous Emission Monitoring Systems', link: '/products/cems', image: cemsImg },
    { title: 'EQMS', description: 'Environmental Quality Monitoring System', link: '/products/eqms', image: eqmsImg },
    { title: 'Portable', description: 'Portable monitoring solutions', link: '/products/portable', image: portableImg },
    { title: 'Water', description: 'Water quality monitoring instruments', link: '/products/water', image: waterImg },
    { title: 'Analytical', description: 'Advanced analytical instruments', link: '/products/analytical', image: analyticalImg },
    { title: 'Gas Chromatography', description: 'Gas chromatography systems', link: '/products/gas-chromatography', image: gcImg }
  ];

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
        {/* Responsive Grid that centers the last row using Flex Wrap */}
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
      
      <div className="mt-24">
        <ContactSection />
      </div>
    </div>
  );
};

export default Products;
