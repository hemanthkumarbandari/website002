import logoDalmia from '../assets/clients/dalmiya.png';
import logoUltra from '../assets/clients/ultra.png';
import logoRamco from '../assets/clients/ramco.jpeg';
import logoIndia from '../assets/clients/india.png';
import logoBhavya from '../assets/clients/bhavya.png';
import logoAnjani from '../assets/clients/ajani.png';
import logoChettinad from '../assets/clients/chetinadu.png';
import logoNagarjuna from '../assets/clients/nagarguna.png';
import logoTMT from '../assets/clients/tmt.jpeg';
import logoPenna from '../assets/clients/penna.jpeg';
import logoElectro from '../assets/clients/electro.png';
import logoSanvira from '../assets/clients/sanvira.png';
import logoShree from '../assets/clients/sri.png';
import logoPrashakthi from '../assets/clients/prashakthi.jpeg';
import logoSagar from '../assets/clients/sagar.png';
import logoPanyam from '../assets/clients/panyam.png';
import logoBirla from '../assets/clients/birla white.jpeg';
import logoNava from '../assets/clients/nava.jpeg';

const clients = [
  { name: 'UltraTech Cement', logo: logoUltra },
  { name: 'Dalmia Bharat', logo: logoDalmia },
  { name: 'Ramco Cements', logo: logoRamco },
  { name: 'Birla White', logo: logoBirla },
  { name: 'India Cements', logo: logoIndia },
  { name: 'Shree Cement', logo: logoShree },
  { name: 'Penna Cement', logo: logoPenna },
  { name: 'Sagar Cements', logo: logoSagar },
  { name: 'Chettinad Cement', logo: logoChettinad },
  { name: 'Nagarjuna Cements', logo: logoNagarjuna },
  { name: 'Bhavya Cements', logo: logoBhavya },
  { name: 'Anjani Portland', logo: logoAnjani },
  { name: 'Electrosteel', logo: logoElectro },
  { name: 'Sanvira Industries', logo: logoSanvira },
  { name: 'Panyam Cements', logo: logoPanyam },
  { name: 'Parasakti Cement', logo: logoPrashakthi },
  { name: 'Nava Bharat', logo: logoNava },
  { name: 'TMT Steels', logo: logoTMT },
];

const TrustedBy = () => {
  // Duplicate list to achieve a seamless loop in the marquee
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-14 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0079bf] tracking-tight">
          Our Clientele
        </h2>
      </div>

      {/* Marquee Track in full color */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 py-4">
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 sm:w-60 h-28 bg-white flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-20 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
