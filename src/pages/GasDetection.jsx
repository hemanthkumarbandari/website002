import { Link } from 'react-router-dom';

const GasDetection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Gas Detection</h1>
      <p className="text-lg text-gray-700 mb-8">
        Advanced Gas Detection systems protect personnel and facilities from hazardous, toxic, and combustible gases. Designed for both fixed installations and portable applications, these monitors provide immediate, reliable warnings to prevent critical accidents.
      </p>
      <div className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Ultra-fast response times for detecting toxic and combustible gases</li>
          <li>Highly visible audio-visual alarm systems for immediate alert</li>
          <li>Intrinsically safe and explosion-proof designs for hazardous areas</li>
          <li>Easy, intuitive field calibration and straightforward sensor replacement</li>
          <li>Continuous data logging and centralized monitoring capabilities</li>
        </ul>
      </div>
    </div>
  );
};

export default GasDetection;