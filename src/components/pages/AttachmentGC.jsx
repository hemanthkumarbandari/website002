import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Search } from 'lucide-react';
import { useQuoteProducts } from '../../hooks/useQuoteProducts';

// Product images
import imgJC2000 from '../../assets/products/attach/jc2000_p.png';
import imgU7 from '../../assets/products/attach/u7_p.png';
import imgDAC201 from '../../assets/products/attach/dac201_p.png';
import imgGFA201 from '../../assets/products/attach/gfa201_p.png';

const categories = [
  'All',
  'JC2000 Chromatography Data Station',
  'JSμ7 Chromatography Data Station',
  'DAC-201 D/A Converter',
  'GFA-201 Flame Extinction Detector',
];

const products = [
  {
    category: 'JC2000 Chromatography Data Station',
    title: 'JC2000 Data Processing Device — Chromatography Data Station',
    image: imgJC2000,
    description:
      'This is a data processing device for the JC2000 gas chromatograph. It allows easy selection and operation of functions such as chromatographic analysis, saving and playing back chromatographic data, enlarging and reducing chromatographic data, various quantitative calculations, and controlling external devices.',
    features: [
      'Supports various optional functions such as measurement result tables and automatic PDF saving.',
      'Can independently process data for two channels as standard.',
      'Supports simultaneous processing and printing of two channels.',
      'Allows easy reprocessing on screen by loading saved chromatograms while capturing data from two channels.',
      'Optional four-channel version available.',
    ],
  },
  {
    category: 'JSμ7 Chromatography Data Station',
    title: 'JSμ7 Data Processing Device — Chromatography Data Station',
    image: imgU7,
    description:
      'A data processing device for gas chromatographs. Allows easy selection and operation of functions including chromatographic analysis, saving and replaying data, enlarging and reducing data, various quantitative calculations, and control of external devices (optional).',
    features: [
      'Low cost achieved by limiting functions to the bare minimum.',
      'Simple calibration function added — calibration at the touch of a button.',
      'Software for controlling external devices is optional.',
    ],
  },
  {
    category: 'DAC-201 D/A Converter',
    title: 'DAC-201 D/A Converter',
    image: imgDAC201,
    description:
      'DA Converter — Outputs a signal in the set range. This device receives the measurement results sent from the gas chromatograph data processing device via RS232C, displays the concentration of each component on the LCD screen, and outputs a 4–20 mA (DC) signal within the set range.',
    features: [
      'Receives measurement results via RS232C from GC data processing device.',
      'Displays component concentrations on LCD screen.',
      'Outputs 4–20 mA (DC) signal within the set range.',
    ],
  },
  {
    category: 'GFA-201 Flame Extinction Detector',
    title: 'GFA-201 Flame Extinction Detector',
    image: imgGFA201,
    description:
      'Flame Extinction Detector GFA-201. This device detects the extinction of the hydrogen flame of the FID detector. It detects flame extinction with a temperature sensor and outputs an alarm and detection signal.',
    features: [
      'Detects flame extinction using a temperature sensor.',
      'Outputs alarm and detection signal upon flame extinction.',
      'Optional hydrogen shutoff unit — automatically shuts off hydrogen when flame goes out.',
      'Prevents hydrogen from diffusing into the room for enhanced safety.',
      'If purchased simultaneously with a GC, hydrogen shutoff valve is built into the GC.',
    ],
  },
];

const AttachmentGC = () => {
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
              <span className="text-blue-400 font-medium">Attachment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Attachment</h3>
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
                      <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                        <span className="text-blue-300 text-4xl">⚡</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold uppercase tracking-wider rounded-full">Attachment</span>
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

export default AttachmentGC;
