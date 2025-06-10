import React, { useEffect, useRef } from "react";

const MouseTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  const colors = [
    "#ffff",
    "#f56e6e",
    "#f75757",
    "#f63c3c",
    "#f73030",
    "#ff1f1f",
    "#fc1414",
    "#fe0d0d",
    "#ff0000",
    "#d81212",
    "#da0303",
    "#cf0404",
    "#b20202",
    "#8e0202",
    "#880202",
    "#7e0303",
    "#690101",
    "#670202",
    "#4b0000",
    "#360000",
    "#f73030",
    "#ff0000",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Initialize circle positions
    circlesRef.current.forEach((circle) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
    });

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      // Detect the element under the mouse
      const element = document.elementFromPoint(x, y);
      const computedColor = element
        ? window.getComputedStyle(element).backgroundColor
        : "";

      // Check if it's red
      const isHoveringRed = computedColor.includes("#fe0000");

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        const scale =
          (circlesRef.current.length - index) / circlesRef.current.length;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${scale})`;

        // Change color based on background
        circle.style.backgroundColor = isHoveringRed
          ? "#000"
          : colors[index % colors.length];

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
