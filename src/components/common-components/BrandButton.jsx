import React from "react";

const BrandButton = () => {
  return (
    <div className="relative inline-block group overflow-hidden bg-primaryColor font-headerFont mt-10 ">
      <button
        type="submit"
        className="relative z-10 px-6 py-4 cursor-pointer text-white uppercase text-[17px] font-medium transition-all duration-500 group-hover:text-white"
      >
        submit
      </button>

      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#fe0000] transition-all duration-500 group-hover:w-full z-20" />

      <span className="absolute left-0 bottom-0 w-full h-0 bg-[#fe0000] transition-all duration-400 delay-400 group-hover:h-full z-0" />
    </div>
  );
};

export default BrandButton;
