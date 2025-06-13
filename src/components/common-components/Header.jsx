import React from 'react'

const Header = ({ header, className }) => {
  return (
    <div className="flex items-center justify-center  pt-10 sm:pt-16">
      <h2
        className={`text-4xl sm:text-6xl md:text-8xl  font-headerFont underline ${className}`}
      >
        {header}
      </h2>
    </div>
  );
};

export default Header
