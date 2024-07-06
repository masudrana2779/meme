import Banner from "../../Banner/Banner";
import MainSection from "../../MainSection";
import Partners from "../../Partners";
import HowToBuy from "../../HowToBuy";
import RoadMap from "../../RoadMap";
import Disclaimer from "../../Disclaimer";
import HeaderSection from "../../HeaderSection ";
 

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
    <HeaderSection />
     <Partners />
     <MainSection />
     <HowToBuy />
     <RoadMap />
     <Disclaimer />
      {/* <JokerCatAcademy />
      <Roadmap />
      <Tokenomics />
      <Partner /> */}
    </>
  );
};

export default Home;

