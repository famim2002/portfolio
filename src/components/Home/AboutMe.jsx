import React, { useEffect, useRef, useState } from 'react';
import Header from './Common Components/Header';

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [education, setEducation] = useState(false);
  const [certification, setCertification] = useState(false);

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

  const toggleEducation = () => {
    setEducation((prev) => !prev);
    // Close certification if open
    setCertification(false);
  };

  const toggleCertification = () => {
    setCertification((prev) => !prev);
    // Close education if open
    setEducation(false);
  };

  return (
    <section
      ref={sectionRef}
      className={`transition-all duration-1000 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } text-white text-xl bg-[#0d0d0d] min-h-screen flex items-center justify-center px-6`}
    >
      <div className="container">
        <Header title={'about me'} className={'text-center'} />

        <p className="zoom-text text-2xl leading-relaxed font-regularFont text-textColor text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit...
        </p>

        <div className="w-full grid grid-cols-2 gap-4 pt-10">
          {/* Education Button */}
          <div className="relative">
            <button
              onClick={toggleEducation}
              className="w-full cursor-pointer bg-[#ffffff17] duration-300 focus:bg-[#fff] focus:text-[#131313] py-4"
            >
              <h2 className="font-regularFont text-4xl lg:text-6xl">education</h2>
            </button>

            {/* Education Modal */}
            <div
              className={`absolute top-full mt-2 left-0 w-full bg-white text-black p-6 shadow-lg transition-all duration-500 ease-in-out transform ${
                education
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">🎓 Bachelor of Science</h3>
                  <p className="text-sm">XYZ University, 2020 - 2024</p>
                </div>
               
                <div>
                  <h3 className="text-xl font-semibold">📚 Online Courses</h3>
                  <ul className="list-disc list-inside text-sm">
                    <li>React JS - Udemy</li>
                    <li>Data Structures - Coursera</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Button */}
          <div className="relative">
            <button
              onClick={toggleCertification}
              className="w-full cursor-pointer bg-[#ffffff17] duration-300 focus:bg-[#fff] focus:text-[#131313] py-4"
            >
              <h2 className="font-regularFont text-4xl lg:text-6xl">certification</h2>
            </button>

            {/* Certification Modal */}
            <div
              className={`absolute top-full mt-2 left-0 w-full bg-white text-black p-6  shadow-lg transition-all duration-500 ease-in-out transform ${
                certification
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">📜 Certifications</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Frontend Web Development - FreeCodeCamp</li>
                  <li>JavaScript Algorithms and Data Structures - FCC</li>
                  <li>AWS Certified Cloud Practitioner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
