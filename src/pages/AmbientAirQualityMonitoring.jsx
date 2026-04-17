import { Link } from 'react-router-dom';

const AmbientAirQualityMonitoring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Ambient Air Quality Monitoring</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our ambient air quality monitoring services provide comprehensive assessment of air pollutants in urban and rural environments. We deploy state-of-the-art monitoring stations and mobile units to collect accurate data for air quality management and public health protection.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Services Include</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Installation and maintenance of monitoring stations</li>
          <li>Real-time data collection and analysis</li>
          <li>Air quality modeling and forecasting</li>
          <li>Compliance reporting and regulatory support</li>
          <li>Emergency response monitoring</li>
        </ul>
      </div>
    </div>
  );
};

export default AmbientAirQualityMonitoring;