import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 15; // Higher = faster
    const interval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(interval);
      }
    }, 16); // ~60 frames per second
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed text-4xl text-[#000000e8] bottom-5 right-5 bg-[#f4f6d4] cursor-pointer p-1  rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300 z-50"
        aria-label="Back to top"
      >
        <RiArrowUpSLine />
      </button>
    )
  );
};

export default BackToTopButton;
