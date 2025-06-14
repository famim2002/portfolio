import React from "react";
import { Link } from "react-router-dom";

const SocialBar = () => {
  return (
    <>
      <div className="flex h-[70px] w-[270px]">
        <Link to="/">
          <div className="relative flex items-center justify-center w-1/4 text-white text-xl transition duration-200 rounded-full hover:bg-[#1a1e22] hover:animate-bounceCustom cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              height="1em"
              viewBox="0 0 496 512"
              className="w-3/5 h-full"
            />
          </div>
        </Link>
        <Link to="/">
          <div className="relative flex items-center justify-center w-1/4 text-white text-xl transition duration-200 rounded-full hover:bg-[#0a66c2] hover:animate-bounceCustom cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="#fff"
              className="w-3/5 h-full"
            />
          </div>
        </Link>
        <Link to="/">
          <div className="relative flex items-center justify-center w-1/4 text-white text-xl transition duration-200 rounded-full hover:bg-[#0059f7] hover:animate-bounceCustom cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill="#fff"
              className="w-3/5 h-full"
            />
          </div>
        </Link>
        <Link to="/">
          <div className="relative flex items-center justify-center w-1/4 text-white text-xl transition duration-200 rounded-full hover:bg-[#1d4292] hover:animate-bounceCustom cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="#fff"
              className="w-3/5 h-full"
            />
          </div>
        </Link>
      </div>

      <style>
        {`
          @layer utilities {
            @keyframes bounceCustom {
              40% { transform: scale(1.4); }
              60% { transform: scale(0.8); }
              80% { transform: scale(1.2); }
              100% { transform: scale(1); }
            }
            .animate-bounceCustom {
              animation: bounceCustom 0.4s linear;
            }
          }
        `}
      </style>
    </>
  );
};

export default SocialBar;
