import React from "react";
import MatrixRain from "./home-components/MatrixRain";

import BannerScrambleText from "./home-components/BannerScrambleText";


const Banner = () => {
  return (
    <section className="banner-custom-height px-3 xl:pl-20 flex items-center justify-center">
      <MatrixRain />

      <div className="w-full mx-auto text-center ">
       
        <h2
          className="text-[50px] text-white  font-headerFont pt-5
                       sm:text-[95px] sm:pt-0 leading-16 sm:leading-25 xl:leading-30"
        >
          <span className="text-[95px] px-2 ">Hi I'm</span> <br />
        
          <BannerScrambleText />
        </h2>
      </div>
    </section>
  );
};

export default Banner;
