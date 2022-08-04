import React from "react";

// import icon
import { DiVisualstudio, DiWindows } from "react-icons/di";

import { SiPostman, SiMacos, SiMicrosoftoffice } from "react-icons/si";

const Tools = () => {
  return (
    <section className="container mx-auto pt-20">
      <div>
        {/* text */}
        <h1 className="text-center text-4xl font-bold">
          Autres <span className="spans"> Outils</span>
        </h1>
        {/* Outils */}
        <ul className="flex justify-center flex-wrap lg:justify-around pt-8">
          <li className="icons">
            <DiVisualstudio />
          </li>
          <li className="icons">
            <SiPostman />
          </li>
          <li className="icons">
            <DiWindows />
          </li>
          <li className="icons">
            <SiMacos />
          </li>
          <li className="icons">
            <SiMicrosoftoffice />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tools;
