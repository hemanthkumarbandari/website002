import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, FolderOpen, Headphones, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactSection from '../ContactSection';
import heroBg from '../../assets/environmental_hero_bg.png';

// Images
import aboutImg from '../../assets/about.jpg';
import team1 from '../../assets/team/team-1.jpg';
import team2 from '../../assets/team/team-2.jpg';
import team4 from '../../assets/team/team-4.jpg';
import test1 from '../../assets/testimonials/testimonials-1.jpg';
import test2 from '../../assets/testimonials/testimonials-2.jpg';
import test3 from '../../assets/testimonials/testimonials-3.jpg';
import test4 from '../../assets/testimonials/testimonials-4.jpg';
import test5 from '../../assets/testimonials/testimonials-5.jpg';

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const stats = [
  { icon: <Users className="w-8 h-8 text-blue-400" />, count: '232', label: 'Happy Clients' },
  { icon: <FolderOpen className="w-8 h-8 text-orange-400" />, count: '521', label: 'Projects' },
  { icon: <Headphones className="w-8 h-8 text-green-400" />, count: '1463', label: 'Hours Of Support' },
  { icon: <UserCheck className="w-8 h-8 text-pink-400" />, count: '15', label: 'Hard Workers' },
];

const marketLeaderPoints = [
  {
    title: 'ASP',
    description:
      'To meet the diversified requirements of customers, ASP was branched into four different companies to serve the industries and institutions efficiently in a focused manner.',
  },
  {
    title: 'ASP',
    description:
      'ASP is the global partner for 30+ top-tier companies on the international stage and supplies more than 120 instruments, with plans for more.',
  },
  {
    title: 'Strength',
    description:
      'Our strength lies in our experienced and dedicated professionals working passionately towards the company\'s vision and mission.',
  },
  {
    title: 'Clientele',
    description:
      'We have a substantial clientele spread throughout India, and we strive effectively to leverage our broad network, resources, and expertise to fulfill the specific requirements of each client best.',
  },
];

const aspianPoints = [
  {
    title: 'Hyderabad',
    description:
      'We are strategically headquartered in Hyderabad and are well-equipped with sophisticated infrastructure to support and serve our clients.',
  },
  {
    title: 'Vision',
    description:
      'To provide technologically sustainable environmental monitoring solutions across PAN India fulfilling customer requirements.',
  },
  {
    title: 'Mission',
    description: 'We strive to provide the world-class customer experience by amalgamating top notch products and value for money.',
  },
];

const team = [
  { name: 'Walter White', role: 'Chief Executive Officer', note: 'Checks the input and output of the data.', image: team1 },
  { name: 'Sarah Johnson', role: 'Product Manager', note: 'Manages the product and company.', image: team2 },
  { name: 'Amanda Jepson', role: 'Accountant', note: 'Manages the account details.', image: team4 },
];

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'CEO & Founder',
    image: test1,
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    image: test2,
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    image: test3,
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    image: test4,
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    image: test5,
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

const StarRating = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Main Component                                                       */
/* ------------------------------------------------------------------ */

const About = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prev = () => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 font-sans text-gray-800">

      {/* ── Page Hero ── */}
      <div className="relative text-white pt-24 pb-32 bg-[#0A1932] overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0A1932] via-[#0A1932]/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">About</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">About</span>
          </div>
        </div>
      </div>

      {/* ── Our Story ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <motion.div
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div
              className="min-h-[340px] lg:min-h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${aboutImg})`,
              }}
            />
            {/* Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2">Est 1988</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Background</h2>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Since its inception, ASP has strategically partnered with technologically driven companies around the
                globe with best-in-class solutions in a wide range of industries to offer our clients exceptional
                products and services.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Focussing on priorities helps our partnerships thrive and create more value.',
                  'While our partners continue to grow, it\'s a highly selective process and the focus is on quality over quantity.',
                  'We emphasize accountability within and alongside our partner companies and use metrics to gauge success.',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                As new technologies emerge and innovation cycles get faster, we try to bridge the gap between our
                client requirements and industry standards through marketing.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="bg-[#0f172a] mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <p className="text-4xl font-black text-white leading-none">{stat.count}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Leader / Identity ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="rounded-3xl overflow-hidden min-h-[400px] bg-cover bg-center order-2 lg:order-1"
            style={{
              backgroundImage:
                "url('https://www.swanenviron.com/assets/images/partners/partner-004.jpg')",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
              We have been the market leader in this industry for over three decades because of our strength in providing
              our customers with the best equipment from worldwide companies.
            </h2>
            <p className="text-gray-500 mb-8">We also serve as the one-stop shop for all kinds of pollution monitoring needs.</p>
            <div className="space-y-6">
              {marketLeaderPoints.map((pt, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 capitalize">{pt.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{pt.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ASPians / Vision & Mission ── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">ASPians</h2>
              <p className="text-gray-500 mb-8">
                We the ASP's are driven by an intense desire to conduct unrelenting research in order to provide modern
                and cutting-edge environmental monitoring solutions that adhere to Indian legal requirements.
              </p>
              <div className="space-y-6">
                {aspianPoints.map((pt, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{pt.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{pt.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Image */}
            <motion.div
              className="rounded-3xl overflow-hidden min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.swanenviron.com/assets/images/swan-environmental-air-water-quality-003.jpg')",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our Team</h2>
          <p className="text-gray-500">We are the people from ASP.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Team Photo */}
              <div className="h-64 bg-slate-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-extrabold text-gray-900">{member.name}</h4>
                <span className="text-blue-500 text-sm font-medium">{member.role}</span>
                <p className="text-gray-500 text-sm mt-2">{member.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#0f172a] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-white mb-3">Testimonials</h2>
            <p className="text-gray-400">What our clients say about us.</p>
          </div>
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 relative"
          >
            <StarRating />
            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonials[testimonialIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[testimonialIndex].image}
                alt={testimonials[testimonialIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
              />
              <div>
                <p className="text-white font-bold">{testimonials[testimonialIndex].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[testimonialIndex].role}</p>
              </div>
            </div>
          </motion.div>
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === testimonialIndex ? 'bg-blue-400' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <ContactSection />
    </div>
  );
};

export default About;
