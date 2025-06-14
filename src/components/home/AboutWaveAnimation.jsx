import React from "react";

const AboutWaveAnimation = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes move-forever {
            0% {
              transform: translate3d(-90px, 0, 0);
            }
            100% {
              transform: translate3d(85px, 0, 0);
            }
          }
        `}
      </style>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[15vh] min-h-[100px] max-h-[150px] md:h-[40px] md:min-h-[40px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18
              58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>

        <g className="parallax">
          <use
            href="#gentle-wave"
            x="48"
            y="0"
            fill=""
            style={{
              animation:
                "move-forever 7s cubic-bezier(0.55,0.5,0.45,0.5) infinite",
              animationDelay: "-2s",
            }}
          />
          <use
            href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
            style={{
              animation:
                "move-forever 10s cubic-bezier(0.55,0.5,0.45,0.5) infinite",
              animationDelay: "-3s",
            }}
          />
          <use
            href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
            style={{
              animation:
                "move-forever 13s cubic-bezier(0.55,0.5,0.45,0.5) infinite",
              animationDelay: "-4s",
            }}
          />
          <use
            href="#gentle-wave"
            x="48"
            y="7"
            fill="#ffffff"
            style={{
              animation:
                "move-forever 20s cubic-bezier(0.55,0.5,0.45,0.5) infinite",
              animationDelay: "-5s",
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default AboutWaveAnimation;



