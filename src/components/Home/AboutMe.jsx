import React, { useEffect, useRef, useState } from 'react';
import Header from './Common Components/Header'


const AboutMe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
   
      <section
        ref={sectionRef}
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } text-white text-xl bg-[#0d0d0d] min-h-screen flex items-center justify-center px-6`}
      >
        <div className="container">
          <Header title={"about me"} className={"text-center"} />
          <p className="text-2xl  leading-relaxed font-regularFont text-textColor text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti a
            reiciendis quaerat quia esse nam culpa at reprehenderit ipsam. Ipsa
            illo nostrum magni cupiditate aperiam sequi exercitationem
            perspiciatis nobis autem esse? Odio in aut temporibus, ad incidunt
            dolor tempora, iure, suscipit consequatur minus asperiores ducimus
            ipsam dolorum sint soluta beatae!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
