import { useState } from 'react';
import { useQuoteProducts } from '../hooks/useQuoteProducts';
import {
  CONTACT_SUBMISSIONS_TABLE,
  getSupabaseClient,
} from '../lib/supabaseClient';

const DEFAULT_QUOTE_MESSAGE = 'Hey, I would like to get Quotation for these products!';

/** Same-origin /api/contact: Vite plugin (vite-plugin-contact-api.js) + Vercel api/contact.js */
function getContactEmailUrl() {
  const explicit = import.meta.env.VITE_CONTACT_API_URL?.trim();
  if (explicit) {
    return `${explicit.replace(/\/$/, '')}/api/contact`;
  }
  return '/api/contact';
}

const ContactSection = () => {
  const { quoteProducts } = useQuoteProducts();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: DEFAULT_QUOTE_MESSAGE
  });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setSubmitError('');

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const supabase = getSupabaseClient();

    let recorded = false;

    try {
      if (supabase) {
        const { error: dbError } = await supabase
          .from(CONTACT_SUBMISSIONS_TABLE)
          .insert({
            name,
            email,
            message,
            quote_products: quoteProducts,
            status: 'new',
          });

        if (dbError) {
          setSubmitError(
            dbError.message || 'Could not save your message. Please try again.'
          );
          setSubmitStatus('error');
          return;
        }
        recorded = true;
      }

      const contactEmailUrl = getContactEmailUrl();
      const res = await fetch(contactEmailUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          quoteProducts,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && !data.emailSkipped) {
        recorded = true;
      } else if (!res.ok && !recorded) {
        const hint = data.details ? ` (${data.details})` : '';
        setSubmitError(
          (data.error || 'Something went wrong. Please try again.') + hint
        );
        setSubmitStatus('error');
        return;
      }

      if (!recorded) {
        setSubmitError(
          'Contact form is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, and set EMAIL_USER + EMAIL_PASS in .env for Gmail (optional if only saving to Supabase).'
        );
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: DEFAULT_QUOTE_MESSAGE });
    } catch {
      setSubmitError(
        'Network error. Please check your connection and try again.'
      );
      setSubmitStatus('error');
    }
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
              {submitStatus === 'success' && (
                <p className="text-sm text-green-400" role="status">
                  Thank you — your message was sent. We will get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && submitError && (
                <p className="text-sm text-red-400" role="alert">
                  {submitError}
                </p>
              )}
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;