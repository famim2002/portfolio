import React from 'react'
import Header from '../../common-components/Header'

const AboutMe = () => {
  return (
    <section className="px-6 sm:px-3 bg-brandColor">
      <div className="grid grid-cols-1 place-items-center gap-10">
        <div>
          <Header header={"about me"} className="text-black" />
        </div>
        <div className="grid  md: grid-cols-2 gap-5 place-items-center">
          <h2>education</h2>
          <h2>introduction</h2>

            <h2 className="">skills</h2>
     
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
