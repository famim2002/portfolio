import React, { useState } from "react";
import BrandButton from "../../common-components/BrandButton"

const ContactCard = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);

    // Clear error as soon as user starts typing
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Full name is required.");
    } else {
      setError("");
      console.log("Form submitted:", { name });
    }
  };

  return (
    <div className="p-3 sm:p-5 md:p-10 h-auto w-full max-w-[900px] rounded-[30px]  mx-auto bg-[#2121212a] ">

        <div className="h-full w-full ">
          <h3 className="text-4xl md:text-6xl font-headerFont text-white underline decoration-red-700">
            let's do business together.
          </h3>
          <form onSubmit={handleSubmit} className="pt-5 ">
            <div className="border-t-2 border-white pt-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={handleChange}
                  className={`w-full text-white text-2xl md:text-3xl p-2 font-regularFont outline-none border-b-2 transition duration-300 ${
                    error
                      ? "bg-red-600 border-red-600 placeholder-white"
                      : "bg-[#21212155] border-transparent focus:border-white"
                  }`}
                />
                {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
              </div>

              <BrandButton />
            </div>
          </form>
        
        </div>
      
    </div>
  );
};

export default ContactCard;
