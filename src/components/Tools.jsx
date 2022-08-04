import React from "react";

// import icon
import { DiVisualstudio, DiWindows } from "react-icons/di";

import { SiPostman, SiMacos, SiMicrosoftoffice } from "react-icons/si";

const Tools = () => {
  return (
    <section className="container mx-auto pt-20">
      <div>
        {/* text */}
        <h1
          className="text-center text-4xl font-bold"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          Autres <span className="spans"> Outils</span>
        </h1>
        {/* Outils */}
        <ul className="flex justify-center flex-wrap lg:justify-around pt-8">
          <li
            className="icons"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <DiVisualstudio />
          </li>
          <li
            className="icons"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1500"
          >
            <SiPostman />
          </li>
          <li
            className="icons"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2000"
          >
            <DiWindows />
          </li>
          <li
            className="icons"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2500"
          >
            <SiMacos />
          </li>
          <li
            className="icons"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="3000"
          >
            <SiMicrosoftoffice />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tools;
