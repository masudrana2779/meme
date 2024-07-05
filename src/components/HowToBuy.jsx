import React from 'react';

const steps = [
  {
    title: 'Get a wallet',
    description: 'To get started, you’ll need a Solana-compatible wallet. We recommend using wallets such as Phantom, Sollet, or Solflare.',
    icon: 'path-to-wallet-icon', // Replace with the actual path to the icon
  },
  {
    title: 'Buy some Solana',
    description: 'Once your wallet is set up, add some Solana (SOL) to it. You can purchase SOL from exchanges like Binance, Coinbase, or Kraken.',
    icon: 'path-to-solana-icon', // Replace with the actual path to the icon
  },
  {
    title: 'Connect wallet to DEX',
    description: 'Visit Raydium and connect your Solana wallet. Look for the “Connect Wallet” button at the top right corner.',
    icon: 'path-to-dex-icon', // Replace with the actual path to the icon
  },
  {
    title: 'Buy BLNDR token',
    description: 'After connecting your wallet, search for the token with the CA and decide how much you want to buy.',
    icon: 'path-to-blndr-icon', // Replace with the actual path to the icon
  },
];

const HowToBuy = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <h2 className="text-center text-3xl font-bold mb-8">HOW TO BUY BLNDR</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md flex items-center">
            <img src={step.icon} alt={step.title} className="w-16 h-16 mr-6" />
            <div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToBuy;
