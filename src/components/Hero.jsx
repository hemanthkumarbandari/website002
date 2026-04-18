import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import productsImage from '../products.jpg';

const bubbleData = [
  { size: 32, left: '8%', delay: 0, duration: 11 },
  { size: 48, left: '18%', delay: 2, duration: 14 },
  { size: 28, left: '32%', delay: 1.5, duration: 10 },
  { size: 40, left: '52%', delay: 0.5, duration: 12 },
  { size: 22, left: '70%', delay: 3, duration: 9 },
  { size: 36, left: '82%', delay: 1, duration: 13 },
  { size: 26, left: '60%', delay: 4, duration: 11.5 },
];

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] mx-4 my-8 bg-[#D1F1F9] border border-white/40 shadow-[0_30px_120px_-60px_rgba(15,23,42,0.35)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.4),_transparent_25%)] opacity-90" />
        {bubbleData.map((bubble, index) => (
          <span
            key={`bubble-${index}`}
            className="bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              Welcome to ASP
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-slate-900 font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Protecting what you can’t see, preserving what you love.
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-slate-700 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              Leading provider of advanced environmental instrumentation solutions for air quality, emissions, and water monitoring.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            >
              <motion.button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-lg font-semibold text-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)] transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 focus:outline-none"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition-colors duration-300 hover:text-slate-900"
              >
                <ArrowDown className="h-5 w-5" />
                Scroll to products
              </button>
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-[#D1F1F9]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="pointer-events-none absolute -left-10 top-6 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
              <div className="pointer-events-none absolute -right-10 bottom-8 h-24 w-24 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-[340px] overflow-hidden sm:h-[440px]">
                <motion.img
                  src={productsImage}
                  alt="ASP product"
                  className="absolute inset-0 h-full w-full object-contain mix-blend-multiply brightness-105"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;