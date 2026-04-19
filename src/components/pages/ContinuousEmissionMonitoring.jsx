import { Link } from 'react-router-dom';
import { Activity, Check, ArrowRight } from 'lucide-react';
import bgImg from '../../assets/ASP Images Products/CEMs/CEMS.jpeg';

const ContinuousEmissionMonitoring = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">
      {/* Top Header - Dark Minimal */}
      <div className="bg-[#0f172a] text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">Continuous Emission Monitoring</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">CEMS Services</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="bg-white rounded-2xl flex flex-col xl:flex-row shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Minimalist Image Box */}
          <div className="w-full xl:w-[450px] bg-[#f8fafc] flex flex-col items-center justify-center flex-shrink-0 self-stretch relative">
            <div className="w-full h-full p-8 flex items-center justify-center">
              <img src={bgImg} alt="Continuous Emission Monitoring" className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
            <div className="absolute bottom-6 w-full text-center">
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                CEMS Solutions
              </span>
            </div>
          </div>

          {/* Clean Content Area */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                Continuous Emission Monitoring Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Continuous Emission Monitoring solutions deliver dependable data on industrial stack emissions. These systems are crucial for managing environmental impact, optimizing combustion processes, and meeting stringent, evolving regulatory requirements.
              </p>
            </div>

            <div className="space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Multi-gas analysis
                  </h4>
                  <p className="text-sm text-gray-600">Comprehensive analysis capabilities for a variety of industrial emissions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    High-temperature extraction
                  </h4>
                  <p className="text-sm text-gray-600">Durable sample extraction systems designed for extreme environments.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Automated reporting
                  </h4>
                  <p className="text-sm text-gray-600">Regulatory-compliant reporting features that save time and ensure accuracy.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    Seamless integration
                  </h4>
                  <p className="text-sm text-gray-600">Integrates flawlessly with your existing plant control systems for real-time monitoring.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#2563eb] text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1 group">
                Request Service Details
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousEmissionMonitoring;