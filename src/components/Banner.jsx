import React from "react";
import LiveDate from "./LiveDate";

const Banner = () => {
  return (
    <section className="px-3 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-5 h-[calc(100dvh-90px)]">
        <div className="flex flex-col">
          {/* This LiveDate will show only before lg */}
          <div className="mt-5 block ">
            <h3 className="nav-li-css mt-auto text-[35px] w-fit font-headerFont text-amber-50 bg-[#00000040] px-2 py-1 rounded">
              creative
            </h3>
          </div>

          <div className="block lg:hidden bg-[#00000040]">
            <LiveDate />
          </div>

          <div className="origin-top-left mt-auto">
            <h1
              className="text-[calc(10dvh+5px)] sm:text-[calc(5dvh+50px)] md:text-[calc(5dvh+70px)] lg:text-[calc(5dvh+110px)] xl:text-[calc(5dvh+130px)] 2xl:text-[calc(5dvh+180px)]  pt-5 sm:pt-10 md:pt-10 leading-20 sm:leading-35 sm:text-center md:leading-38  lg:leading-42 xl:leading-52 lg:text-left bg-[#00000028]"
              style={{
                fontFamily: "Spacema",
                color: "#f7f6f5",
                letterSpacing: "0.1px",
              }}
            >
              <span>
                designer
                <span className="pl-3 font-regularFont font-extrabold text-[40px] md:text-[60px] lg:text-[100px] text-amber-100">
                  &
                </span>
              </span>
              <span> developer</span>
            </h1>
          </div>
        </div>

        <div>
          {/* This LiveDate will show only on lg and above */}
          <div className="hidden lg:block bg-[#00000040]">
            <LiveDate />
          </div>

          <div className="pt-1 md:pt-5 lg:pt-20 flex">
            <h2 className="text-white mx-auto text-center lg:ml-auto text-[calc(2dvh+2px)] sm:text-[calc(2dvh+5px)] lg:text-[calc(2dvh+7px)] font-headerFont  max-w-2xl bg-[#00000040]">
              <span className="text-transparent ">transparent gap</span> me
              Famim Hayat, I am a react developer and UX/UI designer from{" "}
              <span className="underline"> BANGLADESH</span>. I have many years
              of experience in consulting in all areas of digital. I love
              minimal and brutalist design. I love nature, pizza and art.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
