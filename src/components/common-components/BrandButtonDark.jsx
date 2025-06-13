import React from "react";

const BrandButtonDark = () => {
  return (
    <div className="relative group inline-block overflow-hidden">
      <button className="relative z-10 px-6 py-3 text-white uppercase font-medium text-[17px] transition-colors duration-500 group-hover:text-white">
        Click Me
      </button>

      {/* Bottom border animation */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#0f0e0e] transition-all duration-500 group-hover:w-full z-20" />

      {/* Background fill animation */}
      <span className="absolute left-0 bottom-0 w-full h-0 bg-[#0f0e0e] transition-all duration-500 delay-200 group-hover:h-full z-0" />
    </div>
  );
};

export default BrandButtonDark;
