import { Link } from 'react-router-dom';

const GasChromatography = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Gas Chromatography</h1>
      <p className="text-lg text-gray-700 mb-8">
        Our gas chromatography systems offer superior separation and analysis of complex mixtures. Ideal for environmental monitoring, petrochemical analysis, and research applications requiring high precision and sensitivity.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>High-resolution capillary columns</li>
          <li>Multiple detector options (FID, TCD, ECD, MS)</li>
          <li>Temperature programming capabilities</li>
          <li>Automated sample injection</li>
          <li>Advanced data processing software</li>
        </ul>
      </div>
    </div>
  );
};

export default GasChromatography;