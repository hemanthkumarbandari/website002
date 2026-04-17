import { Link } from 'react-router-dom';

const ContinuousEmissionMonitoring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Continuous Emission Monitoring Systems (CEMS)</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our CEMS services ensure continuous monitoring of industrial emissions to meet environmental regulations. We provide installation, calibration, maintenance, and data management services for comprehensive emission control and reporting.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Services Include</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>CEMS installation and commissioning</li>
          <li>Regular calibration and maintenance</li>
          <li>Data validation and quality assurance</li>
          <li>Regulatory compliance reporting</li>
          <li>System upgrades and modernization</li>
        </ul>
      </div>
    </div>
  );
};

export default ContinuousEmissionMonitoring;