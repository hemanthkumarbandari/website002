import { Link } from 'react-router-dom';

const GasDetection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Gas Detection & Analytical Solutions</h1>
      <p className="text-lg text-gray-700 mb-8">
        Specialized gas detection and analytical services for industrial safety and environmental monitoring. We provide advanced solutions for detecting and analyzing various gases, ensuring workplace safety and environmental compliance.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Services Include</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Gas detection system design and installation</li>
          <li>Calibration and maintenance services</li>
          <li>Gas analysis and speciation</li>
          <li>Safety system integration</li>
          <li>Training and emergency response planning</li>
        </ul>
      </div>
    </div>
  );
};

export default GasDetection;