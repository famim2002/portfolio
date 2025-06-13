import React from 'react'
import InfiniteMarquee from './home-components/InfiniteMarquee'
import Header from '../common-components/Header'

const ServicesMe = () => {
  return (
    <section className="h-dvh ">
      <div className=" pt-10">
        <InfiniteMarquee />
      </div>
      <div className="px-3 grid grid-cols-3">
        <Header header={"services"} className={"text-white "} />
        <div>
          
        </div>
      </div>
    </section>
  );
}

export default ServicesMe;
