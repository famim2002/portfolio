import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const extraCircleRef = useRef(null); // 👈 New circle

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    const extra = extraCircleRef.current;

    let mouseX = 0,
      mouseY = 0;
    let outlineX = 0,
      outlineY = 0;
    const delay = 0.1;

    const animate = () => {
      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      extra.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`; // Follows outline

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
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-50 w-5 h-5 bg-white rounded-full pointer-events-none"
      />

      {/* Outline circle */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 z-40 w-20 h-20 border-[6px] border-white rounded-full pointer-events-none"
      />

      {/* Extra filled circle */}
      <div
        ref={extraCircleRef}
        className="fixed top-0 left-0 z-30 w-10 h-10 bg-white opacity-20 rounded-full pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;
