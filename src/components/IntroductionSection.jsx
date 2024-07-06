import React from 'react';
import PinkSale from './Images/Polygon3.png'; // Importing the character image

const IntroductionSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 lg:px-24 flex flex-col items-center text-center">
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-6">
        <img src={PinkSale} alt="Character" className="w-full h-full object-contain" />
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">
        FROM ALL THE MEMES TO ONE BIG MEME MIX
      </h2>
      <p className="mb-6 max-w-2xl">
        Welcome to BLNDR, where your favorite crypto memes come to life in a vibrant, high-energy mix. We blend iconic characters into an exhilarating cocktail, transforming your crypto experience into a thrilling adventure. Join us and dive into the latest meme mix revolution, taking your crypto journey to new heights. Discover the magic of BLNDR today!
      </p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-full">
        BUY NOW
      </button>
    </div>
  );
};

export default IntroductionSection;
