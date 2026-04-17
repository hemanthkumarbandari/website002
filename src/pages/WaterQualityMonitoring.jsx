import { Link } from 'react-router-dom';

const WaterQualityMonitoring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Water Quality Monitoring & Analysis</h1>
      <p className="text-lg text-gray-700 mb-8">
        Comprehensive water quality monitoring and analysis services for drinking water, wastewater, and environmental water bodies. Our expert team provides accurate testing, analysis, and consulting for water quality management and regulatory compliance.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Services Include</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Water sampling and laboratory analysis</li>
          <li>Online monitoring system installation</li>
          <li>Water quality assessment and reporting</li>
          <li>Treatment process optimization</li>
          <li>Regulatory compliance support</li>
        </ul>
      </div>
    </div>
  );
};

export default WaterQualityMonitoring;