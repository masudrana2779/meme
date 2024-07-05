import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Liquidity', 'Team', 'Staking/Marketing', 'Airdrop', 'Pre-Sale'],
  datasets: [
    {
      data: [35, 10, 25, 10, 20],
      backgroundColor: ['#4CAF50', '#FF9800', '#9C27B0', '#03A9F4', '#E91E63'],
    },
  ],
};

const TokenomicsSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">TOKENOMICS</h2>
      <div className="w-full max-w-lg mx-auto">
        <Doughnut data={data} />
      </div>
      <p className="text-center mt-4">Contract Address: 0x1234567890abcdef1234567890abcdef12345678</p>
    </div>
  );
};

export default TokenomicsSection;
