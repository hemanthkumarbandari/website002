import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          {/* Placeholder for image */}
          <span className="text-gray-500 text-sm">Image: {image}</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;