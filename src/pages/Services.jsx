import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: 'Ambient Air Quality Monitoring', link: '/services/ambient-air-quality-monitoring', description: 'Comprehensive monitoring of air pollutants and quality parameters.' },
    { title: 'Continuous Emission Monitoring Systems (CEMS)', link: '/services/continuous-emission-monitoring', description: 'Real-time monitoring of industrial emissions and pollutants.' },
    { title: 'Water Quality Monitoring & Analysis', link: '/services/water-quality-monitoring', description: 'Advanced water quality testing and monitoring solutions.' },
    { title: 'Gas Detection & Analytical Solutions', link: '/services/gas-detection', description: 'Specialized gas detection and analytical instrumentation.' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 mb-12">
        We offer comprehensive environmental monitoring services to help organizations meet regulatory requirements and ensure environmental sustainability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <Link to={service.link} className="text-blue-600 hover:text-blue-800 font-medium">Learn More &rarr;</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;