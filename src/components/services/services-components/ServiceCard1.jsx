import React from "react";

const ServiceCard1 = ({ tag, icon }) => {
  return (
    <div className="relative w-full h-full mx-auto  rounded-2xl overflow-hidden shadow-[0_8px_28px_-9px_rgba(0,0,0,0.45)] bg-transparent cursor-pointer transition-all group  active:bg-white ">
      {/* Wave elements with faster animation */}
      <div
        className="absolute w-full h-full opacity-60 left-0 top-0 -ml-1/2 -mt-[20%] rounded-full bg-gradient-to-tr from-[#fe0000] via-[#fe0000] to-[#fe0000]"
        style={{
          animation: "wave 18s linear infinite",
        }}
      />
      <div
        className="absolute w-full h-full opacity-60 left-0 top-[210px] -ml-1/2 -mt-[70%] rounded-full bg-gradient-to-tr from-[#fe0000] via-[#fe0000] to-[#fe0000] "
        style={{
          animation: "wave 15s linear infinite",
        }}
      />
      <div
        className="absolute w-full h-full opacity-60 left-0 top-[250px] -ml-1/2 rounded-full bg-gradient-to-tr from-[#fe0000] via-[#fe0000] to-[#fe0000] transition-all group-hover:from-[#000000] group-hover:via-[#000000]  group-hover:to-[#000000]"
        style={{
          animation: "wave 13s linear infinite",
        }}
      />

      {/* Content */}
      <div className="h-full absolute top-[5.6rem] left-0 right-0 text-[25px] text-center text-white font-headerFont ">
        <div className="text-[65px] flex justify-center mb-5 ">{icon}</div>
        <h2>{tag}</h2>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-5 sm:gap-10 justify-center mt-2 text-sm font-light  md:gap-20">
          <h3 className="flex flex-row lg:flex-col xl:flex-row xl:gap-7 justify-center text-4xl sm:text-6xl ">
            ui/ux <span>design</span>
          </h3>
          <p className="text-3xl lg:text-5xl p-1 text-white font-headerFont underline  group-hover:text-red-600 group-hover:bg-amber-50">
            CLICK HERE
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

export default ServiceCard1;
