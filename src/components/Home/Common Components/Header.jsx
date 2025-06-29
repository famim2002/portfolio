import React from 'react'

const Header = ({title,className}) => {
  return (
    <div>
      <h2 className={`${className} text-4xl font-semibold mb-6 font-headerFont`}>{title}</h2>
    </div>
  );
}

export default Header