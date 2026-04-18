import { Link } from 'react-router-dom';

const AmbientAirQualityMonitoring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Ambient Air Quality Monitoring</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our Ambient Air Quality Monitoring systems provide comprehensive tracking of atmospheric conditions and pollutant levels. These solutions help ensure public safety and compliance with environmental regulations in urban and industrial areas.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>High-precision sensors for multiple environmental parameters</li>
          <li>Real-time data logging, visualization, and cloud connectivity</li>
          <li>Robust build for diverse and harsh weather conditions</li>
          <li>Automated calibration and built-in self-diagnostics</li>
          <li>Compliance with local and global environmental standards</li>
        </ul>
      </div>
    </div>
  );
};

export default AmbientAirQualityMonitoring;