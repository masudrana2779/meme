const Disclaimer = () => {
  return (
    <div
      className="bg-[#26313E] pt-10 md:pt-24 pb-12 rounded-t-[90px] border-t-2 border-[rgba(255,255,255,0.5)]"
    >
      <div className="container flex flex-col md:flex-row items-start md:space-x-40">
        <div className="mb-4 md:mb-0 md:mr-8">
          <img
            src="/img/flogo.png"
            alt="BLNDR Logo"
            className="mb-[18px] mx-auto"
          />
          <div className="ml-4">
            <h4 className="text-2xl md:text-5xl font-bold mb-5 text-white">Follow Us!</h4>
            <div className="flex space-x-2 mt-2 justify-center">
              <img src="/img/s1.png" alt="" />
              <img src="/img/s2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1 text-white">
          <h4 className="md:text-[40px] text-2xl font-bold mb-4 md:mb-8">DISCLAIMERS</h4>
          <p className="font-thin text-base md:text-xl mb-9 opacity-70">
            $BLNDR is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. The coin is
            for entertainment purposes only.
          </p>
          <p className="font-thin text-base md:text-xl opacity-70">
            The $BLNDR coin isn’t linked to any real-world brand or product.
            It&apos;s just a tribute to a beloved and well-known pawsomesauce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
