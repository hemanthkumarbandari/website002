import { Link } from 'react-router-dom';

const ContinuousEmissionMonitoring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Continuous Emission Monitoring</h1>
      <p className="text-lg text-gray-700 mb-8">
        Continuous Emission Monitoring solutions deliver dependable data on industrial stack emissions. These systems are crucial for managing environmental impact, optimizing combustion processes, and meeting stringent, evolving regulatory requirements.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Comprehensive multi-gas analysis capabilities</li>
          <li>Durable, high-temperature sample extraction systems</li>
          <li>Automated, regulatory-compliant reporting features</li>
          <li>Long-term reliability with minimal sensor drift</li>
          <li>Seamless integration with existing plant control systems</li>
        </ul>
      </div>
    </div>
  );
};

export default ContinuousEmissionMonitoring;