import React from 'react'
import Header from '../common-components/Header'
import AboutCard from '../about/about-components/AboutCard'
import { FaUserGraduate } from 'react-icons/fa'
import { TbCircleLetterIFilled } from 'react-icons/tb'
import { SiInternetcomputer } from 'react-icons/si'

const AboutMe = () => {
  return (
    <section className=" md:h-dvh py-10 px-6 sm:px-3 bg-brandColor">
      <div className='container'>
        <div>
          <Header header={"about me"} className="text-black" />
        </div>
       
          <div className="grid  md:grid-cols-3 gap-5 md:pt-20 place-items-center ">
            <AboutCard icon={<TbCircleLetterIFilled />} tag={"introduction"} />
            <AboutCard icon={<FaUserGraduate />} tag={"education"} />
            <AboutCard icon={<SiInternetcomputer />} tag={"skills"} />
          </div>
        
        
      </div>
    </section>
  );
}

export default AboutMe;
