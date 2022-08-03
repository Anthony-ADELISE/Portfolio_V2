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
        <ul className="flex flex-col items-center lg:justify-around lg:flex-row">
          <li className="text-7xl">
            <DiReact />
            <DiReact />
          </li>
          <li className="text-7xl"></li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
          <li className="text-7xl">
            <DiReact />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TechnicalSkills;
