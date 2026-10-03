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

// Added Client Logos
import logoAdani from '../assets/clients/adani.png';
import logoJSW from '../assets/clients/jsw.png';
import logoGreenko from '../assets/clients/greenko.svg';
import logoRain from '../assets/clients/priya_cement.svg';
import logoSLR from '../assets/clients/slr_metalliks.png';
import logoBMM from '../assets/clients/bmm_ispat.png';
import logoMahaveer from '../assets/clients/mahaveer.png';

const clients = [
  { name: 'Adani Group', logo: logoAdani },
  { name: 'JSW Steel', logo: logoJSW },
  { name: 'The Ramco Cements', logo: logoRamco },
  { name: 'Dalmia Cement', logo: logoDalmia },
  { name: 'Greenko', logo: logoGreenko },
  { name: 'SLR Metalliks', logo: logoSLR },
  { name: 'BMM Ispat', logo: logoBMM },
  { name: 'Rain Cements Ltd', logo: logoRain },
  { name: 'Mahaveer Ferro Alloys', logo: logoMahaveer },
  { name: 'UltraTech Cement', logo: logoUltra },
  { name: 'Shree Cement', logo: logoShree },
  { name: 'Birla White', logo: logoBirla },
  { name: 'India Cements', logo: logoIndia },
  { name: 'Penna Cement', logo: logoPenna },
  { name: 'Sagar Cements', logo: logoSagar },
  { name: 'Chettinad Cement', logo: logoChettinad },
  { name: 'Nagarjuna Cements', logo: logoNagarjuna },
  { name: 'Electrosteel', logo: logoElectro },
  { name: 'Sanvira Industries', logo: logoSanvira },
  { name: 'Bhavya Cements', logo: logoBhavya },
  { name: 'Anjani Portland', logo: logoAnjani },
  { name: 'Parasakti Cement', logo: logoPrashakthi },
  { name: 'Nava Bharat', logo: logoNava },
  { name: 'Panyam Cements', logo: logoPanyam },
  { name: 'TMT Steels', logo: logoTMT },
];

const TrustedBy = () => {
  // Duplicate list to achieve a seamless loop in the marquee
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0078BF] tracking-tight">
          Our Clientele
        </h2>
        <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
          Trusted by leading industrial giants, cement manufacturers, and energy conglomerates nationwide
        </p>
      </div>

      {/* Marquee Track in full color */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-4">
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-52 sm:w-60 h-32 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md flex flex-col items-center justify-center p-3 hover:scale-105 transition-all duration-300 group"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-14 object-contain filter group-hover:brightness-105 transition-all"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-xs font-semibold text-gray-700 tracking-wide text-center truncate max-w-full group-hover:text-[#0078BF] transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
