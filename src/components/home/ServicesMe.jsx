import React from 'react'
import InfiniteMarquee from './home-components/InfiniteMarquee'
import Header from '../common-components/Header'
import ServiceCard1 from '../services/services-components/ServiceCard1'






const ServicesMe = () => {
  return (
    <section className="h-dvh ">
      <div className=" py-10">
        <InfiniteMarquee />
      </div>
      <div className="h-full px-3 grid grid-col-1 sm:grid-col-2 lg:grid-cols-3 gap-2">
        <div className=" gird grid-cols-1 place-items-center  overflow-hidden">
          <Header header={"services"} className={"text-white mb-5"} />
          <ServiceCard1 />
        </div>
        <div className="">
          <ServiceCard1 />
        </div>
        <div className="">
          <ServiceCard1 />
        </div>
      </div>
    </section>
  );
}

export default ServicesMe;
