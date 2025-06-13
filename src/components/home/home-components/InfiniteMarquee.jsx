import React from "react";

const words = [
  "DESIGN",
  "WEB DEVELOPMENT",
  "CAMPAIGNS",
  "PHOTOGRAPHY",
  "VIDEOGRAPHY",
  "SOCIAL MEDIA",
  "VISUAL IDENTITY",
  "DIGITAL",
  "STRATEGY",
  "SEO",
  "COPYWRITING",
  "BRANDING",
];

const InfiniteMarquee = () => {
  const repeatCount = 3;

  const marqueeAnimation = {
    animation: "marquee-slide 25s linear infinite reverse",
  };

  return (
    <>
      <style>{`
        @keyframes marquee-slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <div className="relative w-full h-full overflow-hidden flex justify-center font-[Archivo]">
        {[...Array(repeatCount)].map((_, idx) => (
          <div
            key={idx}
            className="min-w-full flex-shrink-0 whitespace-nowrap"
            style={marqueeAnimation}
          >
            {words.map((word, i) => (
              <p
                key={i}
                className={`inline-block relative text-[50px] px-5 m-0 ${
                  i % 3 === 0
                    ? "font-extrabold"
                    : i % 3 === 1
                    ? "font-semibold"
                    : "font-light italic"
                }`}
              >
                <span className="absolute left-[-7px] top-1/2 transform -translate-y-1/2 font-black">
                  .
                </span>
                {word}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default InfiniteMarquee;
