import React from "react";
import AboutMe from "../components/AboutMe";
import Github from "../components/Github";
import Header from "../components/Header";
import TechnicalSkills from "../components/TechnicalSkills";
import Tools from "../components/Tools";

const About = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <TechnicalSkills />
      <Tools />
      <Github />
    </div>
  );
};

export default About;
