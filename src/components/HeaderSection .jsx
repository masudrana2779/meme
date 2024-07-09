import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

const HeroSection = () => {
  return (
    <>
      <div className="relative bg_gradientB z-10">
        <div className="container">
          <img
            className="absolute top-0 left-0 z-[-1]"
            src={"/img/banner_SVG.png"}
            alt="banner_SVG.png"
          />
          <Nav />
          <div className=" text-white pt-24 pb-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center w-full md:w-1/2 lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-6xl font-black mb-9">
                THE STRONGEST <br />
              </h1>
              <div className="mb-14 pb-1">
                <h1 className="text-4xl md:text-[80px] font-black ">
                  <span className="text-pink-500">MEME </span>
                  COCKTAIL
                </h1>
              </div>
              <div className="flex space-x-6 items-center mb-11">
                <div className="">
                  <img src="/img/l.png" alt="" />
                </div>
                <div className="">
                  <img src="/img/p.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
              <Link
                to={"/"}
                className="text-black text-[16px] leading-[38px] font-bold  text-center py-2 px-5 rounded-full bg_gradient cursor-pointer w-[220px] rowd"
              >
                <span>BUY NOW</span>
              </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img src={"/img/BlndrPic.png"} alt="BLNDR" className=" h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
