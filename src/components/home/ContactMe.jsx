import React from "react";
import ContactCard from "./home-components/ContactCard"


const ContactMe = () => {
  return (
    <section className="contact_back px-3 h-dvh overflow-hidden pt-30 md:pt-60 lg:pt-0">
      <div className="container">
        <div className="flex lg:h-dvh items-center ">
          <ContactCard/>
        <div><h2 className="text-white">contact us</h2></div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
