import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5'; // Fixed import: IoLogoInstagram (not InstagramLogo)
import { RiXLine } from 'react-icons/ri'; // Updated: RiXLine is the correct icon for X (Twitter)

const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white py-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-end space-x-6"> {/* Added justify-end for right alignment */}
          <a 
            href="https://www.meta.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors duration-200"
            aria-label="Visit Meta"
          >
            <TbBrandMeta className="h-5 w-5" />
          </a>
          
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors duration-200"
            aria-label="Visit Instagram"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          
          <a 
            href="https://www.x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-300 transition-colors duration-200"
            aria-label="Visit X (formerly Twitter)"
          >
            <RiXLine className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;