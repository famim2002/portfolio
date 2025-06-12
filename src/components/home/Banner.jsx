import React from 'react'
import MatrixRain from './home-components/MatrixRain'



const Banner = () => {
  return (
    <section className="px-3 z-20">
      <MatrixRain/>
      
      <div className=" py-16">
        <h2 className="max-w-6xl text-[95px] text-white  font-headerFont leading-20">
          Lorem ipsum, dolor sit amet consectetur{" "}
          <span className='text-lightBrandColor text-[55px]'>
            {" "}
            adipisicing elit. Ut, natus quod. Minus hic mollitia accusamus nobis
            suscipit aliquam, dolor dolores fuga impedit tempore necessitatibus
            dicta ea voluptate
          </span>{" "}
          ullam voluptatibus est.
        </h2>
      </div>
    </section>
  );
}

export default Banner

