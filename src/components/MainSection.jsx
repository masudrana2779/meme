import IntroductionSection from "./IntroductionSection";
import VideosSection from "./VideosSection";
import TokenomicsSection from "./TokenomicsSection";

const MainSection = () => {
  return (
    <div className="pt-[60px] md:pt-[300px] bgColor">
      <IntroductionSection />
      <VideosSection />
      <TokenomicsSection />
    </div>
  );
};

export default MainSection;
