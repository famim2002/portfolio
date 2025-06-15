import React from "react";
import Banner from "../components/home/Banner";
import AboutMe from "../components/home/AboutMe"
import ServicesMe from "../components/home/ServicesMe"
import ContactMe from "../components/home/ContactMe"




const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <ServicesMe />
      <ContactMe/>
    </>
  );
};

export default Home;
