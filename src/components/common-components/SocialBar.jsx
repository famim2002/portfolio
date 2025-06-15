import React from "react";
import {
  FaFacebookF,

  FaTwitter,
  FaInstagram,
 
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-[70vh] gap-4 px-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white w-[90px] h-[90px] rounded-[28%] shadow-md flex items-center justify-center transition duration-300 hover:bg-[#4267B2]"
      >
        <FaFacebookF className="text-[#4267B2] text-3xl transition-all duration-300 group-hover:text-white group-hover:scale-125" />
      </a>

  

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white w-[90px] h-[90px] rounded-[28%] shadow-md flex items-center justify-center transition duration-300 hover:bg-[#1DA1F2]"
      >
        <FaTwitter className="text-[#1DA1F2] text-3xl transition-all duration-300 group-hover:text-white group-hover:scale-125" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white w-[90px] h-[90px] rounded-[28%] shadow-md flex items-center justify-center transition duration-300 hover:bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#285AEB]"
      >
        <FaInstagram  className=" bg-clip-text bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#285AEB] text-3xl transition-all duration-300 group-hover:text-white group-hover:scale-125" />
      </a>

    
    </div>
  );
};

export default SocialLinks;
