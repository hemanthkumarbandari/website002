import React from 'react';
import { Mail } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Email Button */}
      <a
        href="mailto:support@aspinstruments.co.in"
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:bg-blue-700 hover:scale-110 transition-all duration-300 group relative"
        aria-label="Email Us"
      >
        <Mail className="w-6 h-6" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl">
          Email Us
          {/* Tooltip Arrow */}
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-gray-900"></span>
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919921866889"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group relative"
        aria-label="WhatsApp Us"
      >
        {/* Animated pulse ring for WhatsApp (primary CTA usually) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></span>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl">
          WhatsApp Us
          {/* Tooltip Arrow */}
          <span className="absolute top-1/2 -translate-y-1/2 -right-1 border-4 border-transparent border-l-gray-900"></span>
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
