import React from "react";
import LiveDate from "./LiveDate";

const Banner = () => {
  return (
    <section className="px-3 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 h-[calc(100dvh-90px)]">
        <div className="flex flex-col">
          {/* This LiveDate will show only before lg */}
          <div className="mt-5 block lg:hidden">
            <h3 className="nav-li-css mt-auto text-[35px] w-fit font-headerFont text-amber-50 bg-[#00000065] px-2 py-1 rounded">
              creative
            </h3>
          </div>

          <div className="block lg:hidden bg-[#00000028]">
            <LiveDate />
          </div>

          <div className="origin-top-left mt-auto">
            <h1
              className="text-[calc(5dvh+50px)] sm:text-[calc(5dvh+50px)] md:text-[calc(5dvh+80px)] lg:text-[calc(5dvh+110px)] xl:text-[calc(5dvh+130px)] 2xl:text-[calc(5dvh+180px)] pt-20 leading-25 sm:leading-35 md:leading-42 lg:leading-52 bg-[#00000028]"
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
          <div className="hidden lg:block bg-[#00000028]">
            <LiveDate />
          </div>

          <div className="pt-5">
            <h2 className="text-white text-[calc(2dvh+10px)] font-headerFont  max-w-2xl bg-[#00000028]">
              <span className="text-transparent">kdskadsa</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Facilis distinctio
              dolorum ipsum iusto illum! Maiores, accusantium. Numquam
              reiciendis in temporibus!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
