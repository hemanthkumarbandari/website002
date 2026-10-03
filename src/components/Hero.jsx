import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import productsImage from '../products_transparent.png';

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
    document.getElementById('environmental')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] mx-4 my-8 bg-[#0078BF] text-white border border-white/20 shadow-[0_30px_120px_-60px_rgba(0,120,191,0.6)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(0,84,135,0.5),_transparent_45%)] opacity-90" />
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              Welcome to ASP
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-white/95 font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Protecting what you can’t see, preserving what you love.
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              Leading provider of advanced{' '}
              <span className="font-semibold text-white">Analytical Instrumentation</span>{' '}
              for Process, Quality, R&amp;D &amp; Lab applications, along with{' '}
              <span className="font-semibold text-white">Pollution Monitoring (Environmental) Instrumentation</span>{' '}
              — covering Continuous Ambient Air Quality, Continuous Emission, and Continuous Water Quality monitoring analyzers.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            >
              <motion.button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-[#0078BF] shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors duration-300 hover:text-white"
              >
                <ArrowDown className="h-5 w-5" />
                Scroll to products
              </button>
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-lg lg:max-w-xl flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              {/* Soft ambient back-illumination blending the equipment into the blue hero */}
              <div 
                className="pointer-events-none absolute inset-0 -m-6 rounded-full blur-3xl opacity-60"
                style={{
                  background: 'radial-gradient(ellipse at 50% 60%, rgba(255, 255, 255, 0.45) 0%, rgba(186, 226, 252, 0.25) 50%, transparent 75%)'
                }}
              />

              <div className="relative w-full flex items-center justify-center p-2 sm:p-4">
                <motion.img
                  src={productsImage}
                  alt="ASP Environmental & Analytical Instrumentation"
                  className="max-h-[340px] sm:max-h-[440px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
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