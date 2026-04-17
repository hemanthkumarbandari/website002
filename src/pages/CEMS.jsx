import { Link } from 'react-router-dom';

const CEMS = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">CEMS</h1>
      <p className="text-lg text-gray-700 mb-8">
        Continuous Emission Monitoring Systems (CEMS) provide continuous monitoring of flue gas emissions from industrial sources. Our systems help industries comply with environmental regulations and optimize their emission control processes.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Continuous monitoring of SO2, NOX, CO, CO2, O2</li>
          <li>High accuracy and reliability</li>
          <li>Integration with plant control systems</li>
          <li>Automated reporting and compliance tracking</li>
          <li>Low maintenance and long service life</li>
        </ul>
      </div>
    </div>
  );
};

export default CEMS;