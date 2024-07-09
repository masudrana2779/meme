const Disclaimer = () => {
  return (
    <div
      className="bg-[#26313E] pt-24 pb-12 rounded-t-[90px] border-t-2 border-[rgba(255,255,255,0.5)]"
    >
      <div className="container flex flex-col md:flex-row items-start space-x-40">
        <div className="mb-4 md:mb-0 md:mr-8">
          <img
            src="/img/flogo.png"
            alt="BLNDR Logo"
            className="mb-[18px]"
          />
          <div className="ml-4">
            <h4 className="text-4xl font-bold mb-5 text-white">Follow Us!</h4>
            <div className="flex space-x-4 mt-2">
              <img src="/img/s1.png" alt="" />
              <img src="/img/s2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1 text-white">
          <h4 className="text-[40px] font-bold mb-2">DISCLAIMERS</h4>
          <p className="font-normal text-xl mb-9">
            $BLNDR is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. The coin is
            for entertainment purposes only.
          </p>
          <p className="font-normal text-xl">
            The $BLNDR coin isn’t linked to any real-world brand or product.
            It&apos;s just a tribute to a beloved and well-known pawsomesauce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
