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
    <div className="bg-[url('/img/pbg.png')] bgt bg-no-repeat bg-cover py-[100px]">
      <div className="container">
        <h2 className="text-center text-3xl md:text-6xl uppercase text-white font-bold pt-3 mb-20">
          Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1210px] w-full mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="mb-[18px]">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
