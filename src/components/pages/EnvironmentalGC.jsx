import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Search } from 'lucide-react';
import { useQuoteProducts } from '../../hooks/useQuoteProducts';

// Product images
import imgRGM1 from '../../assets/products/environ/rgm1_p.jpg';
import imgAG207 from '../../assets/products/environ/ag207_p.jpg';
import imgGBA from '../../assets/products/environ/gba_p.jpg';
import imgJVM from '../../assets/products/environ/jvm_p.jpg';

const categories = [
  'All',
  'RGM-1 Low Concentration VOC Monitor',
  'AG-207 Non-methane Hydrocarbon Meter',
  'GBA-202 Series Odor Substance Automatic Measurement System',
  'JVM-100 Series Online Underwater VOC Measuring Device',
];

const products = [
  {
    category: 'RGM-1 Low Concentration VOC Monitor',
    title: 'RGM-1 Low Concentration VOC Monitor',
    image: imgRGM1,
    description:
      'This analyzer enables low-concentration VOC analysis in a compact housing by integrating a sampling system and a packed column gas chromatograph system.',
    features: [
      'Excellent operability — touch panel with interactive menu screen operation.',
      'No carrier cylinder required — uses gas chromatography without a carrier cylinder; housed in aluminum carrying case.',
      'Can be measured anywhere with AC 100V power source.',
      'Built-in automatic repeat measurement function (up to 9 times) and data memory function.',
      'Enables time-series monitoring of changes in the field.',
    ],
  },
  {
    category: 'AG-207 Non-methane Hydrocarbon Meter',
    title: 'AG-207 Non-methane Hydrocarbon Meter',
    image: imgAG207,
    description:
      'An automatic measuring instrument for continuously measuring hydrocarbon concentration in ambient air using the "non-methane hydrocarbon (direct method) measurement method." Measures methane and non-methane hydrocarbons by gas chromatography. Compact appearance fits into a standard 19-inch rack.',
    features: [
      'Complies with JIS B7956 and the 6th edition of the Environmental Air Continuous Monitoring Manual.',
      'Digital telemeter equipped as standard (Ministry of Environment common specifications for telemetering).',
      'LCD touch panel displays measurement results and parameters — interactive format.',
      'Consumes little carrier gas; excellent running costs.',
    ],
  },
  {
    category: 'GBA-202 Series Odor Substance Automatic Measurement System',
    title: 'GBA-202 Series Odor Substance Automatic Measurement System',
    image: imgGBA,
    description:
      'An automatic odor substance measurement system that fully automates the process from trap tube concentration and thermal desorption to introduction into GC and data processing, based on the Offensive Odor Prevention Act.',
    features: [
      'Measurements in accordance with the Offensive Odor Prevention Act (Act No. 91 of June 1, 1971).',
      'Automatic concentration system using the cold trap method with liquid oxygen or liquid argon.',
      'Series of operations from concentration to GC analysis performed fully automatically.',
      'In trimethylamine analysis, alkali release procedure also automated.',
      'Excellent reproducibility achieved with digital integrating flow meter and valve introduction method.',
      'Multiple samples processed continuously when connected to bag autosampler.',
      'Unmanned night operation possible with optional automatic liquid Ar supply device.',
    ],
  },
  {
    category: 'JVM-100 Series Online Underwater VOC Measuring Device',
    title: 'JVM-100 Series Online Underwater VOC Measuring Device',
    image: imgJVM,
    description:
      'Online underwater VOC measuring device. Continuously measures volatile organic compounds (VOCs) in river water, industrial wastewater, etc. using the headspace-GC method.',
    features: [
      'Gas chromatography allows simultaneous measurement of multiple components.',
      'Two detectors, FID and EN, measure trace concentrations below ppb (EN optional).',
      'Entire process from water sampling to GC measurement and drainage is fully automated.',
      'Headspace section is a transparent container, allowing visual observation of the operation process.',
      'Water leakage prevention ensured by leak alarm system.',
      'Measurement results transmitted to higher-level DCS at 4–20 mA.',
    ],
  },
];

const EnvironmentalGC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { addProduct, removeProduct, hasProducts, isProductAdded } = useQuoteProducts();

  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      <div className="bg-[#0f172a] text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Products</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <Link to="/products/analytical" className="hover:text-white transition-colors">Analytical</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Environmental GC</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Environmental</h3>
              </div>
              <div className="space-y-1">
                {categories.map((category, index) => {
                  const isSelected = selectedCategory === category;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        isSelected ? 'bg-[#2563eb] text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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

          <div className="flex-1 space-y-8 pb-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden">
                  <div className="w-full xl:w-[350px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch min-h-[220px] p-6">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-[200px] object-contain mix-blend-multiply"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                        <span className="text-green-400 text-4xl">🌿</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 bg-[#f0fdf4] text-[#16a34a] text-[10px] font-bold uppercase tracking-wider rounded-full">Environmental GC</span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d4ed8] mb-3 leading-tight">{product.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>
                    {product.features && (
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
                        <button onClick={() => addProduct(product.title)} className="inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm">{isProductAdded(product.title) ? 'Added' : 'Add'}</button>
                        <button onClick={() => navigate('/contact')} disabled={!hasProducts} className="inline-flex items-center justify-center bg-blue-600 border border-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">Get Quote</button>
                        <button onClick={() => removeProduct(product.title)} disabled={!isProductAdded(product.title)} className="inline-flex items-center justify-center border border-red-200 text-red-600 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-red-50 transition-colors text-sm sm:ml-auto disabled:opacity-50 disabled:cursor-not-allowed">Remove</button>
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

export default EnvironmentalGC;
