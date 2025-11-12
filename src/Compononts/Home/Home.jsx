
import React from "react";
import Navebar from "./Navebar/Navebar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";

import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="bg-black shadow-black shadow-xl mx-auto w-au">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default Home;
