import React from "react";

const BrandButton = () => {
  return (
    <div className="relative inline-block group overflow-hidden">
      <button className="relative z-10 px-6 py-4 text-white uppercase text-[17px] font-medium transition-all duration-500 group-hover:text-white">
        Hover me
      </button>

      {/* Bottom red line (like ::before) */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#fe0000] transition-all duration-500 group-hover:w-full z-20" />

      {/* Background fill (like ::after) */}
      <span className="absolute left-0 bottom-0 w-full h-0 bg-[#fe0000] transition-all duration-400 delay-400 group-hover:h-full z-0" />
    </div>
  );
};

export default BrandButton;
