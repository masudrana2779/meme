const steps = [
  {
    title: "Get a wallet",
    description:
      "To get started, you’ll need a Solana-compatible wallet. We recommend using wallets such as Phantom, Sollet, or Solflare.",
    icon: "/img/1i.png", // Replace with the actual path to the icon
  },
  {
    title: "Buy some Solana",
    description:
      "Once your wallet is set up, add some Solana (SOL) to it. You can purchase SOL from exchanges like Binance, Coinbase, or Kraken.",
    icon: "/img/2i.png", // Replace with the actual path to the icon
  },
  {
    title: "Connect wallet to DEX",
    description:
      "Visit Raydium and connect your Solana wallet. Look for the “Connect Wallet” button at the top right corner.",
    icon: "/img/3i.png", // Replace with the actual path to the icon
  },
  {
    title: "Buy BLNDR token",
    description:
      "After connecting your wallet, search for the token with the CA and decide how much you want to buy.",
    icon: "/img/4i.png", // Replace with the actual path to the icon
  },
];

const HowToBuy = () => {
  return (
    <div className="bg-[#14212F] relative text-white py-10 md:py-24 overflow-hidden">
      <div className="absolute left-0 -bottom-14">
        <img src="/img/leftB.png" alt="" />
      </div>
      <div className="absolute right-0 -top-14">
        <img src="/img/rightT.png" alt="" />
      </div>
      <div className="container">
        <h2 className="text-3xl md:text-6xl font-bold mb-5 md:mb-20 text-center">
          HOW TO BUY BLNDR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bgd rounded-md p-[1px] flex">
              <div className="bgdi p-5 md:p-12 rounded-md w-full">
                <div className="flex h-32 items-end mb-5">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full max-w-[140px] -ml-2"
                  />
                </div>
                <div className="max-w-[500px] w-full">
                  <h3 className="text-xl md:text-3xl rowd leading-[45px] mb-2">{step.title}</h3>
                  <p className="mon text-base md:text-xl leading-6 md:leading-9 font-thin">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
