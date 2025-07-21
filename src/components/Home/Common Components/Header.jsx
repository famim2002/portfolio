import React from 'react'

const Header = ({title,className}) => {
  return (
    <div>
      <h2 className={`${className} text-6xl mb-6 md:mb-10 font-regularFont`}>{title}</h2>
    </div>
  );
}

export default Header