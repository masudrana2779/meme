import React from "react";

const partners = [
  { name: "Jupiter", logo: "/img/1.png" },
  { name: "Raydium", logo: "/img/2.png" },
  { name: "DEXScreener", logo: "/img/3.png" },
  { name: "PinkSale", logo: "/img/4.png" },
  { name: "DEXTools", logo: "/img/5.png" },
  { name: "Cyberscope", logo: "/img/6.png" },
];

const Partners = () => {
  return (
    <div className="bg-[url('/img/pbg.png')] bgt py-24">
      <h2 className="text-center text-3xl md:text-6xl uppercase text-white font-bold mb-8">
        Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {partners.map((partner) => (
          <div key={partner.name}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
