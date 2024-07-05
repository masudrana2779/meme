import React from 'react';

const partners = [
  { name: 'Jupiter', logo: 'path-to-jupiter-logo' },
  { name: 'Raydium', logo: 'path-to-raydium-logo' },
  { name: 'DEXScreener', logo: 'path-to-dexscreener-logo' },
  { name: 'PinkSale', logo: 'path-to-pinksale-logo' },
  { name: 'DEXTools', logo: 'path-to-dextools-logo' },
  { name: 'Cyberscope', logo: 'path-to-cyberscope-logo' },
];

const Partners = () => {
  return (
    <div className="bg-gray-900 py-8">
      <h2 className="text-center text-3xl text-white font-bold mb-8">Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-gray-800 p-4 rounded-md flex items-center justify-center w-32 h-16"
          >
            <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;