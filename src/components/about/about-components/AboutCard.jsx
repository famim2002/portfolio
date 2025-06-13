import React from "react";

const cardData = [
  { label: "Github", rotation: "-15", iconPath: "M165.9 397.4c0 2..." },
  { label: "Code", rotation: "5", iconPath: "M392.8 1.2c-17-4..." },
  { label: "Earn", rotation: "-25", iconPath: "M64 64C28.7 64 0 92..." },
];

const AboutCard = () => {
  return (
    <div className="relative flex justify-center items-center group">
      {cardData.map((card, index) => (
        <div
          key={index}
          data-text={card.label}
          className="relative w-[180px] h-[200px] bg-white/10 border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-[10px] m-0 group-hover:mx-[10px] mx-[-45px] backdrop-blur-[10px]"
          style={{ transform: `rotate(${card.rotation}deg)` }}
        >
          <svg
            viewBox="0 0 640 512"
            className="text-white w-10 h-10 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={card.iconPath} />
          </svg>

          {/* Bottom Label - same as ::before */}
          <div className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white text-sm">
            {card.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
