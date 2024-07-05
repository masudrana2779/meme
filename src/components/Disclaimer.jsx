import React from 'react';
import { ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const Disclaimer = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full" style={{ borderRadius: '12px' }}>
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex items-center mb-4 md:mb-0 md:mr-8">
          <img
            src="/path-to-your-images/BLNDR-Logo.png"
            alt="BLNDR Logo"
            className="w-16 h-16"
          />
          <div className="ml-4">
            <p className="text-lg font-bold">Follow Us!</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://example.com" className="text-green-500">
                <ChatBubbleLeftRightIcon className="w-8 h-8" />
              </a>
              <a href="https://example.com" className="text-green-500">
                <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 text-white">
          <h4 className="text-lg font-bold mb-2">DISCLAIMERS</h4>
          <p className="text-sm">
            $BLNDR is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only.
          </p>
          <p className="text-sm mt-2">
            The $BLNDR coin isn’t linked to any real-world brand or product. It's just a tribute to a beloved and well-known pawsomesauce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
