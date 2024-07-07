const Disclaimer = () => {
  return (
    <div
      className="bg-gray-800 p-6 rounded-lg shadow-lg w-full"
      style={{ borderRadius: "12px" }}
    >
      <div className="flex flex-col md:flex-row items-start">
        <div className="mb-4 md:mb-0 md:mr-8">
          <img
            src="/img/logo.png"
            alt="BLNDR Logo"
            className="w-16 h-16 mx-auto"
          />
          <div className="ml-4">
            <h4 className="text-4xl font-bold mb-2 text-white">Follow Us!</h4>
            <div className="flex space-x-4 mt-2">
              <img src="/img/s1.png" alt="" />
              <img src="/img/s2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1 text-white">
          <h4 className="text-lg font-bold mb-2">DISCLAIMERS</h4>
          <p className="text-sm">
            $BLNDR is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. The coin is
            for entertainment purposes only.
          </p>
          <p className="text-sm mt-2">
            The $BLNDR coin isn’t linked to any real-world brand or product.
            It&apos;s just a tribute to a beloved and well-known pawsomesauce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
