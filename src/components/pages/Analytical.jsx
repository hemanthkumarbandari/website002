import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Wind, CloudFog, Server, FlaskConical, Droplet, Search, Check } from 'lucide-react';
import { useQuoteProducts } from '../../hooks/useQuoteProducts';

// Import Images
import img01 from '../../assets/ASP Images Products/Analytical/Analytical.jpeg';

const Analytical = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const { addProduct, removeProduct, hasProducts, isProductAdded } = useQuoteProducts();

  const categories = [
    'All',
    'Analytical Instruments'
  ];

  const products = [
    {
      category: 'Analytical Instruments',
      title: 'Precision Analytical Solutions',
      icon: <FlaskConical className="w-12 h-12 text-blue-500 mb-4" strokeWidth={1.5} />,
      image: img01,
      description: 'We offer state-of-the-art analytical instruments designed for precise laboratory and field testing. Our analytical solutions deliver accurate, repeatable results for complex environmental, research, and industrial applications.',
      features: [
        'Unparalleled sensitivity, accuracy, and repeatability',
        'Advanced data processing and analysis software included',
        'Modular design allowing for easy upgrades and maintenance',
        'Strict compliance with international testing and quality standards',
        'Versatile configurations for various analytical methodologies'
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Top Header - Dark Minimal */}
      <div className="bg-[#0f172a] text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Products</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Analytical Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Clean & Minimal */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f8f9fa] rounded-2xl sticky top-8">
              <div className="pt-4 pb-6 px-4">
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
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
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product List Content */}
          <div className="flex-1 space-y-8 pb-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Minimalist Image Box */}
                  <div className="w-full xl:w-[350px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch relative">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="absolute bottom-4 w-full text-center">
                      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                        {product.title.split(' ')[0]} {product.title.split(' ')[1] || ''}
                      </span>
                    </div>
                  </div>

                  {/* Clean Content Area */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-0.5 bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {product.category === 'All' ? 'Product' : product.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl lg:text-2xl font-extrabold text-[#1d4ed8] mb-3 leading-tight">
                      {product.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
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
                          className="inline-flex items-center justify-center bg-blue-600 border border-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => removeProduct(product.title)}
                          disabled={!isProductAdded(product.title)}
                          className="inline-flex items-center justify-center border border-red-200 text-red-600 font-semibold py-2.5 px-6 rounded-xl shadow-sm hover:bg-red-50 transition-colors text-sm sm:ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
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

export default Analytical;