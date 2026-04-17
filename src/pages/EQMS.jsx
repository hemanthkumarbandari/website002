import { Link } from 'react-router-dom';

const EQMS = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">EQMS</h1>
      <p className="text-lg text-gray-700 mb-8">
        Environmental Quality Monitoring System (EQMS) integrates multiple environmental parameters into a comprehensive monitoring solution. Our system provides holistic environmental data for better decision-making and regulatory compliance.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Multi-parameter environmental monitoring</li>
          <li>Integrated data management platform</li>
          <li>Real-time alerts and notifications</li>
          <li>Customizable reporting dashboards</li>
          <li>Scalable architecture for various applications</li>
        </ul>
      </div>
    </div>
  );
};

export default EQMS;