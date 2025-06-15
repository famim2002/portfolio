import React from "react";
import InfiniteMarquee from "./home-components/InfiniteMarquee";
import Header from "../common-components/Header";
import ServiceCard1 from "../services/services-components/ServiceCard1";

const ServicesMe = () => {
  return (
    <>
      <div className=" py-10">
        <InfiniteMarquee />
      </div>
      <section className="h-dvh">
        <div className="h-full px-3 grid grid-col-1 sm:grid-col-2 lg:grid-cols-3 gap-5 ">
          <div className="border-2 border-secondaryColor rounded-xl gird grid-cols-1 place-items-center  overflow-hidden">
            <Header header={"services"} className={"text-white mb-5"} />
            <ServiceCard1 tag={"ui/ux"} subTag={"design"} />
          </div>
          <div className="border-2 border-secondaryColor rounded-xl overflow-hidden">
            <ServiceCard1 tag={"front-end"} subTag={"development"} />
          </div>
          <div className="border-2 border-secondaryColor rounded-xl overflow-hidden">
            <ServiceCard1 tag={"back-end"} subTag={"development"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesMe;
