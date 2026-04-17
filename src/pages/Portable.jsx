import { Link } from 'react-router-dom';

const Portable = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Portable Monitoring Solutions</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our portable monitoring solutions offer flexibility and mobility for environmental monitoring in various locations. These compact systems provide accurate measurements for air quality, emissions, and other environmental parameters on the go.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Lightweight and portable design</li>
          <li>Battery-powered operation</li>
          <li>Quick setup and deployment</li>
          <li>Wireless data transmission</li>
          <li>Suitable for field surveys and emergency monitoring</li>
        </ul>
      </div>
    </div>
  );
};

export default Portable;