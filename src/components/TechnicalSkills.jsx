import React from "react";

// import icons
import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiNodejs,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";

import { SiTailwindcss, SiRedux } from "react-icons/si";

import { FaAws } from "react-icons/fa";

const TechnicalSkills = () => {
  return (
    <section className="container mx-auto">
      <div>
        {/* text */}
        <div>
          <h1 className="text-center text-4xl font-bold">
            Stacks <span className="text-[#b936f5]">Techniques</span>
          </h1>
        </div>
        {/* icons techniques */}
        <ul className="flex justify-center flex-wrap lg:justify-aound  pt-8">
          <li className="icons">
            <DiReact />
          </li>
          <li className="icons">
            <DiJavascript1 />
          </li>
          <li className="icons">
            <DiCss3 />
          </li>
          <li className="icons">
            <DiHtml5 />
          </li>
          <li className="icons">
            <DiNodejs />
          </li>
          <li className="icons">
            <DiGit />
          </li>
          <li className="icons">
            <DiGithubBadge />
          </li>
          <li className="icons">
            <SiTailwindcss />
          </li>
          <li className="icons">
            <SiRedux />
          </li>
          <li className="icons">
            <FaAws />
          </li>
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
