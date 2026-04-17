import { Link } from 'react-router-dom';

const Analytical = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Analytical Instruments</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our advanced analytical instruments provide precise measurement and analysis capabilities for environmental samples. From spectroscopy to chromatography, our instruments deliver accurate results for research and regulatory compliance.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>High-resolution spectroscopy systems</li>
          <li>Advanced chromatography solutions</li>
          <li>Mass spectrometry capabilities</li>
          <li>Automated sample preparation</li>
          <li>Data analysis and reporting software</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytical;