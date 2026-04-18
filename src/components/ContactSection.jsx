import { useState } from 'react';
<<<<<<< HEAD

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
=======
import { useQuoteProducts } from '../hooks/useQuoteProducts';

const DEFAULT_QUOTE_MESSAGE = 'Hey, I would like to get Quotation for these products!';

const ContactSection = () => {
  const { quoteProducts } = useQuoteProducts();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: DEFAULT_QUOTE_MESSAGE
>>>>>>> 3f8cd75 (2nd changes)
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Our Identity */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Identity</h2>
            <p className="text-lg text-gray-700 mb-4">
              ASP is a leading provider of environmental instrumentation solutions, dedicated to helping organizations monitor and manage environmental impact effectively.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience and cutting-edge technology, we deliver reliable, accurate, and innovative monitoring systems for air quality, emissions, and water quality.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  required
                ></textarea>
              </div>
<<<<<<< HEAD
=======
              {quoteProducts.length > 0 && (
                <div className="rounded-lg border border-gray-700 bg-gray-800/80 p-4">
                  <p className="text-sm font-semibold mb-2">Selected products for quotation</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    {quoteProducts.map((product) => (
                      <li key={product}>{product}</li>
                    ))}
                  </ul>
                </div>
              )}
>>>>>>> 3f8cd75 (2nd changes)
              <button
                type="submit"
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;