import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    const delay = 0.1;

    const animate = () => {
      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-50 w-2 h-2 bg-orange-500 rounded-full pointer-events-none"
      />
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 z-40 w-10 h-10 border-2 border-orange-500 rounded-full pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;
