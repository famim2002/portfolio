import React from "react";
import ContactCard from "./home-components/ContactCard";
import Header from "../common-components/Header";

const ContactMe = () => {
  return (
    <section className="contact_back px-3 h-dvh overflow-hidden  py-10">
          <Header header={'contact us'} className='text-white'/>
      <div className="container">
        <div className="pt-15">
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
