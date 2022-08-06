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
          <h1
            className="text-center text-4xl font-bold"
            // data-aos="fade-left"
            // data-aos-duration="2000"
            // data-aos-delay="1000"
          >
            Stacks <span className="text-[#b936f5]">Techniques</span>
          </h1>
        </div>
        {/* icons techniques */}
        <ul className="flex justify-center flex-wrap lg:justify-aound  pt-8">
          <li
            className="icons"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <DiReact />
          </li>
          <li
            className="icons"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="1500"
          >
            <DiJavascript1 />
          </li>
          <li
            className="icons"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
          >
            <DiCss3 />
          </li>
          <li
            className="icons"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2500"
          >
            <DiHtml5 />
          </li>
          <li
            className="icons"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="3000"
          >
            <DiNodejs />
          </li>
          <li
            className="icons"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="3000"
          >
            <DiGit />
          </li>
          <li
            className="icons"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2500"
          >
            <DiGithubBadge />
          </li>
          <li
            className="icons"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2000"
          >
            <SiTailwindcss />
          </li>
          <li
            className="icons"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1500"
          >
            <SiRedux />
          </li>
          <li
            className="icons"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <FaAws />
          </li>
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
