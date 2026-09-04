import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wind, Check, Search } from 'lucide-react';
import { useQuoteProducts } from '../../hooks/useQuoteProducts';

const categories = [
  'All',
  'Nitrogen Oxide/Oxygen Automatic Measuring Device',
  'Nitrogen Oxide Automatic Measuring Instrument',
  'Automatic Oxygen Measuring Device',
  'Ethylene Analyzer',
];

const products = [
  {
    category: 'Nitrogen Oxide/Oxygen Automatic Measuring Device',
    title: 'Nitrogen Oxide/Oxygen Automatic Measuring Device',
    image: 'https://storage.googleapis.com/studio-cms-assets/projects/1pqDwe1bOj/s-1200x1200_v-fms_webp_ddee72ac-6f29-4002-b80a-527e1df61f6d_small.webp',
    description:
      'This measuring instrument is a lightweight and easy-to-maintain model of the previous model, which has been well-received for its high reliability. It is equipped with a highly stable reduced pressure NOx analyzer that uses bypass flow chopping gas analysis and a magnetic force O₂ analyzer that combines flow chopping gas analysis, making it ideal for long-term continuous measurement.',
    features: [
      'Highly stable reduced pressure NOx analyzer using bypass flow chopping gas analysis.',
      'Magnetic force O₂ analyzer combining flow chopping gas analysis.',
      'Ideal for long-term continuous measurement.',
      'USB memory function available as an option for easy data collection.',
    ],
  },
  {
    category: 'Nitrogen Oxide Automatic Measuring Instrument',
    title: 'Nitrogen Oxide Automatic Measuring Instrument',
    image: 'https://storage.googleapis.com/studio-cms-assets/projects/1pqDwe1bOj/s-1200x1200_v-fms_webp_17a6e21c-7629-41c5-9da3-1b54f43161f4_small.webp',
    description:
      'Research on NOx is diverse, from environmental air and flue gas to the human body and living organisms. This measuring instrument is equipped with a wide range of analytical modes and a wide range of applications as standard to meet the needs of various NOx research.',
    features: [
      'Wide range of analytical modes to meet diverse NOx research needs.',
      'Flow chopping mode (FC) for analyses requiring stability.',
      'Continuous mode (CONT.) for analyses requiring fast response.',
    ],
  },
  {
    category: 'Automatic Oxygen Measuring Device',
    title: 'Automatic Oxygen Measuring Device',
    image: 'https://storage.googleapis.com/studio-cms-assets/projects/1pqDwe1bOj/s-1200x1200_v-fms_webp_8877a0e9-af0c-49dc-9ee4-f9771b02b0d4_small.webp',
    description:
      'An integrated automatic oxygen measuring instrument with built-in pre-processing for dust removal and dehumidification. The detection section combines a flow chopping gas analysis method and a magnetic force sensor, enabling high-precision long-term continuous measurement.',
    features: [
      'Built-in pre-processing for dust removal and dehumidification.',
      'Flow chopping gas analysis + magnetic force sensor for high-precision measurement.',
      'Almost no effect from coexisting gases.',
      'Wide linear range from low to high concentrations.',
      'USB memory function and various options for easy data collection.',
    ],
  },
  {
    category: 'Ethylene Analyzer',
    title: 'Ethylene Analyzer',
    image: 'https://storage.googleapis.com/studio-cms-assets/projects/1pqDwe1bOj/s-1200x1200_v-fms_webp_137fd49c-96c5-4b7f-9b68-4c7e827ce2e8_small.webp',
    description:
      'A chemiluminescence type ethylene analyzer that utilizes the chemiluminescence of ethylene and ozone. By incorporating proprietary premixing type CLD (registered utility model) technology, it can continuously and sensitively measure the concentration of ethylene emitted from fruits and vegetables.',
    features: [
      'Chemiluminescence detection of ethylene and ozone reactions.',
      'Proprietary premixing type CLD (registered utility model) technology.',
      'Continuous, sensitive measurement of ethylene from fruits and vegetables.',
    ],
  },
];

const AirQualityMonitoring = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { addProduct, removeProduct, hasProducts, isProductAdded } = useQuoteProducts();

  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Top Header */}
      <div className="bg-[#0f172a] text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Products</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Online Air Quality Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Air</h3>
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
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1 space-y-8 pb-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Image Box */}
                  <div className="w-full xl:w-[350px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch relative min-h-[220px]">
                    {product.image ? (
                      <div className="w-full h-full p-4 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-w-full max-h-[200px] object-contain mix-blend-multiply"
                        />
                      </div>
                    ) : (
                      <Wind className="w-24 h-24 text-blue-200" strokeWidth={1} />
                    )}
                    <div className="absolute bottom-4 w-full text-center">
                      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                        {product.title.split(' ')[0]} {product.title.split(' ')[1] || ''}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold uppercase tracking-wider rounded-full">
                        Online Air Quality
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d4ed8] mb-3 leading-tight">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>
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
                          className="inline-flex items-center justify-center bg-blue-600 border border-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Get Quote
                        </button>
                        <button
                          onClick={() => removeProduct(product.title)}
                          disabled={!isProductAdded(product.title)}
                          className="inline-flex items-center justify-center border border-red-200 text-red-600 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-red-50 transition-colors text-sm sm:ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
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

export default AirQualityMonitoring;
