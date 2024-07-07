const TokenomicsSection = () => {
  const copyData = "0x1234567890abcdef1234567890abcdef12345678";

  return (
    <div className="py-12 container  md:pb-40 pb-10">
      <h2 className="text-center text-3xl font-bold mb-16 text-white">
        TOKENOMICS
      </h2>
      <div className="text-center mb-4 md:mb-20">
        <img src="/img/gr.png" className="w-full max-w-[1279px]" alt="" />
      </div>
      <div className="w-full truncate bgd rounded-full p-[1px] mx-auto text-white md:w-max">
        <div className="flex rounded-full px-10 py-2 bgdi items-center justify-center w-full truncate">
          <div className=" pr-4 border-r-2 mr-2 truncate">{copyData}</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(copyData);
            }}
          >
            <img src="/img/copy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
