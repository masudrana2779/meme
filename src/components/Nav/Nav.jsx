import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-4">
      <nav className="">
        <div className="container max-w-[1170px] mx-auto flex justify-between items-center p-4">
          <div className="">
            <Link to={"/"} className="cursor-pointer">
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center uppercase space-x-[50px] text-2xl leading-5 font-semibold">
            <Link
              to="Roadmap"
              spy={true}
              smooth={true}
              duration={500}
              className="tg cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="Tokenomics"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              About
            </Link>
            <Link
              to="Tokenomics"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              tokenomics
            </Link>
            <Link
              to="Roadmap"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              roadmap
            </Link>
            <div className="flex space-x-4 items-center pl-20">
              <Link
                to={"/"}
                className="text-black rowd text-center text-[16px] leading-[38px] font-bold py-2 px-5 rounded-full bg_gradient1 cursor-pointer w-[220px]"
              >
                <span>BUY ON PINKSALE</span>
              </Link>
              <Link
                to={"/"}
                className="text-black rowd text-[16px] leading-[38px] font-bold  text-center py-2 px-5 rounded-full bg_gradient cursor-pointer w-[220px]"
              >
                <span>BUY NOW</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="p-4 inline-flex flex-col uppercase space-y-4 text-xl leading-5 font-bold">
            <Link
              to="Roadmap"
              spy={true}
              smooth={true}
              duration={500}
              className="tg cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="Tokenomics"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              About
            </Link>
            <Link
              to="Tokenomics"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              tokenomics
            </Link>
            <Link
              to="Roadmap"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              roadmap
            </Link>
              <div className="space-y-4 items-center">
                <Link
                  to={"/"}
                  className="text-white text-[18px] leading-[26px] font-medium  w-[220px] text-center py-2 px-5 rounded-full bg_gradient1"
                >
                  <span>BUY ON PINKSALE</span>
                </Link>
                <Link
                  to={"/"}
                  className="text-white text-[18px] leading-[26px] font-medium  text-center py-2 px-5 rounded-full bg_gradient w-[220px]"
                >
                  <span>BUY NOW</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
