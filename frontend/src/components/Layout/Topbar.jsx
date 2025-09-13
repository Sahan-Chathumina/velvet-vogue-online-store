import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5'; 
import { RiTwitterXLine  } from 'react-icons/ri'; 

const Topbar = () => {
  return (
    <div className="bg-[#ea3a0e] text-white py-2">
      <div className="container mx-auto">
        <div className="flex items-center space-x-6"> 
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
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;