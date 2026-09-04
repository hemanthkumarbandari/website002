import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Search } from 'lucide-react';
import { useQuoteProducts } from '../../hooks/useQuoteProducts';

// Product images
import imgJLP104 from '../../assets/products/process/jlp104_p.jpg';
import imgAG2 from '../../assets/products/process/ag2_p.jpg';
import imgRCG1 from '../../assets/products/process/rcg1_p.jpg';
import imgGTS201 from '../../assets/products/process/gts_p.jpg';
import imgGC220 from '../../assets/products/process/gc220_p.jpg';
import imgGC205 from '../../assets/products/process/gc205_p.jpg';
import imgGC2011 from '../../assets/products/process/gc2011plus_p.png';
import imgVege from '../../assets/products/process/vege_p.jpg';
import imgCH4 from '../../assets/products/process/ch4_204_p.jpg';

const categories = [
  'All',
  'JLP-104 Residual Component Measurement System for LP Gas',
  'AG-2 Fully Automatic Gas Chromatograph',
  'RCG-1 Compact Automatic Gas Chromatograph Series',
  'GTS-201 Total Sulfur Measurement System Series',
  'GC220 Digestive Gas Analyzer',
  'GC205 LPG Analyzer',
  'GC2011 PLUS Automated Fuel Gas Analysis System',
  'Vegetable Growing System',
  'CH4-203 Methane Converter',
];

const products = [
  {
    category: 'JLP-104 Residual Component Measurement System for LP Gas',
    title: 'JLP-104 Residual Component Measurement System for LP Gas',
    image: imgJLP104,
    description:
      'This measurement system employs a new measurement method, the GC method (vaporization concentration method), for measuring residual components, which are important in the quality control of LP gas.',
    features: [
      'Hydrocarbon components (C10 to C40) analyzed at the ppm (mg/kg) level.',
      'Simple operation with automation other than opening/closing container when introducing samples.',
      'Entire analysis process (from start to ready for next) takes approximately 1 hour.',
      'Sample consumption per analysis is 10–20g.',
      'Residue concentration calculated immediately from analysis results using PC-type data processing.',
      'Composition analysis possible when combined with CGC-001.',
      'Measurement method based on Japan LP Gas Association standard GC Method (Vaporization Concentration Method).',
    ],
  },
  {
    category: 'AG-2 Fully Automatic Gas Chromatograph',
    title: 'AG-2 Fully Automatic Gas Chromatograph',
    image: imgAG2,
    description:
      'In response to the need for automation, this is a full-fledged automatic gas chromatograph that eliminates complicated operation and large installation space. Can be widely used for high-speed analysis, simultaneous multi-component analysis, and composition analysis of wet sample gas.',
    features: [
      'Up to three detectors (TCD, FID, FPD) and four column systems installed simultaneously.',
      'Performs all-component analysis replacing two or three laboratory gas chromatographs.',
      'Can also connect to external trace reducing gas detector (TRD).',
      'Up to five column systems for pre-cut, foreflush, and heart-cut techniques.',
      'Supports trace analysis from ppb to sub-ppm level.',
      'Methane converter can be built in for CO and CO₂ at sub-ppm levels with FID.',
      'Thermostatic sampling unit for gas composition analysis in wet conditions.',
    ],
  },
  {
    category: 'RCG-1 Compact Automatic Gas Chromatograph Series',
    title: 'RCG-1 Series Compact Automatic Gas Chromatograph',
    image: imgRCG1,
    description:
      'A compact automatic gas chromatograph equipped with a detector and auto-sampling and pre-cut backflush mechanisms as standard, mountable on a 19-inch rack.',
    features: [
      'Multi-component measurement possible by adding a data processing device.',
      'Compatible with built-in sample preparation equipment.',
    ],
  },
  {
    category: 'GTS-201 Total Sulfur Measurement System Series',
    title: 'GTS-201 Series Total Sulfur Measurement System',
    image: imgGTS201,
    description:
      'The total sulfur content in various gases such as CO₂, N₂, H₂, He, and Ar can be measured down to the ppb level.',
    features: [
      'All sulfur components converted to hydrogen sulfide; analyzed as total sulfur in short time.',
      'All processes from reduction to GC measurement are automatic and continuous.',
      'Concentration allows trace measurement at ppb level.',
      'Peltier cooling for concentration is maintenance-free.',
      'Measurement results displayed in table using PC-type data processing device (optional).',
    ],
  },
  {
    category: 'GC220 Digestive Gas Analyzer',
    title: 'GC220 Digestive Gas Analyzer',
    image: imgGC220,
    description:
      'Digestion Gas Analyzer GC220. Monitors the composition of digester gas in sewage treatment plants, an important indicator for understanding the digestion status of sludge.',
    features: [
      'Measures O₂, CO, CO₂, N₂, and CH₄ in digester gas.',
      'O₂, N₂, CH₄, CO, and CO₂ — normally requiring two analyses — measured simultaneously with single sampling.',
      'Anyone can easily operate it by simply turning on the power.',
    ],
  },
  {
    category: 'GC205 LPG Analyzer',
    title: 'GC205 LPG Analyzer',
    image: imgGC205,
    description:
      'For liquefied gas analysis, the GC205 LPG Analyzer samples the liquid phase using a liquid sampling device, vaporizes it, and analyzes by gas chromatograph for correct composition.',
    features: [
      'Measurement method complies with JIS — no standard gas required.',
      'Small and lightweight sampling device can be carried and used anywhere.',
      'High-precision measurements using a high-performance gas chromatograph.',
      'Easy to operate — anyone can use it.',
    ],
  },
  {
    category: 'GC2011 PLUS Automated Fuel Gas Analysis System',
    title: 'GC2011 PLUS Automated Fuel Gas Analysis System',
    image: imgGC2011,
    description: 'Automatic fuel gas analyzer conforming to JIS K2301-2022.',
    features: [
      'Capable of analyzing 18 components from H₂ to C₆ and up.',
      'Analysis of H₂ to C₅ performed in just 15 minutes.',
      'Automated system that eliminates the need for bothersome operations.',
      'Analysis results printed out in specified format (compliant with the Gas Business Act format).',
      'Analysis using hydrogen carrier gas is also possible.',
    ],
  },
  {
    category: 'Vegetable Growing System',
    title: 'Vegetable Growing System',
    image: imgVege,
    description:
      'This system measures the gases necessary for vegetable growth and adjusts and manages the optimum concentration.',
    features: [
      'Measures concentrations of ethylene (C₂H₄), CO₂, O₂ in multiple vegetable cultivation rooms.',
      'Manages and adjusts concentrations suitable for growing vegetables.',
      'Gas components analyzed using gas chromatography.',
    ],
  },
  {
    category: 'CH4-203 Methane Converter',
    title: 'CH4-203 Methane Converter',
    image: imgCH4,
    description:
      'This device uses a Ni catalyst to convert carbon monoxide and carbon dioxide into methanation, enabling measurement with an FID detector. Conversion rate to methane is over 95%.',
    features: [
      'CO and CO₂ converted to methane for high-sensitivity measurement with FID detector.',
      'By combining with a GC with FID, CO and CO₂ can be measured with high sensitivity.',
    ],
  },
];

const ProcessGC = () => {
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
              <span className="text-blue-400 font-medium">Process GC</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Process</h3>
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
                <div
                  key={index}
                  className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="w-full xl:w-[350px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch min-h-[220px] p-6">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-[200px] object-contain mix-blend-multiply"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                        <span className="text-blue-300 text-4xl">⚙</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold uppercase tracking-wider rounded-full">
                        Process GC
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d4ed8] mb-3 leading-tight">{product.title}</h2>
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

export default ProcessGC;
