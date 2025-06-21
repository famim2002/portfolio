import React from "react";

const Banner = () => {
  return (
    <section className="px-3 ">
      <div className="container ">
        <div className="flex flex-col h-[calc(100dvh-90px)]">
          {/* Tagline / Label */}
          <h3 className="nav-li-css mt-auto text-[35px] w-fit font-headerFont text-amber-50 bg-[#00000065] px-2 py-1 rounded">
            creative
          </h3>

          {/* Main Heading */}
          <div className=" origin-top-left mt-auto ">
            <h2
              className="text-[95px] sm:text-[140px] md:text-[180px] lg:text-[220px]  pt-20 leading-25 sm:leading-35 md:leading-42 lg:leading-52"
              style={{
                fontFamily: "Spacema",

                color: "#ffffff",
                letterSpacing: "0.1px",
              }}
            >
              designer
              <span className="pl-3 font-regularFont font-extrabold text-[40px]  md:text-[60px] lg:text-[100px]  text-amber-100">
                &
              </span>
              <br />
              developer
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
