import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ image, title, description, link }) => {
  // Check if image is an actual path or just a placeholder name
  const isImagePath = image && (image.startsWith('/') || image.includes('.webp') || image.includes('.png') || image.includes('.jpg'));

  return (
    <Link to={link} className="block group">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
        <div className="relative h-56 bg-[#f8fafc] flex items-center justify-center overflow-hidden">
          {/* Image container with smooth zoom on hover */}
          {isImagePath ? (
            <div className="w-full h-full p-6 flex items-center justify-center">
              <img 
                src={image} 
                alt={title} 
                className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ) : (
            <span className="text-gray-400 text-sm font-medium tracking-wide">Image: {image}</span>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d4ed8]/80 via-[#1d4ed8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-white font-bold flex items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              Explore Products <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;