import React from "react";
import ErrorScrambleComponent from "../components/error-components/ErrorScrambleText"

const Error404 = () => {
  return (
    <section>
      <div className="container">
        <div className="h-dvh flex w-md mx-auto gap-5 justify-center items-center">
          <span className="">
            <ErrorScrambleComponent />
          </span>
          <h1 className="text-6xl  text-white  font-headerFont items-center">
            not found
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Error404;
