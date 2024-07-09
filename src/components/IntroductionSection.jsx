import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <div className="text-white py-14 px-4 text-center md:mb-32 mb-10">
      <div className="relative container">
        <div className="border-[3px] rounded-[40px] px-4 md:px-28 pt-0 md:pt-20 pb-10 md:pb-20  bg-[url('/img/fbg.png')]">
          <div className="md:translate-y-[-75%] translate-y-[-60%] mb-[-60px] md:mb-[-300px]">
            <img
              src={"/img/Polygon3.png"}
              alt="Character"
              className="w-full md:max-w-[497px] max-w-[160px] mx-auto h-auto object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-5xl font-black mb-10">
            FROM ALL THE MEMES TO ONE BIG MEME MIX
          </h2>
          <div className="max-w-[1050px] w-full mx-auto">
            <p className="mb-8 text-base text-center uppercase">
              Welcome To BLNDR, Where Your Favorite Crypto Memes Come To Life In
              A Vibrant, High-Energy Mix. We Blend Iconic Characters Into An
              Exhilarating Cocktail, Transforming Your Crypto Experience Into A
              Thrilling Adventure.
            </p>
            <p className="mb-12 text-base text-center uppercase md:px-20">
              Join Us And Dive Into The Ultimate Meme Mix Revolution, Taking
              Your Crypto Journey To New Heights. Discover The Magic Of BLNDR
              Today!
            </p>
          </div>
          <Link
            to={"/"}
            className="text-black rowd text-[16px] leading-[38px] font-bold   text-center py-2 px-5 rounded-full bg_gradient w-[220px] inline-block"
          >
            <span>BUY NOW</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
