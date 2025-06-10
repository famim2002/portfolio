import React, { useEffect, useRef } from "react";

const MouseTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
    });

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        const scale =
          (circlesRef.current.length - index) / circlesRef.current.length;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${scale})`;
        circle.x = x;
        circle.y = y;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {colors.slice(0, 20).map((color, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="h-6 w-6 rounded-full fixed top-0 left-0 pointer-events-none z-[99999999]"
          style={{ backgroundColor: color }}
        />
      ))}
    </>
  );
};

export default MouseTrail;
