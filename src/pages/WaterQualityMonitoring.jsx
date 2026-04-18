import { Link } from 'react-router-dom';

const WaterQualityMonitoring = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Water Quality Monitoring</h1>
      <p className="text-lg text-gray-700 mb-8">
        Water Quality Monitoring systems provide continuous, real-time insights into the health and stability of aquatic environments. They are fundamentally vital for municipal water treatment facilities, aquaculture operations, and large-scale environmental research.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Continuous, precise monitoring of dissolved oxygen, turbidity, pH, and conductivity</li>
          <li>Automated, secure data logging with immediate cloud connectivity</li>
          <li>Extremely durable, corrosion-resistant probes designed for long-term submersion</li>
          <li>Configurable early warning alerts for immediate response to contamination events</li>
          <li>Compliance with strict municipal and federal water safety standards</li>
        </ul>
      </div>
    </div>
  );
};

export default WaterQualityMonitoring;