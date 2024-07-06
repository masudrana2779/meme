import React from 'react';
import BlndrPic from './Images/BlndrPic.png'; // Importing the BLNDR image
import PinkSale from './Images/PinkSale.png'; // Importing the PinkSale image

const HeroSection = () => {
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 lg:mb-0">
          <img src={BlndrPic} alt="Logo" className="w-24 h-auto" />
        </div>
        <nav className="space-x-4 mb-4 lg:mb-0 flex flex-wrap justify-center">
          <p className="cursor-pointer">HOME</p>
          <p className="cursor-pointer">ABOUT</p>
          <p className="cursor-pointer">TOKENOMICS</p>
          <p className="cursor-pointer">ROADMAP</p>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full">BUY ON PINKSALE</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full">BUY NOW</button>
        </div>
      </header>
      <div className="bg-gray-900 text-white py-12 px-4 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            THE STRONGEST <span className="text-pink-500">MEME COCKTAIL</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            LIVE ON <span className="text-pink-500">PinkSale</span>
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-full mb-4 md:mb-0">BUY NOW</button>
            <img src={PinkSale} alt="Buy on PinkSale" className="w-40 h-auto cursor-pointer rounded-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={BlndrPic} alt="BLNDR" className="w-64 h-auto lg:w-80" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
