import React, { useEffect } from "react";

// NOTE: Ensure `webgl-fluid.js` is loaded in your project (via import or <script>).
// You can include it from CDN if needed:
// <script src="https://cdn.jsdelivr.net/gh/PavelDoGreat/WebGL-Fluid-Simulation/fluid.min.js"></script>

const FluidBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/PavelDoGreat/WebGL-Fluid-Simulation/fluid.min.js";
    script.onload = () => {
      window["webgl-fluid"].default(document.querySelector("canvas"), {
        TRANSPARENT: true,
        IMMEDIATE: false,
        TRIGGER: "hover",
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2,
        VELOCITY_DISSIPATION: 1,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 4,
        CURL: 4,
        SPLAT_RADIUS: 0.9,
        SPLAT_FORCE: 5500,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 3,
        PAUSED: false,
        BACK_COLOR: { r: 10, g: 10, b: 10 },
        BLOOM: false,
        SUNRAYS: false,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[rgb(10,10,10)] text-[rgb(120,120,120)] font-sans grid place-items-center">
      {/* Canvas Background */}
      <canvas className="fixed inset-0 w-full h-full z-0" />

      {/* Floating Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-[rgb(60,70,70)] text-4xl font-semibold animate-blink">
          Move your cursor!
        </h1>
      </div>

      {/* Brand Info */}
      <p className="absolute top-[1%] right-[1%] text-[13px] tracking-[2px] font-semibold text-[rgb(230,230,230)] font-sans z-10">
        By ElTjempo - Timo Timmermans
      </p>

      {/* Blinker Animation */}
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0.3; }
          }
          .animate-blink {
            animation: blink 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FluidBackground;
