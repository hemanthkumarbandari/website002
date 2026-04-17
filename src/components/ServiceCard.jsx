const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
      <div className="flex-shrink-0 w-16 h-16 bg-[#CFE8DC] rounded-2xl flex items-center justify-center">
        {/* Placeholder for icon */}
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;