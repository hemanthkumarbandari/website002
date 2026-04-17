import { Link } from 'react-router-dom';

const Water = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Water Quality Monitoring</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our water quality monitoring instruments provide comprehensive analysis of water parameters for drinking water, wastewater, and environmental water bodies. Ensuring water safety and environmental protection through accurate and reliable measurements.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>pH, conductivity, turbidity, dissolved oxygen</li>
          <li>Heavy metals and organic compound analysis</li>
          <li>Online and offline monitoring options</li>
          <li>Compliance with water quality standards</li>
          <li>Automated sampling and analysis</li>
        </ul>
      </div>
    </div>
  );
};

export default Water;