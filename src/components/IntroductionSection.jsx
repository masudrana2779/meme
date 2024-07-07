import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <div className="text-white py-12 px-4 text-center md:mb-40 mb-10">
      <div className="relative container">
        <div className="border-[3px] rounded-[40px] px-28 py-20  bg-[url('/img/fbg.png')]">
          <div className="translate-y-[-75%] mb-[-310px]">
            <img
              src={"/img/Polygon3.png"}
              alt="Character"
              className="w-full max-w-[497px] mx-auto h-auto object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            FROM ALL THE MEMES TO ONE BIG MEME MIX
          </h2>
          <p className="mb-6 text-base text-center uppercase px-5">
            Welcome To BLNDR, Where Your Favorite Crypto Memes Come To Life In A
            Vibrant, High-Energy Mix. We Blend Iconic Characters Into An
            Exhilarating Cocktail, Transforming Your Crypto Experience Into A
            Thrilling Adventure.
          </p>
          <p className="mb-6 text-base text-center uppercase px-5 md:px-20">
            Join Us And Dive Into The Ultimate Meme Mix Revolution, Taking Your
            Crypto Journey To New Heights. Discover The Magic Of BLNDR Today!
          </p>
          <Link
            to={"/"}
            className="text-white text-[18px] leading-[26px] font-medium  text-center py-2 px-5 rounded-full bg_gradient w-[220px] inline-block"
          >
            <span>BUY NOW</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
