import React from 'react';
import IntroductionSection from './IntroductionSection'
import VideosSection from './VideosSection';
import TokenomicsSection from './TokenomicsSection';

const MainSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      <IntroductionSection />
      <VideosSection />
      <TokenomicsSection />
    </div>
  );
};

export default MainSection;
