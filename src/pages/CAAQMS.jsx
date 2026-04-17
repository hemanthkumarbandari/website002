import { Link } from 'react-router-dom';

const CAAQMS = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">CAAQMS</h1>
      <p className="text-lg text-gray-700 mb-8">
        Continuous Ambient Air Quality Monitoring System (CAAQMS) is designed to provide real-time monitoring of various air pollutants in ambient air. Our advanced systems ensure accurate data collection and analysis for environmental compliance and public health protection.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Real-time monitoring of PM10, PM2.5, SO2, NO2, CO, O3</li>
          <li>Automatic data transmission and reporting</li>
          <li>Compliance with national and international standards</li>
          <li>Remote monitoring and control capabilities</li>
          <li>Durable design for outdoor installation</li>
        </ul>
      </div>
    </div>
  );
};

export default CAAQMS;