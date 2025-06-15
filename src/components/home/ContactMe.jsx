import React from "react";
import ContactCard from "./home-components/ContactCard"


const ContactMe = () => {
  return (
    <section className="contact_back px-3 h-dvh overflow-hidden pt-10">
      <div className="container">
        <div className="flex lg:h-dvh items-center ">
          <ContactCard/>
        <div><h2>contact us</h2></div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
