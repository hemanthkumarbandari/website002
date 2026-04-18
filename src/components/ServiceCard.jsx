import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, link }) => {
  const CardContent = (
    <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-white border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer">
      <div className="flex-shrink-0 w-16 h-16 bg-[#e2f0e9] group-hover:bg-[#d0e8db] transition-colors duration-300 rounded-2xl flex items-center justify-center shadow-sm">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      {link && (
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <ArrowRight className="w-6 h-6 text-blue-500" />
        </div>
      )}
    </div>
  );

  if (link) {
    return <Link to={link} className="block">{CardContent}</Link>;
  }

  return CardContent;
};

export default ServiceCard;