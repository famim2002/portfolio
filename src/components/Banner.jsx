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

          <div className="block lg:hidden">
            <LiveDate />
          </div>

          <div className="origin-top-left mt-auto">
            <h2
              className="text-[calc(5dvh+50px)] sm:text-[140px] md:text-[180px] lg:text-[220px] pt-20 leading-25 sm:leading-35 md:leading-42 lg:leading-52"
              style={{
                fontFamily: "Spacema",
                color: "#f7f6f5",
                letterSpacing: "0.1px",
              }}
            >
              designer
              <span className="pl-3 font-regularFont font-extrabold text-[40px] md:text-[60px] lg:text-[100px] text-amber-100">
                &
              </span>
              <br />
              developer
            </h2>
          </div>
        </div>

        <div>
          {/* This LiveDate will show only on lg and above */}
          <div className="hidden lg:block">
            <LiveDate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
