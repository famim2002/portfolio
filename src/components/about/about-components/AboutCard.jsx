import React from "react";

const Card = ({ tag, icon }) => {
  return (
    <div className="relative w-[240px] h-[330px] mx-auto mt-24 rounded-2xl overflow-hidden shadow-[0_8px_28px_-9px_rgba(0,0,0,0.45)] bg-transparent transition-all group border-b-4  border-b-transparent hover:border-b-white active:bg-white">
      {/* Wave elements with faster animation */}
      <div
        className="absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-1/2 -mt-[70%] rounded-[40%] bg-gradient-to-tr from-[#000000] via-[#19191b] to-[#121313]"
        style={{
          animation: "wave 18s linear infinite",
        }}
      />
      <div
        className="absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-1/2 -mt-[70%] rounded-[40%] bg-gradient-to-tr from-[#000000] via-[#19191b] to-[#121313] "
        style={{
          animation: "wave 15s linear infinite",
        }}
      />
      <div
        className="absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-1/2 -mt-[70%] rounded-[40%] bg-gradient-to-tr from-[#000000] via-[#19191b] to-[#121313] transition-all group-hover:from-[#fe0000]  group-hover:to-[#fe0000]"
        style={{
          animation: "wave 13s linear infinite",
        }}
      />

      {/* Content */}
      <div className="absolute top-[5.6rem] left-0 right-0 text-[25px] text-center text-white font-headerFont cursor-pointer">
        <div className="text-[65px] flex justify-center mb-5 ">
          {icon}
        </div>
        <h2>{tag}</h2>
        <div className="mt-2 text-sm font-light lowercase">
          <p className="text-[18px] text-white font-regularFont underline">
            click here
          </p>
        </div>
      </div>

      {/* Animation keyframes embedded as a style tag */}
      <style>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
